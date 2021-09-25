'use strict';

{
    const open = document.getElementById("open");
    const overlay = document.querySelector(".overlay");
    const close = document.getElementById("close");

    open.addEventListener("click", () => {
        console.log("クリック");
        overlay.classList.add("show");
    });

    close.addEventListener("click", () => {
        console.log("closeをクリック");
        overlay.classList.remove("show");
    });
}