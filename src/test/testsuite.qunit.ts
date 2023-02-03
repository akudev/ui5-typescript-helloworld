// @ts-ignore
window.suite = function() {

	// @ts-ignore
	var oSuite = new parent.jsUnitTestSuite(),
		sContextPath = location.pathname.substring(0, location.pathname.lastIndexOf("/") + 1);

	oSuite.addTestPage(sContextPath + "unit/unitTests.qunit.html");

/*
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "./integration/AllJourneys.json", false);
	xhr.send(null);
	JSON.parse(xhr.responseText).forEach(function (name: string) {
		oSuite.addTestPage(sContextPath + "integration/opaTestsComponent.qunit.html?journey=" + name);
	});

	return oSuite;*/
};