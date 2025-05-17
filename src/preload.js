const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  minecraftFabric: (username, version) => ipcRenderer.send('minecraftFabric', username, version),
  minecraftClear: (username, version) => ipcRenderer.send('minecraftClear', username, version),
  sendRamAmount: (ram) => ipcRenderer.send('sendRamAmount', ram),
});

