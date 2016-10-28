const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const globalShortcut = electron.globalShortcut;

let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({frame: false, fullscreen: true});

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  globalShortcut.register('CmdOrCtrl+Shift+d', () => {
    mainWindow.webContents.toggleDevTools();
  });

  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
