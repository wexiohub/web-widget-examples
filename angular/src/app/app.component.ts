import { Component } from "@angular/core";
import {
  VisitorIdentity,
  WexioWidgetComponent,
} from "@wexio/messenger-widget-angular";

/**
 * Wexio Widget — Angular example.
 *
 * Minimal Angular standalone host that mounts the Wexio messenger in
 * demo mode (no `publicKey`). To wire it to your own integration:
 *
 *   1. Replace `undefined` below with your `pk_live_...` key.
 *   2. (Optional) Set `user` to a verified `VisitorIdentity` — see the
 *      three supported shapes (JWT / HMAC / Google FedCM).
 *
 * Docs: https://learn.wexio.io/docs/web-widget
 */
@Component({
  standalone: true,
  imports: [WexioWidgetComponent],
  selector: "app-root",
  template: `
    <main>
      <h1>Wexio Widget — Angular example</h1>
      <p>
        This page mounts <code>&lt;wexio-widget-ng&gt;</code> in demo mode.
        Look for the floating launcher in the bottom-right corner.
      </p>
      <p>
        Open <code>src/app/app.component.ts</code> and set
        <code>publicKey</code> to your <code>pk_live_…</code> key to
        wire it to your own Wexio integration.
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

      <wexio-widget-ng
        [publicKey]="publicKey"
        [user]="user"
        (resize)="onResize($event)"
        (close)="onClose()"
      />
    </main>
  `,
})
export class AppComponent {
  // Demo mode — omit publicKey and the widget renders the bundled
  // mock content. Replace with your own key for live mode.
  publicKey: string | undefined = undefined;

  // Identity is optional. `null` = anonymous visitor. Re-assign when
  // identity changes (login / logout).
  user: VisitorIdentity | null = null;

  onResize(size: { width: number; height: number }) {
    console.log("[wexio] resize", size.width, size.height);
  }
  onClose() {
    console.log("[wexio] close");
  }
}
