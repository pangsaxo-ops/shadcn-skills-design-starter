/*
 * Fetch a Figma node's design context (JSON) and a PNG render via the REST API.
 *
 * Token is read from FIGMA_ACCESS_TOKEN (see .env.local — never hardcode / commit).
 *
 * Usage:
 *   node scripts/fetch-figma-node.js <nodeId> [fileKey]      # fetch one node + image
 *   node scripts/fetch-figma-node.js --search <term> [fileKey] [rootNodeId]
 *                                                            # find nodes by name
 *
 * Output goes to ./.figma-cache/ (gitignored).
 */
const fs = require("fs")
const path = require("path")

// load .env.local without a dependency
const envPath = path.join(__dirname, "..", ".env.local")
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2]
  }
}

const token = process.env.FIGMA_ACCESS_TOKEN
if (!token) {
  console.error("Missing FIGMA_ACCESS_TOKEN (set it in .env.local)")
  process.exit(1)
}

const DEFAULT_FILE_KEY = "LGBaUrbOmGDb0pZBHg71Fj"
const headers = { "X-Figma-Token": token }
const outDir = path.join(__dirname, "..", ".figma-cache")
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

async function getNodes(fileKey, ids) {
  const res = await fetch(
    `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${ids}`,
    { headers }
  )
  if (!res.ok) throw new Error(`nodes ${res.status} ${res.statusText}`)
  return res.json()
}

// walk a Figma node tree, collecting {id,name,type} whose name matches term
function search(node, term, acc) {
  if (!node) return acc
  if (node.name && node.name.toLowerCase().includes(term.toLowerCase())) {
    acc.push({ id: node.id, name: node.name, type: node.type })
  }
  for (const child of node.children || []) search(child, term, acc)
  return acc
}

async function run() {
  const args = process.argv.slice(2)

  if (args[0] === "--search") {
    const term = args[1]
    const fileKey = args[2] || DEFAULT_FILE_KEY
    const rootId = args[3] || "0:1"
    console.log(`Searching "${term}" under ${rootId} in ${fileKey}...`)
    const data = await getNodes(fileKey, rootId)
    const root = data.nodes[rootId] && data.nodes[rootId].document
    const hits = search(root, term, [])
    console.log(`Found ${hits.length} node(s):`)
    for (const h of hits) console.log(`  ${h.id}\t[${h.type}]\t${h.name}`)
    fs.writeFileSync(
      path.join(outDir, `search-${term.replace(/\W+/g, "-")}.json`),
      JSON.stringify(hits, null, 2)
    )
    return
  }

  const nodeId = args[0]
  const fileKey = args[1] || DEFAULT_FILE_KEY
  if (!nodeId) {
    console.error("Provide a nodeId, or use --search <term>")
    process.exit(1)
  }
  const safe = nodeId.replace(/[:]/g, "-")

  console.log(`Fetching node ${nodeId}...`)
  const nodeData = await getNodes(fileKey, nodeId)
  fs.writeFileSync(
    path.join(outDir, `node-${safe}.json`),
    JSON.stringify(nodeData, null, 2)
  )
  console.log(`Saved node-${safe}.json`)

  console.log("Fetching PNG render...")
  const imgRes = await fetch(
    `https://api.figma.com/v1/images/${fileKey}?ids=${nodeId}&format=png&scale=2`,
    { headers }
  )
  if (!imgRes.ok) throw new Error(`images ${imgRes.status} ${imgRes.statusText}`)
  const imgUrl = (await imgRes.json()).images[nodeId]
  if (!imgUrl) return console.log("No image URL returned.")
  const png = await fetch(imgUrl)
  if (!png.ok) return console.log("Failed to download PNG.")
  fs.writeFileSync(
    path.join(outDir, `node-${safe}.png`),
    Buffer.from(await png.arrayBuffer())
  )
  console.log(`Saved node-${safe}.png`)
}

run().catch((e) => {
  console.error(e.message || e)
  process.exit(1)
})
