const users = [
  { id: 1, name: "Oleksandr", age: 25 },
  { id: 2, name: "Maria", age: 30 },
  { id: 3, name: "Ivan", age: 22 },
  { id: 4, name: "Kateryna", age: 28 },
  { id: 5, name: "Dmytro", age: 35 },
];

const searchInput = document.querySelector('#search-input');
const usersContainer = document.querySelector('#users-container');

(function createCards() {
  users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('user-card');
    card.innerHTML = `
      <h3>${user.name}</h3>
      <span>${user.age}</span>
    `;
    usersContainer.appendChild(card);
  });
})();

function displayUsers(searchTerm) {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  const allCards = document.querySelectorAll('.user-card');

  allCards.forEach((card, index) => {
    if (filteredUsers.some(user => user.name === users[index].name)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

searchInput.addEventListener('input', function () {
  displayUsers(this.value);
});