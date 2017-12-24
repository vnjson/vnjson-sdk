function projects(){
	$.get('./views/projects.html', data=>{
		$('#main').html(data);
		$('#new-project').click(function(e){
			$.get('/new-project', res=>{

			})
		})
	})
};



function showModules(){
	$.get('./views/modules.html', data=>{
		$('#main').html(data);
		$.get('/vnjson-modules', res=>{

			res.map(m=>{
				document
				  .getElementById('main')
				  .innerHTML += '<li>'+m.split('modules/').pop()+"</li>";
			})
			
		})
	})
};



function help(){
	$.get('./views/help.html', data=>{
		$('#main').html(data);

	})
};





$(document).ready(function(){
	$('#main').text('hello-vnjson')


	$('#projects').click(projects);
	$('#vnjson-modules').click(showModules);
	$('#help').click(help);
});