const navToggle = document.querySelector(".nav-toggle");
const directorBtns = document.querySelectorAll(".add-social-btn");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

directorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("director-flip");
  });
});
