import { animate } from "./helpers.js";
const modal = () => {
  const modalOverlay = document.querySelector(".overlay");
  const buttons = document.querySelectorAll(".fancyboxModal");
  const modalCallBack = document.querySelector(".header-modal");
  const modalServices = document.querySelector(".services-modal");
  const modal = document.querySelectorAll(".fancybox-skin");

  buttons.forEach((btns) => {
    btns.addEventListener("click", (e) => {
      modalOverlay.style.display = "block";
      if (e.target.classList.contains("call-back")) {
        modalCallBack.style.display = "block";
      } else if (e.target.classList.contains("service-btn")) {
        modalServices.style.display = "block";
      }
    });
  });

  modalOverlay.addEventListener("click", () => {
    modalCallBack.style.display = "none";
    modalServices.style.display = "none";
    modalOverlay.style.display = "none";
  });
  modal.forEach((popup) => {
    popup.addEventListener("click", (e) => {
      if (e.target.classList.contains("header-modal__close")) {
        modalCallBack.style.display = "none";
        modalOverlay.style.display = "none";
      } else if (e.target.classList.contains("services-modal__close")) {
        modalServices.style.display = "none";
        modalOverlay.style.display = "none";
      }
    });
  });
};
export default modal;
