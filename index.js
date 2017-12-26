
const express = require('express'),
	  app = new express(),
	  sdk = require('./sdk');


app.use(express.static('./public'));

app.get('/', (req, res)=>{
	res.sendfile('./public/index.html')
});

app.get('/vnjson-modules', (req, res)=>{
	res.sendfile('./modules.json');
});



app.get('/new-project', (req, res)=>{

	sdk.init();
	res.send('ok');
});

app.listen(9294, ()=>{




nw.Window.open('http://localhost:9294', {}, function(win) {
	win.showDevTools();


});


});