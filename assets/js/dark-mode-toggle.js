document.addEventListener("DOMContentLoaded", function () {
  const btn = document.createElement("button");
  btn.id = "dark-mode-toggle";
  document.body.appendChild(btn);

  // Load saved theme from localStorage (default: dark)
  let currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);

  // Update button label
  function updateBtn() {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      btn.innerText = "☀️ Light";
    } else {
      btn.innerText = "🌙 Dark";
    }
  }
  updateBtn();

  // Toggle on click
  btn.addEventListener("click", function () {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    updateBtn();
  });
});
