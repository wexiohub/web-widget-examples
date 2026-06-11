"use strict";

module.exports = function (environment) {
  const ENV = {
    modulePrefix: "wexio-widget-example-ember",
    environment,
    rootURL: "/",
    locationType: "history",
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {},
    },
    APP: {},
  };

  if (environment === "development") {
    // Empty — runtime config
  }
  if (environment === "production") {
    // Empty — runtime config
  }

  return ENV;
};
