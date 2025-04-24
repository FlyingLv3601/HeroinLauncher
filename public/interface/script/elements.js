export const elements = {
  //ui elements
  dropdown: document.getElementById("dropdown"),
  version: document.getElementById("version"),
  playButton: document.getElementById("play-button"),
  selected: document.getElementById("selected"),
  
  // datas from players
  playerUserName: document.getElementById("player-user-name"),
  username: document.getElementById("username"),
  
  // settings and mods
  settingButtons: document.getElementById("settings-button"),
  iframeSettings: document.getElementById("iframe-settings"),
  mods: document.getElementById("mods-list"),
  modsIframe: document.getElementById("mods-iframe"),
  
  //main {heroinn launcher}
  rightContent: document.getElementById("right-content"),
  
  // versions
  versionItems: document.querySelectorAll(".version-item"),
  
  // other shit
  mainContainer: document.getElementById("main-container"),
  loader: document.getElementById("loader"),
  errorDisplay: document.getElementById("error-message"),



  //mod-list
  meteor: document.getElementById("meteor"),
  thunder: document.getElementById("thunder"),
  bthack: document.getElementById("bthack"),
  sodium: document.getElementById("sodium"),
  iris: document.getElementById("iris"),
  fabricapi: document.getElementById("fabricapi"),
  litematica: document.getElementById("litematica"),
  replaymod: document.getElementById("replaymod"),
  minimap: document.getElementById("minimap")

};




export const modLinks = {
  meteor: "https://github.com/etianl/meteor-client-1.20.4/releases",
  thunderhack: "https://github.com/Pan4ur/ThunderHack-Recode",
  bthack: "https://github.com/Ferra13671/BThack/releases",
  sodium: "https://modrinth.com/mod/sodium/versions",
  iris: "https://modrinth.com/mod/iris/versions",
  litematica: "https://modrinth.com/mod/litematica",
  replayMod: "https://www.curseforge.com/minecraft/mc-mods/replay-mod-fabric-and-forge",
  fabricApi: "https://www.curseforge.com/minecraft/mc-mods/fabric-api",
  miniMap: "https://modrinth.com/mod/journeymap"
};