document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', e => {
    link.classList.add('clicked');
    setTimeout(() => link.classList.remove('clicked'), 300);
  });
});

.link.clicked {
  transform: scale(0.96);
}
