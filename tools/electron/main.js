import { argv } from 'yargs';
import { app, BrowserWindow, Menu } from 'electron';
// const crashReporter = electron.crashReporter;

const isDev = process.env.NODE_ENV !== 'production';

let menu = null;
let mainWindow = null;

// crashReporter.start();

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        show: false,
        width: 1024,
        height: 728
    });

    if (isDev) {
        const PORT = argv.port || 3000;
        mainWindow.loadURL(`http://localhost:${PORT}`);
        mainWindow.loadURL(`file://${__dirname}/build/index.html`);
    } else {
        mainWindow.loadURL(`file://${__dirname}/index.html`);
    }

    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.show();
        mainWindow.focus();
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    if (process.platform === 'darwin') {
        const template = [{
            label: 'Electron',
            submenu: [{
                label: 'About Electron',
                selector: 'orderFrontStandardAboutPanel:'
            }, {
                type: 'separator'
            }, {
                label: 'Quit',
                accelerator: 'Command+Q',
                click() {
                    app.quit();
                }
            }]
        }, {
            label: 'isDev: ' + isDev,
            submenu: []
        }, {
            label: 'View',
            submenu: (process.env.NODE_ENV === 'development') ? [{
                label: 'Reload',
                accelerator: 'Command+R',
                click() {
                    mainWindow.webContents.reload();
                }
            }, {
                label: 'Toggle Full Screen',
                accelerator: 'Ctrl+Command+F',
                click() {
                    mainWindow.setFullScreen(!mainWindow.isFullScreen());
                }
            }, {
                label: 'Toggle Developer Tools',
                accelerator: 'Alt+Command+I',
                click() {
                    mainWindow.toggleDevTools();
                }
            }] : [{
                label: 'Toggle Full Screen',
                accelerator: 'Ctrl+Command+F',
                click() {
                    mainWindow.setFullScreen(!mainWindow.isFullScreen());
                }
            }]
        }];
        menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }
});
