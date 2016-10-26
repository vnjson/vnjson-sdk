
vnjs.on('alert',function(event){
	console.log('autorun: '+event);
},true);

vnjs.on('vibration',function(flag){
	console.log('vibration_mod:on');
});

vnjs.on('snake',function(data){
		console.log('param')
});
vnjs.on('blur', function(data){
		console.log('blur: '+data)
});
vnjs.on('bg',function(data){
		console.log('background: '+data);
});
vnjs.on('scene',function(data){
		console.log('scene: '+data);
});
vnjs.on('audio',function(data){
		console.log('audio: '+data)
});

vnjs.on('sound',function(data){
		console.log('sound: '+data)
});
vnjs.on('show',function(data){
		console.log('show: '+data)
});
vnjs.on('center',function(data){
		console.log(data)
});
vnjs.on('left',function(data){
		console.log('left: '+data)
});
vnjs.on('right',function(){
		console.log('param');	
});
/**
 * @ Это aliase персонажа
 */
vnjs.aliase = function(character, reply){
		console.log(character.name+": "+reply);
};
vnjs.jump = function(pathname){
	/**
		не работает потому что первый прыжок
		загружает саму сцену, а второй только по
		label'ам прыгает.
	*/
	this.current.pathname = pathname;
	var pathArr = pathname.split('/');
	this.current.scene = pathArr[0];
	this.current.label  = pathArr[1];
	this.getScene(this.current.scene);
};

/**

*/
vnjs.on('parallax',function(event){
	/*
$('#scene').attr({
		'class':'layer',
		'data-depth': 0.25
	})*/
	console.log(event+' :{class:"layer",dataDepth:0.25}');
}, true);