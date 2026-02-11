# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # React Easy Cron Builder

    A lightweight, zero-dependency visual cron builder for React (TypeScript + Vite).

    ## Features

    - Small, focused UI component to build simple cron expressions (daily/weekly/monthly).
    - Ships JS bundles and declaration files (`dist/index.d.ts`) for TypeScript consumers.
    - Exports `style.css` so consumers can import the component's styles.

    ## Quick Start

    Install:

    ```bash
    npm install @blue9kamrul/react-cron-scheduler
    ```

    Usage:

    ```tsx
    import React from 'react'
    import { CronBuilder } from '@blue9kamrul/react-cron-scheduler'
    import '@blue9kamrul/react-cron-scheduler/style.css'

    export default function App(){
      return <CronBuilder />
    }
    ```

    ## Screenshot

    Add the screenshot file to the repo (for example `docs/screenshot.png`) and include it like this in the README:

    ```md
    ![Demo screenshot](docs/screenshot.png)
    ```

    ## Notes for publishing

    - `prepare` script runs the build before `npm publish` (added to `package.json`).
    - License: MIT (included in repository).

    ## Recommendations and checklist before publishing

    - Ensure `version` in `package.json` is appropriately set (bump for new releases).
    - Add a short `CHANGELOG.md` with release notes.
    - Add a small example app or Codesandbox link in the README so users can try it quickly.
    - Consider adding tests, accessibility checks, and a `CONTRIBUTING.md` if this will be community-maintained.

    ## Development

    ```bash
    npm install
    npm run dev
    ```

    ## Advanced

    - `prepare` builds before publishing so consumers receive compiled artifacts and `.d.ts` files.
    - The package is scoped; `publishConfig.access` is set to `public` so it can be published publicly.
