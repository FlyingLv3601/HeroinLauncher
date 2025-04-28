const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const fs = require("fs");
const {launchMinecraft} = require("./src/minecraftlauncher");

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'src/preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false
    }
  });

  win.setMenu(null);

  win.loadFile('public/interface/index.html');
}

app.whenReady().then(() => {
  createWindow()
})


ipcMain.on('sendUsername', async (event, username, version) => {
    await launchMinecraft(username, version);
});





ipcMain.on('sendRamAmount', (event, ram) => {
  console.log(ram);
});



