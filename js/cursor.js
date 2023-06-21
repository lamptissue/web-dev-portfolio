export function handleCustomCursor() {
  const cursor = document.querySelector("div.cursors");
  const ball = cursor.querySelectorAll("div");
  const links = document.querySelectorAll("a");
  const form = document.getElementById("contact-form");

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
  document.addEventListener("mousemove", function (event) {
    aimX = event.pageX;
    aimY = event.pageY;
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
