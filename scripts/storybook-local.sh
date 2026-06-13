#!/usr/bin/env bash
#
# Storybook can't run when the project's absolute path contains glob
# metacharacters such as the "[" "]" in this iCloud folder name
# ("[AIBoostcamp2] Shadcn test"). Storybook discovers its config + stories
# with glob(), so the brackets are read as a character class and match
# nothing (SB_CORE-SERVER_0006 MainFileMissingError).
#
# Workaround: mirror the project into a bracket-free temp directory using
# symlinks (so live edits to the real files are still picked up), then run
# Storybook from there. On a normal clone at a clean path you don't need
# this — just use `npm run storybook` / `npm run build-storybook`.
#
# Usage:
#   bash scripts/storybook-local.sh dev -p 6006
#   bash scripts/storybook-local.sh build

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MIRROR="${TMPDIR:-/tmp}/cskd-storybook"

rm -rf "$MIRROR"
mkdir -p "$MIRROR"

# Symlink every top-level entry (incl. dotfiles) into the bracket-free mirror.
shopt -s dotglob
for entry in "$PROJECT_DIR"/*; do
  name="$(basename "$entry")"
  case "$name" in
    .git|.next|storybook-static) continue ;;  # skip heavy / regenerated
  esac
  ln -s "$entry" "$MIRROR/$name"
done
shopt -u dotglob

echo "▶ Storybook mirror: $MIRROR"
cd "$MIRROR"
exec npx storybook "$@"
