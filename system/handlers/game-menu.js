const
  vnjson                    = require('vnjson-utils'),
  configApp                 = require('../../config/app'),
  configVue                 = require('../../config/vue'),
  current                   = require('../current'),
  configProject             = require('../../config/project');
var WINDOW = global.nwWindow.get().window;


module.exports = {

	viewProjectTree:()=>{
		WINDOW.alert('Tree');
	},
	showScenesData:()=>{
		WINDOW.console.info('Сделать что бы можно было\n jump по сценам \n из этого меню');
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

	showDebugPage:()=>{
		WINDOW.alert('yaml valid');
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