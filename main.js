const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const fs = require("fs");
const {discordRPC} = require("./src/discordRpc");
const RPC = require("discord-rpc");
const { minecraftLauncher } = require('./src/minecraftlauncher');
const {launchMinecraftFabric} = require("./src/minecraftlauncherfabric");

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
  createWindow();
  discordRPC("Heroin launcher", "started....");
})


ipcMain.on('minecraftFabric', async (event, username, version) => {
    await launchMinecraftFabric(username, version);
    discordRPC("Heroin Launcher", `username:  ${username}`)
});


ipcMain.on('minecraftClear', async (event, username, version) => {
    await minecraftLauncher(username, version);
    discordRPC("Heroin Launcher", `username:  ${username}`)
});






ipcMain.on('sendRamAmount', (event, ram) => {
  console.log(ram);
});



