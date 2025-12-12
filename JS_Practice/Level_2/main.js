const input = document.querySelector('#input');
const addBtn = document.querySelector('#btn');
const taskList = document.querySelector('#task-list');

function addTask() {
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter text');
    return;
  }

  const listItem = document.createElement('li');
  listItem.textContent = taskText;
  taskList.appendChild(listItem);

  input.value = '';
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});