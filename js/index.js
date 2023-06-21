import { handleFormSubmit } from "./form.js";
import { pageLoad } from "./pageload.js";
import { handleCustomCursor } from "./cursor.js";

document.addEventListener("DOMContentLoaded", function () {
  handleFormSubmit();
  pageLoad();
  handleCustomCursor();
});
