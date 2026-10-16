# Wexio Widget — Examples

[![npm version](https://img.shields.io/npm/v/@wexio/messenger-widget-react.svg?label=widget%20version&color=blue)](https://www.npmjs.com/package/@wexio/messenger-widget-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Documentation](https://img.shields.io/badge/docs-wexio.io-blue.svg)](https://learn.wexio.io/docs/web-widget)

Integration examples for the [Wexio](https://wexio.io) web messenger across every supported framework — React, Vue 3, Angular, Ember — plus the framework-free script-injection loader and the bare web component.

🎮 **Try it live in the [Wexio Playground](https://cdn.wexio.io/playground)**: configure the widget (theme, 100 presets, fonts, layout, languages, Home blocks), connect your own `pk_live_...` public key to preview your real widget, and copy the install code for React, Vue, Angular, Ember or the script tag. The Playground replaces the former StackBlitz / CodeSandbox demos.

Each example below is a self-contained minimal app: clone the repo (or copy a folder) and run it locally (see [Local development](#local-development)). All examples auto-pull the latest published widget version on `npm install`; pinned versions get refreshed by [the release sync workflow](#how-this-stays-up-to-date) whenever a new widget version is published.

## Examples

| Framework / mode | Files |
|---|---|
| **React** (Vite) | [`react/`](./react/) |
| **Vue 3** (Vite) | [`vue/`](./vue/) |
| **Angular** (standalone) | [`angular/`](./angular/) |
| **Ember** | [`ember/`](./ember/) |
| **Script loader** (zero build) | [`cdn-loader/`](./cdn-loader/) |
| **Web Component** (zero build) | [`web-component/`](./web-component/) |

> **Demo mode by default** — every example boots with `publicKey="pk_demo"`, a documentation sentinel the widget recognises and short-circuits to bundled mock content. Swap in your own `pk_live_...` key in the entry file to wire to your integration (each example points you to the right spot in a comment at the top).

## What each example shows

| Example | Demonstrates |
|---|---|
| `react/` | `<WexioWidget>` mount, memoised `user` identity, `onResize` / `onOpen` / `onClose` callbacks. |
| `vue/` | Vue 3 wrapper with reactive `user` ref, `@resize` / `@close` event listeners, `isCustomElement` Vite config for `wexio-widget`. |
| `angular/` | Standalone `WexioWidgetComponent`, `@Input` / `@Output` plumbing, `CUSTOM_ELEMENTS_SCHEMA`. |
| `ember/` | Side-effect import that registers `<wexio-widget>` globally, `{{on}}` modifier for `wexio:resize` / `wexio:close`. |
| `cdn-loader/` | One-line `<script>` install + `window.wexioSettings.user` pre-boot identity. |
| `web-component/` | `<script type="module">` runtime load + `<wexio-widget>` element with addEventListener. |

## Local development

Each example is a normal npm project. To run locally:

```bash
# React / Vue
cd react && npm install && npm run dev

# Angular
cd angular && npm install && npm start

# Ember
cd ember && npm install && npm start

# Static HTML (cdn-loader / web-component)
cd cdn-loader && npx serve .
```

## How this stays up to date

The release flow:

```
new widget version → npm publish (web-widget repo)
                  ↓
            repository_dispatch event
                  ↓
    sync-on-release workflow (this repo)
                  ↓
   bump every package.json + refresh lockfile + commit
                  ↓
        next `npm install` pulls latest
```

- **`npm install`-time freshness**: every example uses caret ranges (`"@wexio/messenger-widget-react": "^1.0.22"`), so a fresh `npm install` already picks up the latest published version automatically.
- **Pinned-version refresh**: the [`sync-on-release.yml`](./.github/workflows/sync-on-release.yml) workflow listens for the `widget-released` `repository_dispatch` event fired by [`wexiohub/web-widget`](https://github.com/wexiohub/web-widget) at the end of its publish run. It bumps every example's `package.json` to the new exact version, refreshes lockfiles, and commits to `main` — so the version badge above stays accurate and the lockfiles match what npm actually resolved.

No manual maintenance per release.

## Bug reports / requests

This repo holds **examples only**. For widget bugs or feature requests, file in the main repo at <https://github.com/wexiohub/web-widget/issues>.

## License

MIT — see [LICENSE](./LICENSE).
