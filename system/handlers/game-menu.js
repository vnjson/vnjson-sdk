const
  vnjson                    = require('vnjson-utils'),
  configApp                 = require('../../config/app'),
  configVue                 = require('../../config/vue'),
  current                   = require('../current'),
  configProject             = require('../../config/project');
var WINDOW = global.nwWindow.get().window;


module.exports = {
	runCurrentProject:()=>{
		const webView = WINDOW.document.getElementById('wv');
		if(webView){
			webView.reload();
		}else{


		var pathname = configApp.projectsDir +"/"+ current.project;
		var port     = configApp.port;
		var webViewTag = `<webview id="wv" src="http://localhost:${port}"></webview>`;
		
		function callback(){		
			var output = WINDOW.document.getElementById('output')
			output.innerHTML = webViewTag;
		/**reload button*/
			var runReload = WINDOW.document.getElementById('run-reload');
			var local = require('../../locales/'+configVue.lang);
			runReload.innerHTML = `<i class="fa fa-refresh" aria-hidden="true"></i>${local.gameMenu.reload}`;
		/*/>reload button*/
		};

		vnjson.run(port,pathname,callback);
		}
	


		/*wv.addEventListener("loadstart",()=>{
			//WINDOW.alert("loadstart");
		});
		wv.addEventListener('loadstop',()=>{
			//WINDOW.alert('loadStop');
			//wv.showDevTools(true, output);
		});*/

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
		const webView = WINDOW.document.getElementById('wv');
		webView.showDevTools(true);
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