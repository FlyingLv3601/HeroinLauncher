import { elements } from './elements.js';
import { hide, show } from "../../module/showHide.js";
import {corr, err} from "../../module/notification.js";


//get username from localstorage
document.addEventListener("DOMContentLoaded", () => {

const savedNickname = localStorage.getItem('nickname');
const versionItems = document.querySelectorAll(".version-item");

if (savedNickname) {
    elements.playerUserName.value = savedNickname;
    corr("username was loaded from local storage")
}else{
    err("username wasn't founds")
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
});

});