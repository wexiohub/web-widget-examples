import Application from "@ember/application";
import Resolver from "ember-resolver";
import loadInitializers from "ember-load-initializers";
import config from "wexio-widget-example-ember/config/environment";

// Side-effect import: registers `<wexio-widget>` as a custom element.
// Glimmer renders unknown HTML tags as native DOM elements, so once
// the element is registered you can use it directly in any .hbs file.
import "@wexio/messenger-widget-ember";

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
