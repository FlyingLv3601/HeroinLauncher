import { elements } from './elements.js';
import { hide, show } from "../../module/showHide.js";


//get username from localstorage
document.addEventListener("DOMContentLoaded", () => {

const savedNickname = localStorage.getItem('nickname');
const versionItems = document.querySelectorAll(".version-item");

if (savedNickname) {
    corr(`username ${savedNickname} was loaded from local storage`)
    elements.playerUserName.value = savedNickname;
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
    //launching
    const nickname = elements.playerUserName.value.trim();
    localStorage.setItem('nickname', nickname);
    window.electronAPI.sendUserInput(nickname, elements.selected.textContent);
    corr("launching minecraft...")
});

});




function corr(text) {
    elements.corrText.innerHTML = text;
    elements.corr.classList.add("notification-show");
    elements.err.classList.remove("notification-show");
  
    setTimeout(() => {
      elements.corr.classList.remove("notification-show");
    }, 2000);
  }
  
  function err(text) {
    elements.errText.innerHTML = text;
    elements.err.classList.add("notification-show");
    elements.corr.classList.remove("notification-show");
  
    setTimeout(() => {
      elements.err.classList.remove("notification-show");
    }, 2000);
  }
  