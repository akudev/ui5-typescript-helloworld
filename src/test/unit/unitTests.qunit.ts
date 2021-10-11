QUnit.config.autostart = false; // while in ES modules, this would be executed AFTER the import below, this is outside the sap.ui.define() after being transformed to UI5 syntax
// TODO: the above is valid once https://github.com/r-murphy/babel-plugin-transform-modules-ui5/issues/80 is fixed; otherwise an import which requires interop is needed below

import "unit/controller/App.qunit";

QUnit.start();