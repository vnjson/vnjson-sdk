const
  server                    = require('../service/server');
module.exports = {
	startCurrentProject (){
		
		server.start(()=>{
			const webview = window.document.getElementById('web_view');
			webview.reload();
		});

	},
	viewProjectTree (){
		alert('view');
	},
	showScenesData (){
		alert('scenes');
	},
	showImagesData (){
		alert('images');
	},
	showAudioData (){
		alert('Audio');
	},
	showGameCharacters (){
		alert('characters');
	},
	showStatisticPage (){
		alert('stats');
	},
	showDebugPage (){
		alert('debug');
	},
	showGameLibraries (){
		alert('libs');
	},
	showDataGamePlugins (){
		alert('plugins');
	},
	showOptionsPage (){
		alert('options');
	},
	buildHtmlProject (){
		alert('build');
	}

};