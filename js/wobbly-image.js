export function wobbly() {
  const image = document.querySelector(".image img");

  setTimeout(() => {
    image.classList.add("loadstretch");
  }, 4000);
  setTimeout(() => {
    image.classList.remove("loadstretch");
  }, 6000);

  const mouseOverHandler = function () {
    image.classList.remove("played");
    image.classList.add("play");

    setTimeout(() => {
      image.classList.remove("play");
      image.classList.add("played");
    }, 8000);

    image.removeEventListener("mouseover", mouseOverHandler);

    setTimeout(() => {
      image.addEventListener("mouseover", mouseOverHandler);
    }, 10000);
  };

  image.addEventListener("mouseover", mouseOverHandler);
}
