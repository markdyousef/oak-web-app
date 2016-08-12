const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// const crashReporter = electron.crashReporter;
let mainWindow = null;

// crashReporter.start();

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 728
    });

    mainWindow.loadURL('http://localhost:3000');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
