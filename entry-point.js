const 
  conf                    = require('./config/sdk'),
  electron                = require('electron'),
  app                     = electron.app,
  BrowserWindow           = electron.BrowserWindow;


var mainWindow = null;
// Проверяем что все окна закрыты и закрываем приложение.
app.on('window-all-closed', ()=> {
  // В OS X обычное поведение приложений и их menu bar
  //  оставаться активными до тех пор пока пользователь закроет их явно комбинацией клавиш Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', ()=> {

  mainWindow = new BrowserWindow({
                      width: conf.width,
                      height: conf.height,
                      icon: './icons/vnjson-256_256.png',
                      resizable: false
                    });
  mainWindow.setMenu(null);
  mainWindow.loadURL('file://' + __dirname + '/index.html');

mainWindow.webContents.openDevTools();
  mainWindow.on('closed', ()=> {
    mainWindow = null;
  });
});