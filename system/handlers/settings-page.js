const
  vnjson                    = require('vnjson-utils'),

  configVue                 = require('../../config/vue');
var WINDOW = global.nwWindow.get().window;

module.exports = {
	
	
	
	langSeletor:()=>{
		WINDOW.alert(configVue.lang)
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
	},
	//**topbar mainMenu*/
	
}