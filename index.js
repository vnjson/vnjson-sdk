const
  webview                      = document.getElementById('web_view'),
  liveReload                   = require('./service/live-reload');

//const data = require('./data/data');



Vue.config.lang = 'en-US';

webview.addEventListener('dom-ready', () => {

  //webview.openDevTools()
   liveReload.start(webview);
});

Vue.use(VueI18n);



Vue.locale('ru-RU', require('./locales/ru-RU'));
Vue.locale('en-US', require('./locales/en-US'));



new Vue({
	el: '#main__menu',
	//data: [],
	methods: require('./menu/main-menu'),

	
});

new Vue({
	el: '#game__menu',
	//data: [],
	methods: require('./menu/current-project'),

});

new Vue({
	el: '#change__lang',
	methods: {
		'lang__en':()=>{
			Vue.config.lang = "en-US";
		},
		'lang__ru':()=>{
			Vue.config.lang = "ru-RU";
		}
	}
});
/*
const {project} = require('./system/current');
const gameComponent = documet.querySelectorAll('.game-component');
if(project){
	gameComponent.style.color ='#444';
}else{
	gameComponent.style.color ='#999';

}*/