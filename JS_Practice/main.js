const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

function toggleTheme() {
body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
  themeToggle.textContent = 'Switch to Light Theme';
} else {
  themeToggle.textContent = 'Switch to Dark Theme';
}
}

themeToggle.addEventListener('click', toggleTheme);