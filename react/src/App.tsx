import { useCallback, useMemo } from "react";
import {
  WexioWidget,
  type VisitorIdentity,
} from "@wexio/messenger-widget-react";

/**
 * Wexio Widget — React example.
 *
 * Minimal Vite + React 19 host that mounts the Wexio messenger in
 * demo mode (no `publicKey`). To wire it to your own integration:
 *
 *   1. Replace `undefined` below with your `pk_live_...` key.
 *   2. (Optional) Pass a `user` proof — see `VisitorIdentity` for the
 *      three supported shapes (JWT / HMAC / Google FedCM).
 *
 * Docs: https://learn.wexio.io/docs/web-widget
 */
export function App() {
  // Demo mode — omit publicKey and the widget renders the bundled
  // mock content. Replace with your own key for live mode.
  const publicKey: string | undefined = undefined;

  // Identity is optional. Memoise so a fresh literal every render
  // doesn't churn the internal env memo. (`undefined` = anonymous.)
  const user = useMemo<VisitorIdentity | undefined>(() => undefined, []);

  const onResize = useCallback(
    ({ width, height }: { width: number; height: number }) => {
      console.log("[wexio] resize", width, height);
    },
    [],
  );
  const onOpen = useCallback(() => console.log("[wexio] open"), []);
  const onClose = useCallback(() => console.log("[wexio] close"), []);

  return (
    <main
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        maxWidth: 720,
        margin: "60px auto",
        padding: "0 20px",
        lineHeight: 1.6,
      }}
    >
      <h1>Wexio Widget — React example</h1>
      <p>
        This page mounts <code>&lt;WexioWidget /&gt;</code> in demo mode.
        Look for the floating launcher in the bottom-right corner.
      </p>
      <p>
        Open <code>src/App.tsx</code> and set <code>publicKey</code> to
        your <code>pk_live_…</code> key to wire it to your own Wexio
        integration.
      </p>
      <p>
        Full docs:{" "}
        <a
          href="https://learn.wexio.io/docs/web-widget"
          target="_blank"
          rel="noreferrer"
        >
          learn.wexio.io/docs/web-widget
        </a>
      </p>

      <WexioWidget
        publicKey={publicKey}
        user={user}
        onResize={onResize}
        onOpen={onOpen}
        onClose={onClose}
      />
    </main>
  );
}
