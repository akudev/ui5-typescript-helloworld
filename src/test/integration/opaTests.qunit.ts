// Do not add "import" statements here because they would be transpiled to "sap.ui.define(...)"
// which cannot be used in files directly loaded via <script> tag in async loading mode.

QUnit.config.autostart = false; // needs to happen synchronously as the script is loaded

sap.ui.getCore().attachInit(function () {

	sap.ui.require([
		"ui5/typescript/helloworld/test/integration/HelloJourney"
	], QUnit.start);
});