const WINDOW = global.nwWindow.get().window;
const 
  current             = require('../current'),
  configApp           = require('../../config/app'),
  vnjson              = require('vnjson-utils'),
  data                = require('../data');

function runCurrentProject (){
	var pathname = configApp.projectsDir +"/"+ current.project;
	var port     = configApp.port;
	vnjson.run(port,pathname,function(){
		console.log(pathname);
	});
}

module.exports = {
	openCurrentProjectPage:()=>{
		WINDOW.alert(current.project);
	},
	openProjectsPage:()=>{
		WINDOW.alert('projects list');
	},
	openSettingsPage:()=>{
		WINDOW.alert('settings page');
	},
	openHelpPage:()=>{
		WINDOW.alert('HELP');
	},
	openLinkInBrowser:()=>{
		runCurrentProject();
	    global.nwgui.Shell.openExternal(data.location);
	},
	collapseApp:()=>{
		 global.nwWindow.get().minimize();
	},
	closeApp:()=>{
		global.nwWindow.get().close();
	}
}