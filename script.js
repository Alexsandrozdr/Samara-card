"use strict"
// Pegando botão via script e adicionando evento de click
const button = document.getElementById('switch');
button.addEventListener('click', () => {
  document.documentElement.classList.toggle("light");
});