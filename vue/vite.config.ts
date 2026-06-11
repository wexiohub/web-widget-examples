import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// IMPORTANT: `wexio-widget` is a custom element registered by
// `@wexio/messenger-widget-vue` at import time. Telling Vue's template
// compiler to treat it as a custom element suppresses the unknown-tag
// warning and prevents Vue from trying to resolve it as a component.
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === "wexio-widget",
        },
      },
    }),
  ],
});
