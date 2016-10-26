const  
  {Menu}                  = require('electron');


const template = [
  {
    label: 'Project',
    submenu: [
      {
        label: 'new',
        accelerator: 'Ctrl+N',
        click (){
          console.log('ALERT');
        }
      },
      {
        label: 'open',
        accelerator: 'Ctrl+O',
        click (){
          console.log('OPEN');
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Save',
        acceleratror: 'Ctrl+S',
        click (){
          console.log('SAVE');
        }
      },
      {
        label: 'Save as'
      },
      {
      label: 'Save',
        acceleratror: 'Ctrl+R',
        click (){
          console.log('reload');
        }
      },
    ]
  },
  {
    label: 'Tools',
    submenu: [
      {
        label: 'ScreenShot',
        accelerator: 'PrtScr',
        click (item, focusedWindow) {
         console.log('screenShot')
        }
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Kasin',
        accelerator: 'Ctrl+K',
        click () {
          console.log('kasin');
        }
      }
     
    ]
  },
  {
    label: 'Settings',
    submenu: [
      {
        label: 'minimize',
        role: 'minimize'
      },
      {
        label: 'close',
        role: 'close'
      }
    ]
  },
  {
    label: 'Plugins',
    submenu: [
      {
        label: 'install'
      },
      {
        type: 'separator'
      },
      {
        label: 'AudioRecord',
      },
      {
        label: 'yamlEditor'
      },
      {
        label: ''
      }
    ]
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'Documentation',
        click () { require('electron').shell.openExternal('http://electron.atom.io') }
      },
      {
        label: 'License'
      },
      {
        label: 'Changelog',
      },
      {
        label: 'hello YANL 1.2'
      },

    ]
  }
];



const menu  = Menu.buildFromTemplate(template);



module.exports = ()=>{
  Menu.setApplicationMenu(menu);
};