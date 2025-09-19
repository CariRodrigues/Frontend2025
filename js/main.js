const botonModo = document.getElementById('modoOscuroBtn');
const iconoModo = botonModo.querySelector('.icono-modo');

botonModo.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');

    if (document.body.classList.contains('modo-oscuro')) {
        iconoModo.classList.remove('fa-moon');
        iconoModo.classList.add('fa-sun');
    } else {
        iconoModo.classList.remove('fa-sun');
        iconoModo.classList.add('fa-moon');
    }
});

// JS para abrir/cerrar menú al clickear
document.querySelectorAll(".dropbtn").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault(); // evita que salte al inicio
        const menu = btn.nextElementSibling;
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});
