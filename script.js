// Animación al hacer clic en los links
document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', () => {
    link.classList.add('clicked');
    setTimeout(() => link.classList.remove('clicked'), 300);
  });
});

// Mostrar el contenido después de la intro
setTimeout(() => {
  document.querySelector('.container').classList.remove('hidden');
}, 2200);
