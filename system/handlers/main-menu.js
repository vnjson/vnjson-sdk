const WINDOW = global.nwWindow.get().window;
const current             = require('../current');
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
	}
}