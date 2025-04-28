import { elements } from './elements.js';
import { hide, show } from "../../module/showHide.js";

const savedNickname = localStorage.getItem('nickname');
if (savedNickname) {
  elements.playerUserName.value = savedNickname;
}

document.addEventListener("DOMContentLoaded", () => {
  const versionItems = document.querySelectorAll(".version-item");

  function hideAllIframes() {
    hide(elements.iframeSettings);
    hide(elements.modsIframe);
  }

  elements.dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    show(elements.version);
  });

  versionItems.forEach(item => {
    item.addEventListener("click", () => {
      elements.selected.textContent = item.getAttribute('value') || item.textContent;
      hide(elements.version);
    });
  });

  window.addEventListener("click", () => {
    hide(elements.version);
  });

  elements.playButton.addEventListener("click", () => {
    const nickname = elements.playerUserName.value.trim();
    
    if (nickname) {
      localStorage.setItem('nickname', nickname);
      
      window.electronAPI.sendUserInput(nickname, elements.selected.textContent);
    }
  });

  elements.settingButtons.addEventListener("click", () => {
    hideAllIframes();
    show(elements.iframeSettings);
    hide(elements.rightContent);
  });

  elements.mods.addEventListener("click", () => {
    hideAllIframes();
    show(elements.modsIframe);
    hide(elements.rightContent);
  });

  window.addEventListener('message', (event) => {
    if (event.data.action === "closeMods") {
      hideAllIframes();
      show(elements.rightContent);
    }
    if (event.data.ram) {
      window.electronAPI.sendRamAmount(event.data.ram);
    }
  });
});