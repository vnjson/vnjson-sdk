const
  vnjson                    = require('vnjson-utils'),
  configApp                 = require('../../config/app'),
  current                   = require('../current');
  var WINDOW = global.nwWindow.get().window;

module.exports = {
	initYamlProject:()=>{
		//this
		vnjson.init(current.project,configApp.projectsDir,(err)=>{
			if(err){
				console.error(err);
			}else{
				WINDOW.alert('Проект инициализирован'+": "+configApp.projectsDir)
			}
		});
	},
	removeSelectedProject:()=>{
		vnjson.remove(`${configApp.projectsDir}/${current.project}`,(err)=>{});
		WINDOW.alert('Проект удален'+": "+current.project);
	},
}