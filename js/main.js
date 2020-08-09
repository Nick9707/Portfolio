const el = document.querySelector("#module");
const mp = 0.01;

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX * mp + "px";
  el.style.backgroundPositionY = -e.offsetY * mp + "px";
});