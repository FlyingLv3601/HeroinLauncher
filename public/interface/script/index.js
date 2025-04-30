import { elements } from './elements.js';
import { hide, show } from "../../module/showHide.js";



document.addEventListener("DOMContentLoaded", () => {

  function hideAllIframes() {
    hide(elements.rightContent)
    hide(elements.iframeSettings);
    hide(elements.modsIframe);
    hide(elements.contactFrame)
  }

  
  //settings
  elements.settingButtons.addEventListener("click", () => {
    hideAllIframes();
    show(elements.iframeSettings);
    hide(elements.rightContent);
  });


  //mods
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
  });

  elements.contactButton.addEventListener("click", () => {
    hideAllIframes();
    show(elements.contactFrame);
  });
});