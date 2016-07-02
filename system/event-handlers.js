const
  vnjson                    = require('vnjson-utils'),
  configApp                 = require('../config/app'),
  configProject             = require('../config/project'),
  current                   = require('./current');
var WINDOW = global.nwWindow.get().window;

module.exports = {
	initYamlProject:()=>{
		//this
		vnjson.init(current.project,configApp.projectsDir,(err)=>{
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
				new_win.title = configProject.title;
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