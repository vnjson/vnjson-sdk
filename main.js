const 
  vnjson           = require('vnjson-utils');

const projectsDir = 'f:/sandbox';
const projectName = "kserks";


$('#init_btn').on('click',function(e){
	e.preventDefault();
	vnjson.init(projectName,projectsDir,(err)=>{
		if(err){
			console.error(err);
		}else{
			alert('Проект инициализирован');
		}
	});
});

$('#remove_btn').on('click',function(e){
	e.preventDefault();
	vnjson.remove(`${projectsDir}/${projectName}`,(err)=>{
		if(err){
			console.error(err);
		}else{
			alert('Проект Удален');
		}
	});
})