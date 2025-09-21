// ✨ Efecto máquina de escribir
function typeWriter(element, text, speed = 100) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector(".titulo-neuyin");
  titulo.innerHTML = "";
  typeWriter(titulo, "Hola, soy Neuyin Herrera 🌸", 80);
});

// 🌙 BOTÓN MODO OSCURO
const toggleBtn = document.getElementById("toggle-mode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
  toggleBtn.textContent = document.body.classList.contains("modo-oscuro") ? "☀️" : "🌓";
});

// ⬆️ VOLVER ARRIBA
const topBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 🌸 Animación de pétalos SOLO sobre la foto
function crearPetalo() {
  const fotoPerfil = document.querySelector(".foto-perfil");
  const rect = fotoPerfil.getBoundingClientRect();

  const petal = document.createElement("div");
  petal.classList.add("petal");

  // posición relativa a la imagen (mitad +- un margen)
  const offsetX = rect.left + Math.random() * rect.width;
  petal.style.left = offsetX + "px";
  petal.style.top = rect.top - 30 + "px"; // un poquito arriba de la imagen

  // animación más lenta y variada
  petal.style.animationDuration = 5 + Math.random() * 4 + "s";
  petal.style.opacity = Math.random();
  petal.style.transform = `scale(${0.5 + Math.random()})`;

  document.body.appendChild(petal);

  // limpiar cuando termina
  petal.addEventListener("animationend", () => {
    petal.remove();
  });
}

// 🌸 cada 1s cae un pétalo
setInterval(crearPetalo, 1000);

