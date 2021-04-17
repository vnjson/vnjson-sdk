import Vue from '../lib/vue.js'
import Vuex from '../lib/vuex.js'
import vuexI18n from '../lib/vuex-i18n.js';

Vue.use(Vuex)
/**
 * locales
 */
import locale_ru from '../locale/ru.js';
import locale_en from '../locale/en.js';



var state = {
  //local
  currentLang: null,
  languages: [
    {
      short: 'ru',
      long: 'Russian'
    },
    {
      short: 'en',
      long: 'English'
    }
  ]
}



state.currentLang = state.languages[0];

const mutations = {

    setLanguage(state, lang) {
      state.currentLang = lang;
    }

  } 



const store = new Vuex.Store({
  state,
  mutations
});


Vue.use(vuexI18n.plugin, store);


Vue.i18n.add('ru', locale_ru);
Vue.i18n.add('en', locale_en);

export default store;