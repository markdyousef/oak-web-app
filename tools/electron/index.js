import { argv } from 'yargs';
import { app, BrowserWindow } from 'electron';
// const crashReporter = electron.crashReporter;

const PORT = argv.port || 3000;

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

    mainWindow.loadURL(`http://localhost:${PORT}`);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
