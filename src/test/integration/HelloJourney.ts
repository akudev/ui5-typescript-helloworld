import opaTest from "sap/ui/test/opaQunit";
import Opa5 from "sap/ui/test/Opa5";

QUnit.module("Hello");

opaTest("Should open the Hello dialog", 2, function (Given: Opa5, When: Opa5, Then: Opa5) {

	// Arrangements
	Given.iStartMyUIComponent({
		componentConfig: {
			name: "ui5.typescript.helloworld"
		}
	});

	//Actions
	When.onTheAppPage.iPressTheSayHelloWithDialogButton();

	// Assertions
	Then.onTheAppPage.iShouldSeeTheHelloDialog();

	// Cleanup
	Then.iTeardownMyApp();
});
