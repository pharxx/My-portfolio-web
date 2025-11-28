const word = "Hello World!"; // tu palabra
let index = 0;
let isDeleting = false;

function typeEffect() {
  const el = document.getElementById("typing");

  if (!isDeleting) {
    // escribir
    el.textContent = word.slice(0, index++);
    if (index === word.length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, 800); 
      return;
    }
  } else {
    // borrar
    el.textContent = word.slice(0, index--);
    if (index < 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 90);
}

window.onload = typeEffect;
