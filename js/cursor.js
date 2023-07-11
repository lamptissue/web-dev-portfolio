export function handleCustomCursor() {
  console.log("hiya");
  const cursor = document.querySelector("div.cursors");
  const ball = cursor.querySelectorAll("div");
  const links = document.querySelectorAll("a");
  const form = document.getElementById("contact-form");
  const isHomePage = window.location.pathname === "/"; // Adjust the path if your home page has a different URL

  let aimX = 0;
  let aimY = 0;

  ball.forEach((ball, index) => {
    let currentX = 0;
    let currentY = 0;
    let speed = 0.3 - index * 0.015;

    const animate = function () {
      currentX += (aimX - currentX) * speed;
      currentY += (aimY - currentY) * speed;
      ball.style.left = currentX + "px";
      ball.style.top = currentY + "px";

      requestAnimationFrame(animate);
    };

    animate();
  });

  // if (!isHomePage) {
  //   const video = document.querySelector("iframe");
  //   video.addEventListener("mouseover", function () {
  //     document.body.style.cursor = "none";

  //     ball.forEach((ball) => {
  //       ball.style.backgroundColor = "transparent";
  //     });
  //   });

  //   video.addEventListener("mouseout", function () {
  //     ball.forEach((ball) => {
  //       ball.style.backgroundColor = "rgb(250, 71, 71)";
  //     });
  //   });
  // }

  if (isHomePage) {
    form.addEventListener("mouseover", function () {
      document.body.style.cursor = "auto";
      ball.forEach((ball) => {
        ball.style.backgroundColor = "transparent";
      });
    });

    form.addEventListener("mouseout", function () {
      document.body.style.cursor = "none";
      ball.forEach((ball) => {
        ball.style.backgroundColor = "rgb(250, 71, 71)";
      });
    });
  }

  document.addEventListener("mousemove", function (event) {
    aimX = event.clientX;
    aimY = event.clientY;
  });

  links.forEach((link) => {
    link.addEventListener("mouseover", function () {
      ball.forEach((ball) => {
        ball.style.backgroundColor = "#14A2D9";
      });
    });

    link.addEventListener("mouseout", function () {
      ball.forEach((ball) => {
        ball.style.backgroundColor = "rgb(250, 71, 71)";
      });
    });
  });
}
