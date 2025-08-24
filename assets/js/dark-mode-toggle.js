document.addEventListener("DOMContentLoaded", function () {
  const btn = document.createElement("button");
  btn.id = "dark-mode-toggle";
  btn.innerText = "🌙 Dark";
  document.body.appendChild(btn);

  btn.addEventListener("click", function () {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      document.documentElement.removeAttribute("data-theme");
      btn.innerText = "🌙 Dark";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      btn.innerText = "☀️ Light";
    }
  });
});
