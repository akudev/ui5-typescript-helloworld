import opaQunit from "sap/ui/test/opaQunit";
import Opa5 from "sap/ui/test/Opa5";
import { Opa5When, Opa5Then } from "./opaPagesAPI"

QUnit.module("Hello");

opaQunit("Should open the Hello dialog", 2, function (Given: Opa5, When: Opa5When, Then: Opa5Then) {

	// Arrangements
	Given.iStartMyUIComponent({
		componentConfig: {
			name: "ui5.typescript.helloworld"
		}
	});
Given.iTeardownMyApp
	//Actions
	When.onTheAppPage.iPressTheSayHelloButton();

	// Assertions
	Then.onTheAppPage.iShouldSeeTheHelloDialog();

	// Cleanup
	Then.iTeardownMyApp();
}, false);
