const
  webview                      = document.getElementById('web_view'),
  liveReload                   = require('./service/live-reload');

const data = require('./data/data');
const methods = require('./menu/current-project');

Vue.config = require('./config/vue');

webview.addEventListener('dom-ready', () => {

  //webview.openDevTools()
   liveReload.start(webview);
});

 const App = new Vue({
	el: Vue.config.el,
	data: data,
	methods: methods
});

