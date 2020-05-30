const { app, BrowserWindow } = require('electron');
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const isDev = require('electron-is-dev');
const serve = require('electron-serve');
const squirrelStartup = require('electron-squirrel-startup');
const path = require('path');

if (squirrelStartup) {
  app.quit();
}

const loadURL = serve({ directory: path.join(__dirname, '..', 'build') });

const createWindow = async () => {
  const mainWindow = new BrowserWindow({
    show: false,
    darkTheme: true,
    autoHideMenuBar: true,
    center: true,
    icon: path.join(__dirname, '..', isDev ? 'public' : 'build', 'icon.png'),
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: true,
      webSecurity: false,
      webviewTag: true,
      preload: `${__dirname}/preload.js`,
    },
  });

  if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
    await installExtension(REACT_DEVELOPER_TOOLS);
  } else {
    await loadURL(mainWindow);
  }

  mainWindow.maximize();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// enables to test apps with invalid certificates
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
  event.preventDefault();
  callback(true);
});
