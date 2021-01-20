sap.ui.define(
	["sap/ui/core/util/MockServer"], 
	function(MockServer){
		return {
			
			init: function(){
				// Create object of mock server and inform about Odata Uri which is to be used for mocking
				var oMockServer = new MockServer({
					rootUri: "/api/odatav2/"	
				});
				
				// Configuration for mocking like if there is a need to auto generate data please do.
				MockServer.config({
					autoRespond: true,
					autoRespondAfter: 1000
				});
				// Call simulate method of the mock server  pass metadata path
				var sPath = jQuery.sap.getModulePath("hts.localService");
				var sMeta = sPath + '/metadata.xml';
				oMockServer.simulate(sMeta, {
					sMockdataBaseUrl: sPath + '/mockdata',
					bGenerateMissingMockData: true	
				});
				// Start the mock server using start method.
				// oMockServer.start();
			}
			
		};
	}
);