import { app, BrowserWindow } from 'electron';

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "SnapSync",
        width: 1000,
        height: 800
    });

    mainWindow.loadURL("http://localhost:5173/");
}

app.whenReady().then(createMainWindow);