document.addEventListener('DOMContentLoaded', function () {
  const textDisplay = document.querySelector('#text');
  const textArea = document.querySelector('#text-area');

  document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.key === 'e' || event.key === 'E')) {
      event.preventDefault();
      textDisplay.classList.add('hidden');
      textArea.classList.remove('hidden');

      textArea.focus();
      textArea.select();
    }

    if ((event.ctrlKey || event.metaKey) && (event.key === 's' || event.key === 'S')) {
      event.preventDefault();
      textDisplay.textContent = textArea.value;
      textArea.classList.add('hidden');
      textDisplay.classList.remove('hidden');
    }
  });
});