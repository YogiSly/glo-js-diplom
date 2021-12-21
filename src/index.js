import modal from "./modules/modal.js";
import slider from "./modules/slider.js";
import timer from "./modules/timer.js";
import scrollUp from "./modules/scroll.js";
import calc from "./modules/calc.js";
import viewer from "./modules/viewer.js";
import sendForm from "./modules/sendForm.js";

modal();
slider({
  view: 3,
  wrap: ".benefits-wrap",
  arrows: ".benefits__arrow",
  item: ".benefits__item",
  times: 2000,
});
slider({
  view: 2,
  wrap: ".services-wrap",
  arrows: ".services__arrow",
  item: ".services__item",
  times: 4000,
});
timer("22 december 2021");
scrollUp();
calc();
viewer();
sendForm({
  formId: "action-form2",
  someElem: [{ type: "block", id: "calc-total" }],
});
sendForm({
  formId: "action-form",
  someElem: [{ type: "block", id: "calc-total" }],
});
sendForm({
  formId: "callback-form",
  someElem: [{ type: "block", id: "calc-total" }],
});
sendForm({
  formId: "application-form",
  someElem: [{ type: "block", id: "calc-total" }],
});
