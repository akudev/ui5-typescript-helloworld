import Opa5 from "sap/ui/test/Opa5"
import { AppPageActions, AppPageAssertions } from "./pages/App"

export class Opa5When extends Opa5 {
	onTheAppPage: AppPageActions
};

export class Opa5Then extends Opa5 {
	onTheAppPage: AppPageAssertions
};