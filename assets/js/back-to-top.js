document.addEventListener("DOMContentLoaded", function () {
  const btn = document.createElement("button");
  btn.id = "back-to-top";
  btn.innerHTML = "↑";
  document.body.appendChild(btn);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
