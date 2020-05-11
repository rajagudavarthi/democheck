/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"Apple/Bindings/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Apple/Bindings/test/integration/pages/View1",
	"Apple/Bindings/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Apple.Bindings.view.",
		autoWait: true
	});
});