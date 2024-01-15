import { handleFormSubmit } from "./form.js";
import { pageLoad } from "./pageload.js";
import { handleCustomCursor } from "./cursor.js";
import { skillsMatter } from "./skills-matter.js";
import { wobbly } from "./wobbly-image.js";
const isHomePage = window.location.pathname === "/";

document.addEventListener("DOMContentLoaded", function () {
  if (isHomePage) {
    handleFormSubmit();
    skillsMatter();
    pageLoad();
    wobbly();
  }
  if (!isHomePage) {
    document.querySelector("header").style.display = "flex";
  }
  handleCustomCursor();
});
