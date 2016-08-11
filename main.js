const 
  locales                 = require('./system/locales'),
  package                 = require('./package'),
  data                    = require('./system/data');
  global.nwWindow         = nw.Window;
  global.nwgui            =  require('nw.gui');                 
const 
  win                     = nw.Window.get();

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
var app = {
            init:()=>{
              win.title = data.winTitle;
              process.title = package.name;
              /**
              * @localization
              */
              Vue.use(VueI18n);
              Object.keys(locales).forEach(function (lang) {
                Vue.locale(lang, locales[lang]);
               // app.local = locales[lang];
              });
              /**
               * @Vue app
               */
              const App = new Vue({
                el: Vue.config.el,
                data: data,
                methods: _methods
              });
            },
            local:{},
};
onload = function(){




// Create an empty menubar
var mainMenuBar = new nw.Menu({type: 'menubar'});

// Create a submenu as the 2nd level menu
var projectMenu = new nw.Menu();
projectMenu.append(new nw.MenuItem({ label: 'Новый' ,click:()=>{console.log('new Project');},icon: './icons/vnjson-256_256.png'}));
projectMenu.append(new nw.MenuItem({ type: 'separator' }));
projectMenu.append(new nw.MenuItem({ label: 'Открыть',click:()=>{console.log('Open'); },checked:true,tooltip:'cheak it'}));
projectMenu.append(new nw.MenuItem({ label: 'Переключить',click:()=>{console.log('swich');}}));
projectMenu.append(new nw.MenuItem({ label: 'Сохранить',click:()=>{console.log('save');}}));
projectMenu.append(new nw.MenuItem({ label: 'Сохранить как',click:()=>{console.log('save As');}}));
projectMenu.append(new nw.MenuItem({ label: 'Выход',click:()=>{console.log('exit');},icon:'\f0ca'}));

// Create and append the 1st level menu to the menubar
mainMenuBar.append(new nw.MenuItem({
  label: 'Проекты',
  submenu: projectMenu
}));

/**
 * @Tools
 */
var toolsMenu = new nw.Menu();
toolsMenu.append(new nw.MenuItem({ label: 'Поиск' ,click:()=>{console.log('Поиск');}}));
toolsMenu.append(new nw.MenuItem({ label: 'Палитра' ,click:()=>{console.log('Палитра');}}));
toolsMenu.append(new nw.MenuItem({ label: 'Снимок' ,click:()=>{console.log('Снимок');}}));


// Create and append the 1st level menu to the menubar
mainMenuBar.append(new nw.MenuItem({
  label: 'Инструменты',
  submenu: toolsMenu
})); 
/**
 * @Меню настроек SDK
 */

var settingsMenu = new nw.Menu();
settingsMenu.append(new nw.MenuItem({ label: 'Язык' }));
settingsMenu.append(new nw.MenuItem({ label: 'Просмотр' }));
settingsMenu.append(new nw.MenuItem({ label: 'Сервер' }));

// Create and append the 1st level menu to the menubar
mainMenuBar.append(new nw.MenuItem({
  label: 'Настройки',
  submenu: settingsMenu
}));

/*
 * @ Помощь
 */
var helpMenu = new nw.Menu();
helpMenu.append(new nw.MenuItem({ label: 'Документаия' }));
helpMenu.append(new nw.MenuItem({ label: 'Знакомство с YAML 1.2'}));
helpMenu.append(new nw.MenuItem({ label: 'Уроки javascript'}));
helpMenu.append(new nw.MenuItem({ label: 'Лицензия'}));
helpMenu.append(new nw.MenuItem({ label: 'Обновления'}));
helpMenu.append(new nw.MenuItem({ label: 'Changelog'}));

mainMenuBar.append(new nw.MenuItem({
  label: 'Помощь',
  submenu: helpMenu,
}));
// Assign it to `window.menu` to get the menu displayed
nw.Window.get().menu = mainMenuBar;


/***/

Vue.config = require('./config/vue');



app.init();
win.show();
	
};
