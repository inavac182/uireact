# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a **pnpm + Turborepo monorepo** for `@uireact`, a React component library. It uses:
- **pnpm** as the package manager (workspaces)
- **Turborepo** for task orchestration across the monorepo
- **tsup** for building packages (CJS + ESM + `.d.ts`)
- **Jest + ts-jest** for tests
- **Lerna** for versioning and publishing

## Workspace Layout

```
apps/          # docs (Next.js) and storybook apps
packages/      # publishable @uireact/* component packages
platform/      # shared tooling (docs-tools)
executables/   # CLI tools (create-next-app, create-remix-app)
__tests__/     # shared test utilities (e.g., uiRender wrapper)
```

## Commands

### Install dependencies
```bash
pnpm install
```

### Build all packages
```bash
pnpm build:packages
# or for a specific package:
pnpm turbo run build:publish --filter=@uireact/datepicker
```

### Run all tests (builds first, then tests)
```bash
pnpm test
```

### Run tests without rebuilding
```bash
pnpm test:packages
```

### Test a single package
```bash
cd packages/<package-name> && pnpm test
# or via turbo filter:
pnpm turbo run test --filter=@uireact/datepicker
```

### Lint
```bash
pnpm lint
# or for a single package:
pnpm turbo run lint --filter=@uireact/<package-name>
```

### Watch mode (for local development)
```bash
pnpm watch:packages
```

### Dev docs site
```bash
pnpm dev:docs
```

## Architecture

### `@uireact/foundation` — Core package
Everything depends on this. It exports:
- **Theme system**: `Theme` type, `ThemeColor` enum, `ColorCategory`/`ColorCategories` for `primary | secondary | tertiary | positive | negative | error | warning | fonts` color slots
- **Responsive utilities**: `useViewport()` hook, breakpoint types
- **Spacing**: `UiSpacing` component, `UiSpacingProps`
- **Context providers**: Dialog controller (`UiDialogsControllerContext`), Notifications (`UiNotificationsContext`), Confirm dialog (`UiConfirmDialogContext`)
- **Hooks**: `useViewport`, `useWindowDimensions`, controller hooks

### `@uireact/view` — App wrapper
`UiView` is the root provider component that must wrap any app using the library. It sets up all Foundation contexts (dialog, notifications, confirm-dialog) and applies the theme CSS class to the background.

### Component packages
Each package in `packages/` follows the same layout:
```
src/
  index.ts            # public exports
  ui-<name>.tsx       # main component
  ui-<name>.scss      # scoped SCSS styles
  types/              # prop types
  private/            # internal sub-components (not exported)
  utils/              # helpers
__tests__/
  *.spec.tsx          # Jest tests (100% coverage required)
```

### Styling
- Per-component SCSS files compiled via `esbuild-sass-plugin` with `type: 'local-css'` (CSS modules semantics)
- CSS class names from `@uireact/foundation`'s default theme (`default-theme.scss`) use a pattern like `bg-primary-100`, `fonts-<token>`, etc.
- The `UiView` root div sets theme via CSS classes, not context

### Tests
- All tests use `uiRender` from `__tests__/utils/render.tsx` which wraps components in `<UiView>` (required for theme context)
- Tests are in `__tests__/*.spec.tsx`; naming matches source files
- 100% coverage is enforced (`branches`, `functions`, `lines`, `statements`)
- Test environment: `jsdom`

### Build pipeline
- `tsup src/index.ts --format cjs,esm --dts` produces `dist/index.js`, `dist/index.mjs`, `dist/index.d.ts`
- Turbo ensures dependencies build before dependents (`"dependsOn": ["^build:publish"]`)

### Versioning and publishing
- Versions are managed independently per-package via Lerna
- Publishing only from `main` branch: `pnpm publish:packages`
- Version bumps: `pnpm publish:versions`
