window.onload = updateDate;
function updateDate() {
  let currentDate = new Date().getFullYear();
  let dateElements = document.getElementsByClassName("yearDate");
  for (let i = 0; i < dateElements.length; i++) {
    dateElements[i].innerText = currentDate.toString();
  }
}
