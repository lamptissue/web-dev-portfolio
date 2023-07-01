import { handleFormSubmit } from "./form.js";
import { pageLoad } from "./pageload.js";
import { handleCustomCursor } from "./cursor.js";
import { skillsMatter } from "./skills-matter.js";
import { wobbly } from "./wobbly-image.js";
const isHomePage = window.location.pathname === "/"; // Adjust the path if your home page has a different URL

document.addEventListener("DOMContentLoaded", function () {
  if (isHomePage) {
    handleFormSubmit();
    skillsMatter();
    pageLoad();
    wobbly();
  }
  handleCustomCursor();
});
