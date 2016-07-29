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