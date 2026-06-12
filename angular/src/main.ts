// Angular CLI's normal build path is AOT — the compiler runs at build
// time and the runtime ships only the compiled output. CodeSandbox's
// preview boots the app in dev mode where some library code (here:
// PlatformNavigation from @angular/common) is partially-compiled and
// falls back to JIT at runtime. Without `@angular/compiler` loaded the
// fallback errors out. Importing it eagerly here makes JIT available;
// the import is tree-shaken from production AOT builds (where the
// compiler isn't needed at all).
import "@angular/compiler";

import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent).catch((err) => console.error(err));
