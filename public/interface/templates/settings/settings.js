const ramRange = document.getElementById('ramRangeInput');
const ramCounter = document.querySelector('.ramcounter');
const closeBtn = document.getElementById("close-settings");
const saveBtn = document.getElementById("save-settings-button");

if (ramRange && ramCounter) {

  ramCounter.textContent = `${ramRange.value} GB`;
  ramRange.addEventListener('input', () => {
  ramCounter.textContent = `${ramRange.value} GB`;
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    const iframe = window.frameElement;
    if (iframe) iframe.style.display = "none";

    const parent = window.parent;
    if (parent && parent.document.getElementById("right-content")) {
      parent.document.getElementById("right-content").style.display = "flex";
    }
  });
}


saveBtn.addEventListener("click", () => {
  const ramRange = document.getElementById('ramRangeInput');
  const ramValue = ramRange.value;
  console.log('💾 RAM to send:', ramValue);
  window.parent.postMessage({ ram: ramValue }, '*');
});



