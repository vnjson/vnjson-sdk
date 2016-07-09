const 
  locales          = require('./system/locales'),
  package          = require('./package');
global.nwWindow = nw.Window;
const win = nw.Window.get();

/**
 *@ concat handlers 
 */

const _methods  = Object.assign(
							require('./system/handlers/game-menu'),
							require('./system/handlers/main-menu'),
							require('./system/handlers/settings-page'),
							require('./system/handlers/projects-page')
						);

/**
 * @ onload
 */
onload = function(){


/***/

Vue.config = require('./config/vue');

  
win.title = `${package.name}@${package.version}`;

/**
 * @intenalization
 */
Vue.use(VueI18n);
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
});

const App = new Vue({
  el: Vue.config.el,
  data: require('./system/data'),
  methods: _methods
});


win.show();
	
};
