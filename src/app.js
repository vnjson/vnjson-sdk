
import Vue from './lib/vue.js';
import app from './views/app.vue';
import store from './store/store.js';



Vue.i18n.set('ru');

new Vue({
	el: '#app',
	store,
  render: h => h(app)
})