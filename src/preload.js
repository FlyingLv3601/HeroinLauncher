const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendUserInput: (username, version) => ipcRenderer.send('sendUsername', username, version),
  sendRamAmount: (ram) => ipcRenderer.send('sendRamAmount', ram),
});
