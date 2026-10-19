
const nav = document.getElementById("nav");



const playButton =
  document.querySelector(".play");

playButton?.addEventListener("click", function () {

  if (this.textContent === "▶") {

    this.textContent = "Ⅱ";

  } else {

    this.textContent = "▶";

  }

});



document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener("click", event => {

      const target =
        document.querySelector(
          link.getAttribute("href")
        );

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

    });

  });