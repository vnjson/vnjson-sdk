const 
  locales          = require('./system/locales'),
  package          = require('./package');
global.nwWindow = nw.Window;
const win = nw.Window.get();
onload = function(){



Vue.config = require('./config/vue');

  
win.title = `${package.name}@${package.version}`;

/**
 * intenalization
 */
Vue.use(VueI18n);
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
});

const App = new Vue({
  el: Vue.config.el,
  data: require('./system/data'),
  methods: require('./system/event-handlers')
});


win.show();
	
};
