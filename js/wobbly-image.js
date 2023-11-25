export function wobbly() {
  const image = document.querySelector(".image img");

  setTimeout(() => {
    image.classList.add("loadstretch");
  }, 4000);
  setTimeout(() => {
    image.classList.remove("loadstretch");
  }, 6000);

  image.addEventListener("mouseenter", function () {
    image.classList.remove("played");
    image.classList.add("play");
  });
  image.addEventListener("mouseleave", function () {
    setTimeout(() => {
      image.classList.remove("play");
      image.classList.add("played");
    }, 8000);
  });
}
