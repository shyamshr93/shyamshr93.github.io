var currentTheme = "";

document.addEventListener("DOMContentLoaded", function () {
  getPageTheme();
  setPageTheme(currentTheme);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', changePageTheme);
  }
});

function getPageTheme() {
  if (localStorage.getItem("theme") !== null) {
    currentTheme = localStorage.getItem("theme");
  } else {
    localStorage.setItem("theme", "light");
    currentTheme = "light";
  }
}

function setPageTheme(theme) {
  const themeIcon = document.querySelector(".theme-icon");
  const body = document.body;

  if (theme === 'light') {
    if (themeIcon) {
      themeIcon.classList.remove("bi-sun");
      themeIcon.classList.add("bi-moon");
    }
  } else {
    if (themeIcon) {
      themeIcon.classList.remove("bi-moon");
      themeIcon.classList.add("bi-sun");
    }
  }

  body.className = "";
  body.classList.add(currentTheme);
}

function changePageTheme() {
  if (currentTheme === 'light') {
    currentTheme = 'dark';
  } else {
    currentTheme = 'light';
  }
  localStorage.setItem('theme', currentTheme);
  setPageTheme(currentTheme);
}