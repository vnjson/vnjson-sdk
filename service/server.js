var express = require('express');
var fs = require('fs-extra');
var dir = require('./dirname');


module.exports.start = function(port,pathname,callback){

if(port&&pathname&&callback){
	let app = express();
	let index = fs.readFileSync(`${pathname}/cache/index.html`);
	app.use('/', express.static(pathname+'/cache'));
	app.get("/", function(req, res){
		res.send(index);
	});
	
	app.listen(port,callback);
}else{

var url = `http://localhost:9090`;

	let app = express();
	let index = fs.readFileSync(`${dir['project']}/cache/index.html`);
	app.use('/', express.static(dir['project']+'/cache'));
	app.get("/", function(req, res){
		res.send(index);
	});


		app.listen(9090);
		console.log(`open: ${url}`);
}
	
};

