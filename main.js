const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const fs = require("fs");
const {launchMinecraft} = require("./src/minecraftlauncher");

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'src/preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false
    }
  });

  win.loadFile('public/interface/index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})



ipcMain.on('sendUsername', async (event, username, version) => {
    await launchMinecraft(username, version);
});





ipcMain.on('sendRamAmount', (event, ram) => {
  console.log(ram);
});



