/*=-=-=-=-=-=-=-=-=-=-=-=-= Toggle icon navbar =-=-=-=-=-=-=-=-=-=-=-==-=-=*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*=-=-=-=-=-=-=-=-=-=-=-=-= Scroll sections active link =-=-=-=-=-=-=-=-=-=-=-==-=-=*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.array.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=' + id + ']")
          .classList.add("active");
      });
    }
  });

  /*=-=-=-=-=-=-=-=-=-=-=-= sticky navbar =-=-=-=-=-=-=-=-=-=-=-=-=-=*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*=-=-=-=-=-=-=-=-=-=-=-=-= Remove toggle icon and navbar when click navbar link (scroll) =-=-=-=-=-=-=-=-=-=-=-==-=-=*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*=-=-=-=-=-=-=-=-=-=-=-= Scroll reveal =-=-=-=-=-=-=-=-=-=-=-=-=-=*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

function readMoreLess() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let myBtn = document.getElementById("mybtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    myBtn.innerHTML = "Read More";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    myBtn.innerHTML = "Read Less";
  }
}
