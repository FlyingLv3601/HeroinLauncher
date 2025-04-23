import { elements } from './elements.js';
import { hide, show } from "../../module/showHide.js";

document.addEventListener("DOMContentLoaded", () => {
  const versionItems = document.querySelectorAll(".version-item");


  function hideAllIframes() {
    hide(elements.iframeSettings);
    hide(elements.modsIframe);
    show(elements.rightContent);
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
    window.electronAPI.sendUserInput(elements.playerUserName.value, elements.selected.textContent);
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
    if (event.data.ram) {
      window.electronAPI.sendRamAmount(event.data.ram);
    }
  });
});