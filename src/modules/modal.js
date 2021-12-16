import { animate } from "./helpers.js";
const modal = () => {
  const modalOverlay = document.querySelector(".overlay");
  const buttons = document.querySelectorAll(".fancyboxModal");
  const btnCallBack = document.querySelectorAll(".call-back");
  const modalCallBack = document.querySelector(".header-modal");
  const modal = document.querySelectorAll(".fancybox-skin");

  buttons.forEach((btns) => {
    btns.addEventListener("click", (e) => {
      modalOverlay.style.display = "block";
      if (e.target.classList.contains("call-back")) {
        modalCallBack.style.display = "block";
      }
    });
  });

  modalOverlay.addEventListener("click", () => {
    modalCallBack.style.display = "none";
    modalOverlay.style.display = "none";
  });
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("header-modal__close")) {
      modalCallBack.style.display = "none";
      modalOverlay.style.display = "none";
    }
  });
};
export default modal;
