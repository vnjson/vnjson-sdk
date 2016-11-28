const
  vnjsonUtils                         = require('vnjson-utils'),
  conf                                = require('../config/sdk');

module.exports = {
	createProject: ()=>{
		vnjsonUtils.init(`${conf.projectsDir}/baka-kasin`,(status, data)=>{
			alert(status);
		})
	},
	openProject: ()=>{
/*	const electron = require('electron')
const dialog = electrong.dialog;
 dialog.showOpenDialog(global.mainWindow, {
    properties: ['openDirectory']
  })*/
  alert('Open project')

},
	openToolsPage: ()=>{
		alert('tools');
	},
	openSettingsPage: ()=>{
		alert('settings');
	},
	openModulesPage: ()=>{
		alert('modules');
	},
	openHelpPage: ()=>{
		alert('help');
	},
}
