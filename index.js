window.addEventListener("load", () => {
  const form = document.querySelector(".form");
  const heading = document.querySelector(".heading");
  const footer = document.querySelector(".footer");
  const qs = document.querySelector(".qs");
  const right = document.querySelector(".right");

  form.classList.add("slide-up");
  footer.classList.add("slide-up");
  heading.classList.add("slide-right");
  qs.classList.add("slide-left");
  right.classList.add("slide-right");
});
