const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup .close");

window.addEventListener("load", () => {
    setTimeout(() => {
        popup.classList.add("animate");
    },1000);
});

popupClose.addEventListener("click", () => {
    popup.classList.remove("animate");
});
