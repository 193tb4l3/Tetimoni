// Referensi form komentar 
const form = document.getElementById('comment-form');

// Simpan komentar ke localStorage
form.addEventListener('submit', (e) => {

  e.preventDefault();
  
  // Dapatkan data formulir
  const name = form.elements['name'].value;
  const comment = form.elements['comment'].value;

  // Simpan ke localStorage
  let comments = [];
  
  if(localStorage.getItem('comments')) {
    comments = JSON.parse(localStorage.getItem('comments'));
  }
  
  comments.push({
    name: name,
    comment: comment
  });
  
  localStorage.setItem('comments', JSON.stringify(comments));
  
  // reset form
  form.reset();
  
});