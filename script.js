import { clickLabelEvent, observeElements } from "./utils.js";
const labelFaq = document.querySelectorAll("label");

labelFaq.forEach((item) => clickLabelEvent(item)); // or :labelFaq.forEach(clickLabelEvent);

const elements = document.querySelectorAll("section");
observeElements(elements);
