const themeToggle = document.getElementById("theme-toggler");

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}

themeToggle.onclick = toggleTheme;
