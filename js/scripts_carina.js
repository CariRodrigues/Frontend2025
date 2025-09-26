/*carrousel en crc.html*/
let indice = 0;

function moverCarrusel(direccion) {
    const carrusel = document.getElementById('carrusel-imagenes');
    const total = carrusel.children.length;

    indice = (indice + direccion + total) % total;


    carrusel.style.transform = `translateX(-${indice * 100}%)`;
}
/*menu desplegable*/
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

//Modo oscuro / modo claro en crc.html
const botonModo = document.getElementById('modoOscuroBtn');
const iconoModo = botonModo.querySelector('.icono-modo');

botonModo.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');

    if (document.body.classList.contains('modo-oscuro')) {
        iconoModo.classList.remove('fa-moon');
        iconoModo.classList.add('fa-sun');
        botonModo.style.justifyContent = 'start';

    } else {
        iconoModo.classList.remove('fa-sun');
        iconoModo.classList.add('fa-moon');
        botonModo.style.justifyContent = 'end';
    }
});
// Selecciona todos los títulos
const titulos = document.querySelectorAll(".underline");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animar");
    } else {
      entry.target.classList.remove("animar"); // se repite al salir y al entrar
    }
  });
}, { threshold: 0.5 }); // 0.5 = cuando el 50% del h2 sea visible

titulos.forEach(titulo => observer.observe(titulo));