const box = document.querySelector('#resizable_box');

let isResizing = false;
let startWidth, startHeight, startX, startY;

box.addEventListener('mousedown', e => {
  const rect = box.getBoundingClientRect();
  const isCorner = e.clientX > rect.right - 25 && e.clientY > rect.bottom -25;

  if (isCorner) {
    isResizing = true;
    startWidth = rect.width;
    startHeight = rect.height;
    startX = e.clientX;
    startY = e.clientY;
    e.preventDefault();
  }
});

document.addEventListener('mousemove', e => {
  if (!isResizing) return;

  width = startWidth + (e.clientX - startX);
  height = startHeight + (e.clientY - startY);

  box.style.width = width + 'px';
  box.style.height = height + 'px';
});

document.addEventListener('mouseup', () => isResizing = false);