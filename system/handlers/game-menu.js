const
  vnjson                    = require('vnjson-utils'),
  configApp                 = require('../../config/app'),
  configProject             = require('../../config/project');
var WINDOW = global.nwWindow.get().window;


module.exports = {
	runCurrentProject:()=>{

		/*vnjson.run(configApp.port,()=>{});	*/

	var output = WINDOW.document.getElementById('output')
	output.innerHTML = `<webview id="wv" src="http://kserks.ru/demo/riteres"></webview>`;
	const wv = WINDOW.document.getElementById('wv');
		wv.addEventListener("loadstart",()=>{
			//WINDOW.alert("loadstart");
		});
		wv.addEventListener('loadstop',()=>{
			//WINDOW.alert('loadStop');
			//wv.showDevTools(true/*, output*/);
		});

	},
	viewProjectTree:()=>{
		WINDOW.alert('Tree');
	},
	showScenesData:()=>{
		WINDOW.alert('SCENES');
	},
	showImagesData:()=>{
		WINDOW.alert('Images');
	},
	showAudioData:()=>{
		WINDOW.alert('Audio');
	},
	showGameCharacters:()=>{
		WINDOW.alert('Characters');
	},
	showStatisticPage:()=>{
		WINDOW.alert('showStatisticPage');
	},
	showDebugPage:()=>{
		WINDOW.alert('showDebugPage');
	},
	showGameLibraries:()=>{
		WINDOW.alert('showGameLibraries');
	},
	showDataGamePlugins:()=>{
		WINDOW.alert('showDataGamePlugins');
	},
	showOptionsPage:()=>{
		WINDOW.alert('showOptionsPage');
	},
	buildHtmlProject:()=>{
		WINDOW.alert('buildHtmlProject');
	},
}