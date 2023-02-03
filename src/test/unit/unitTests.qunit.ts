QUnit.config.autostart = false; // In ES modules, this would be executed AFTER the import below,
                            	// but due to the "noWrapBeforeImport" setting in .babelrc.json,
								// this is *before* the sap.ui.define() when transformed to UI5 syntax.
// TODO: the above is valid once https://github.com/r-murphy/babel-plugin-transform-modules-ui5/issues/80 is fixed; otherwise an import which requires interop is needed below

import "unit/controller/App.qunit";

QUnit.start();


/*
// More ES-compatible alternative, but only works if the test actually exports something

QUnit.config.autostart = false;
Promise.all([
	import("unit/controller/App.qunit") // dynamic import
]).then(QUnit.start);

*/

/*
Third alternative is to set
   QUnit.config.autostart = false;
in a separate script file which is included in the html page right after QUnit
*/