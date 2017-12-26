
const notifier = require('node-notifier');

const vnjs = require('./vnjs');

const { join }  = require('path');

const __projectDir = require('./projects').demo;
/**
 * Подключение модулей
 */
require('./modules.json').map( m=>require(m) );

function init(){

/*
 * Копирование бойлерплэйта
 */
vnjs.emit('project-init', __projectDir, function (err){
	if(err){
		throw err;
	}

	
	/*
	 * Первая сборка плагинов и сцены
	 */
	buildScenes();
	buildPlugins();
	/*
	 * Событие сборки проекта
	 */
	vnjs.emit('project-created', { port: 9192, /*browser: 'firefox'*/ });
	/*
 	 * Сообщение
	 */
	notifier.notify({
  		title: 'vnjson',
  		message: 'Проект успешно создан',
  		icon: join(__dirname, '/public/logo.png'), // Absolute path (doesn't work on balloons)
  		sound: true, // Only Notification Center or Windows Toasters
  		timeout: 3,
  		type: 'info' // The notification type : info | warn | error
	});
});//emit


}

function buildScenes(){
	vnjs.emit('scenesToJson', join(__projectDir, '/src/scenes'), join(__projectDir, '/build/tmp/game/scenes/ru-RU'), (err)=>{
		if(err){
			throw err;
		}
		console.log('Сцены собраны');
	})
}



// Give it a menu

function buildPlugins(){

const options = {
        watch: false,
        prefix: "vnjson__",
        defaultTag: 'section'
};

const src_ = join(__projectDir, '/src/plugins/')
const dist_ = join(__projectDir, '/build/tmp/game/')
vnjs.emit('plugins-builder', src_, dist_, options, err=>{
	/*if(err){
		throw err;
	}*/
	console.log('Плагины собрались')
});

};



module.exports = { 
	  		init
};
//localhost:9091
//

 // gulp.watch(join(src, '/**/*.html'), ['html']); buildPlugins()
 // gulp.watch(join(src, '/**/*.css'), ['style']);buildPlugins()
 //gulp.watch(join(src, '/**/*.js'), ['script']);buildPlugins()

//gulp.watch(join(__projectDir,'/src/scenes/**/*.yaml'), buildScenes); 

