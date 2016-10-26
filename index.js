const webview = document.getElementById('web_view');

const data = require('./data/data');
const methods = require('./menu/current-project');

Vue.config = require('./config/vue');

webview.addEventListener('dom-ready', () => {

  //webview.openDevTools()

});

 const App = new Vue({
	el: Vue.config.el,
	data: data,
	methods: methods
});

