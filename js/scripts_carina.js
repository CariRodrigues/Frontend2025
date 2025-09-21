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
