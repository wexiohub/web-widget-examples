# Wexio Widget — Examples

[![npm version](https://img.shields.io/npm/v/@wexio/messenger-widget-react.svg?label=widget%20version&color=blue)](https://www.npmjs.com/package/@wexio/messenger-widget-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Documentation](https://img.shields.io/badge/docs-wexio.io-blue.svg)](https://learn.wexio.io/docs/web-widget)

Click-to-run integration examples for the [Wexio](https://wexio.io) web messenger across every supported framework — React, Vue 3, Angular, Ember — plus the framework-free script-injection loader and the bare web component.

Each example is a self-contained minimal app. Click **▶ Open in CodeSandbox** below to fork, edit, and try it live. All examples auto-pull the latest published widget version on `npm install`; pinned versions get refreshed by [the release sync workflow](#how-this-stays-up-to-date) whenever a new widget version is published.

## Examples

| Framework / mode | Open in CodeSandbox | Files |
|---|---|---|
| **React** (Vite) | [▶ CodeSandbox](https://codesandbox.io/p/sandbox/github/wexiohub/web-widget-examples/tree/main/react) · [▶ StackBlitz](https://stackblitz.com/github/wexiohub/web-widget-examples/tree/main/react) | [`react/`](./react/) |
| **Vue 3** (Vite) | [▶ CodeSandbox](https://codesandbox.io/p/sandbox/github/wexiohub/web-widget-examples/tree/main/vue) · [▶ StackBlitz](https://stackblitz.com/github/wexiohub/web-widget-examples/tree/main/vue) | [`vue/`](./vue/) |
| **Angular** (standalone) | [▶ CodeSandbox](https://codesandbox.io/p/sandbox/github/wexiohub/web-widget-examples/tree/main/angular) · [▶ StackBlitz](https://stackblitz.com/github/wexiohub/web-widget-examples/tree/main/angular) | [`angular/`](./angular/) |
| **Ember** | [▶ CodeSandbox](https://codesandbox.io/p/sandbox/github/wexiohub/web-widget-examples/tree/main/ember) · [▶ StackBlitz](https://stackblitz.com/github/wexiohub/web-widget-examples/tree/main/ember) | [`ember/`](./ember/) |
| **Script loader** (zero build) | [▶ CodeSandbox](https://codesandbox.io/p/sandbox/github/wexiohub/web-widget-examples/tree/main/cdn-loader) · [▶ StackBlitz](https://stackblitz.com/github/wexiohub/web-widget-examples/tree/main/cdn-loader) | [`cdn-loader/`](./cdn-loader/) |
| **Web Component** (zero build) | [▶ CodeSandbox](https://codesandbox.io/p/sandbox/github/wexiohub/web-widget-examples/tree/main/web-component) · [▶ StackBlitz](https://stackblitz.com/github/wexiohub/web-widget-examples/tree/main/web-component) | [`web-component/`](./web-component/) |

> **Two sandbox providers** for redundancy — CodeSandbox uses cloud microVMs, StackBlitz uses in-browser WebContainers. When one provider has infrastructure trouble, the other usually keeps working. Both auto-import from this repo on click.

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
        next CodeSandbox click pulls latest
```

- **`npm install`-time freshness**: every example uses caret ranges (`"@wexio/messenger-widget-react": "^1.0.22"`), so CodeSandbox's fresh `npm install` on every open already picks up the latest published version automatically.
- **Pinned-version refresh**: the [`sync-on-release.yml`](./.github/workflows/sync-on-release.yml) workflow listens for the `widget-released` `repository_dispatch` event fired by [`wexiohub/web-widget`](https://github.com/wexiohub/web-widget) at the end of its publish run. It bumps every example's `package.json` to the new exact version, refreshes lockfiles, and commits to `main` — so the version badge above stays accurate and the lockfiles match what npm actually resolved.

No manual maintenance per release.

## Bug reports / requests

This repo holds **examples only**. For widget bugs or feature requests, file in the main repo at <https://github.com/wexiohub/web-widget/issues>.

## License

MIT — see [LICENSE](./LICENSE).
