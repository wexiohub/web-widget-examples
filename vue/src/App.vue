<!--
  Wexio Widget — Vue 3 example.

  Minimal Vite + Vue 3 host that mounts the Wexio messenger in demo
  mode (no `public-key`). To wire it to your own integration:

    1. Replace `undefined` below with your `pk_live_...` key.
    2. (Optional) Pass a `user` prop — see VisitorIdentity for the
       three supported shapes (JWT / HMAC / Google FedCM).

  IMPORTANT: `wexio-widget` must be flagged as a custom element in
  `vite.config.ts` (`isCustomElement: tag => tag === 'wexio-widget'`)
  so Vue's compiler doesn't try to resolve it as a component.

  Docs: https://learn.wexio.io/docs/web-widget
-->
<script setup lang="ts">
import { ref } from "vue";
import {
  WexioWidget,
  type VisitorIdentity,
} from "@wexio/messenger-widget-vue";

// Demo mode — leave undefined and the widget renders the bundled
// mock content. Replace with your own key for live mode.
const publicKey = ref<string | undefined>(undefined);

// Identity is optional. `undefined` = anonymous visitor. Use a `ref`
// when identity can change at runtime (login / logout).
const user = ref<VisitorIdentity | undefined>(undefined);

function onResize(size: { width: number; height: number }) {
  console.log("[wexio] resize", size.width, size.height);
}
function onClose() {
  console.log("[wexio] close");
}
</script>

<template>
  <main
    style="
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 720px;
      margin: 60px auto;
      padding: 0 20px;
      line-height: 1.6;
    "
  >
    <h1>Wexio Widget — Vue 3 example</h1>
    <p>
      This page mounts <code>&lt;WexioWidget /&gt;</code> in demo mode.
      Look for the floating launcher in the bottom-right corner.
    </p>
    <p>
      Open <code>src/App.vue</code> and set <code>publicKey</code> to
      your <code>pk_live_…</code> key to wire it to your own Wexio
      integration.
    </p>
    <p>
      Full docs:
      <a
        href="https://learn.wexio.io/docs/web-widget"
        target="_blank"
        rel="noreferrer"
      >
        learn.wexio.io/docs/web-widget
      </a>
    </p>

    <WexioWidget
      :public-key="publicKey"
      :user="user"
      @resize="onResize"
      @close="onClose"
    />
  </main>
</template>
