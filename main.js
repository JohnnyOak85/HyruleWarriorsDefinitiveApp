const { app, BrowserWindow, ipcMain, shell } = require('electron')

let window;
function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: `${__dirname}/resources/icon.png`
    })

    window.loadURL(`${__dirname}/www/index.html`);
    window.setMenu(null);
    window.webContents.openDevTools()
    window.on('closed', () => (window = null));
}


app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

ipcMain.on('open-link', (event, link) => shell.openExternal(link))