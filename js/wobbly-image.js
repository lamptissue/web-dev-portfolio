export function wobbly() {
  const image = document.querySelector(".image img");

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
