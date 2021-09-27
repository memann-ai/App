'use strict';

{
    const open = document.getElementById("open");
    const overlay = document.querySelector(".overlay");
    const close = document.getElementById("close");
    const mask = document.getElementById("mask");

    open.addEventListener("click", () => {
        console.log("クリック");
        overlay.classList.add("show");
        overlay.classList.remove("hidden");
        mask.classList.remove("hidden");
    });

    close.addEventListener("click", () => {
        console.log("closeをクリック");
        overlay.classList.remove("show");
        overlay.classList.add("hidden");
        mask.classList.add("hidden");
    });

    mask.addEventListener("click", () => {
        close.click();
    });
}