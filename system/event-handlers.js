const
  vnjson           = require('vnjson-utils'),
  configApp        = require('../config/app'),
  current          = require('./current');
var WINDOW = global.nwWindow.get().window;

module.exports = {
	initYamlProject:()=>{
		//this
		vnjson.init(projectName,projectsDir,(err)=>{
			if(err){
				console.error(err);
			}else{
				console.log('Проект инициализирован');
			}
		});
	},
	runCurrentProject:()=>{
		vnjson.run(configApp.port,()=>{
			global.nwWindow.open(`http://localhost:${configApp.port}`,(new_win)=>{

			});
		});
	},
	buildHtmlProject:()=>{

	},
	removeSelectedProject:()=>{
		vnjson.remove(`${configApp.projectsDir}/${current.project}`,(err)=>{});
	},
	langSeletor:()=>{
		/*if(WINDOW.Vue.config.lang = "ru-RU"){
			
			WINDOW.location.reload();
			WINDOW.Vue.config.lang = "en-US";
		}else{
			
			WINDOW.window.location.reload();
			WINDOW.Vue.config.lang = "ru-RU";
		}*/
		/**
		 * @todo - Надо запоминать значение
		 */
	}
}