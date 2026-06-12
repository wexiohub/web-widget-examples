import Application from "@ember/application";
import Resolver from "ember-resolver";
import loadInitializers from "ember-load-initializers";
import config from "wexio-widget-example-ember/config/environment";

// The widget runtime is loaded via `<script type="module" src="…/widget.js">`
// in `app/index.html`. v1.0.24 of @wexio/messenger-widget-ember dropped
// the side-effect import that was here previously — ember-cli's
// package-info-cache scan uses synchronous `require()` to read every
// installed package, which fails on pure-ESM modules and broke `ember
// serve` for everyone. The script tag avoids the require() path
// entirely and the WexioWidgetService still works for imperative
// identify / show / hide / shutdown calls.

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
