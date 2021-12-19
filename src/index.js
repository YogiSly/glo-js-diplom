import modal from "./modules/modal.js";
import slider from "./modules/slider.js";
import timer from "./modules/timer.js";
import scrollUp from "./modules/scroll.js";
import calc from "./modules/calc.js";
import viewer from "./modules/viewer.js";
import sendForm from "./modules/sendForm.js";

modal();
slider();
timer("22 december 2021");
scrollUp();
calc();
viewer();
sendForm({
  formName: "action-form2",
  someElem: [{ type: "block", id: "calc-total" }],
});
sendForm({
  formName: "action-form",
  someElem: [{ type: "block", id: "calc-total" }],
});
