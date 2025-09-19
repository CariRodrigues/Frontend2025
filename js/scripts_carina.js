let indice = 0;

function moverCarrusel(direccion) {
    const carrusel = document.getElementById('carrusel-imagenes');
    const total = carrusel.children.length;

    indice = (indice + direccion + total) % total;


    carrusel.style.transform = `translateX(-${indice * 100}%)`;
}