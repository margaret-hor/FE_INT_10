const fileInput = document.getElementById('photo');
const fileName = document.querySelector('.file_name');
const currentPhoto = document.querySelector('.current_photo');

fileInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const maxFileSize = 1 * 1024 * 1024;
    if (file.size > maxFileSize) {
      alert(`File size must be 1MB or less. Your file is ${(file.size / 1024 / 1024).toFixed(2)} MB`);
      fileInput.value = '';
      return;
    }
    fileName.textContent = file.name;
    
    const reader = new FileReader();
    reader.onload = function(event) {
      currentPhoto.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

function deletePhoto() {
  fileInput.value = '';
  fileName.textContent = 'Upload photo';
  currentPhoto.src = './assets/images/profile_img.jpg'
}