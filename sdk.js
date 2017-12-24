

const vnjs = require('./vnjs');

const { join }  = require('path');

const __projectDir = "./vn11"// require('projects').demo;
/**
 * Подключение модулей
 */
require('./modules.json').map( m=>require(m) );

function init(){


vnjs.emit('init', __projectDir, function (err){
	if(err){
		throw err;
	}
	console.log('Проект инициализирован1');
	buildScenes();
	buildPlugins();
});

}

function buildScenes(){
	vnjs.emit('scenesToJson', join(__projectDir, '/src/scenes'), join(__projectDir, '/build/tmp/game/scenes/ru-RU'), (err)=>{
		if(err){
			throw err;
		}
		console.log('Сцены собраны');
	})
}



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

