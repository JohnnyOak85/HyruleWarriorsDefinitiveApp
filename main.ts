const { app, BrowserWindow } = require('electron');

let loader;

function createWindow() {
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: `${__dirname}/resources/icon.png`,
    show: false,
  });

  window.loadURL(`${__dirname}/www/index.html`);
  window.setMenu(null);
  window.on('closed', () => (window = null));

  window.once('ready-to-show', () => {
    loader.destroy();
    window.show();
  });
}

function createLoader() {
  loader = new BrowserWindow({ frame: false, moveable: false });
  loader.loadURL(
    `${__dirname}/resources/android/splash/drawable-land-screen.png`
  );
  loader.show();
}

app.on('ready', () => {
  createLoader();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
