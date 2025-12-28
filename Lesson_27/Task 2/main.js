const table = document.querySelector('#dataTable');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('th');

const currentSort = { index: null, dir: 'asc' };

headers.forEach((header, index) => {
  header.addEventListener('click', () => sortTable(index));
});

function sortTable(columnIndex) {
  const rows = [...tbody.querySelectorAll('tr')];
  let dir = (currentSort.index === columnIndex && currentSort.dir === 'asc') ? 'desc' : 'asc';

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent.trim();
    const cellB = rowB.cells[columnIndex].textContent.trim();

    const isNumeric = !isNaN(cellA) && !isNaN(cellB);

    let comparison = 0;
    isNumeric ? comparison = parseFloat(cellA) - parseFloat(cellB) : comparison = cellA.toLowerCase().localeCompare(cellB.toLowerCase());

    return dir === 'asc' ? comparison : -comparison;
  });
  rows.forEach(row => tbody.appendChild(row));

  currentSort.index = columnIndex;
  currentSort.dir = dir;
  updateSortIndicator(columnIndex, dir);
}

function updateSortIndicator(columnIndex, dir) {
  headers.forEach((header, i) => {
    header.classList.remove('sort-asc', 'sort-desc');
    if (i === columnIndex) {
      header.classList.add(dir = 'asc' ? 'sort-asc' : 'sort-desc');
    }
  });
}