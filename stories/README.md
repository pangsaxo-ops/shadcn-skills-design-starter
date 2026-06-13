# Storybook — dev & QA

Interactive component workbench for the design system. Built on **Storybook 10 +
`@storybook/nextjs-vite`**, sharing the exact same tokens as the app (it imports
`app/globals.css`, so all 4 brand modes work).

## Run it

```bash
npm run storybook          # dev server at http://localhost:6006
npm run build-storybook    # static build -> storybook-static/
```

### ⚠️ Running from this iCloud working copy

The local folder name contains brackets — `[AIBoostcamp2] Shadcn test` — and
Storybook discovers its config/stories with `glob()`, which treats `[ ]` as a
character class and finds nothing (`SB_CORE-SERVER_0006 MainFileMissingError`).

On a normal `git clone` to a bracket-free path the standard scripts above just
work. To run from **this** iCloud copy, use the mirror scripts instead — they
symlink the project into a bracket-free temp dir (live edits still reflect):

```bash
npm run storybook:local        # dev
npm run build-storybook:local  # static build
```

## Theme switcher (dev/QA)

The toolbar **Theme** dropdown switches all 4 brand modes live — every story
re-renders with the right semantic tokens:

| Item | Applied to `<html>` |
| --- | --- |
| Light | _(default `:root`)_ |
| Dark | `class="dark"` |
| Primary (blue) | `data-theme="primary"` |
| Secondary (yellow) | `data-theme="secondary"` |

## Accessibility (QA)

`@storybook/addon-a11y` runs axe on each story — see the **Accessibility** panel
for violations (contrast, roles, names) per variant and per theme.

## Coverage

All 55 components have stories under `stories/ui/` (every `components/ui/*`
except `direction`, an RTL provider with no visual surface). Each file is a
CSF3 template — copy the closest one when adding a new component.

> Note: the `:local` dev and build scripts share one mirror dir, so running
> `build-storybook:local` while `storybook:local` is live will restart the dev
> server. Run one at a time.
