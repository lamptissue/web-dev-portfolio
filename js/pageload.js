export function pageLoad() {
  const text = document.querySelectorAll(".loading-text h1");
  const loading = document.querySelector(".loading");
  const cursor = document.querySelector("div.cursors");

  document.body.style.overflow = "hidden";
  const header = document.querySelector("header");
  cursor.style.display = "none";

  text.forEach((text) => {
    text.classList.add("show");
    setTimeout(() => {
      loading.classList.add("hidden");
      cursor.style.display = "block";
      document.body.style.overflow = "auto";

      header.style.display = "flex";
    }, 2800);
  });
}
