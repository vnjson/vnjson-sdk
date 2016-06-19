const {app, BrowserWindow} = require('electron');

const config = require('./config');
let win;

function createWindow(){
	win = new BrowserWindow(config.window);
	win.loadURL(`${process.cwd()}/index.html`);
	win.webContents.openDevTools();
	win.on('closed',()=>{
		win=null;
	});
	win.setMenu(null);

}

app.on('ready',createWindow);
app.on('window-all-closed',()=>{
	if(process.platform!=='darwin'){
		app.quit();
	}
});
app.on('activate',()=>{
	if(win===null){
		createWindow();
	}
});