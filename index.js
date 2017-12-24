
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
	sdk.init()
});

app.listen(9090, ()=>{




nw.Window.open('http://localhost:9090', {}, function(win) {
	win.showDevTools();


});


});