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

// Popup
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupName = document.getElementById('popup-name');

    // Selecciona los enlaces dentro de la lista
    const enlaces = document.querySelectorAll('.content-column ul li a');

    enlaces.forEach(a => {
        a.addEventListener('mouseenter', (e) => {
            const imgSrc = a.dataset.img;
            if (!imgSrc) return;

            // Actualiza popup
            popupImg.src = imgSrc;
            popupImg.alt = 'Foto de ' + a.textContent.trim();
            popupName.textContent = a.textContent.trim();
            popup.style.display = 'block';
            popup.setAttribute('aria-hidden', 'false');

            // Posicionar popup (a la derecha del enlace; si no entra, lo coloca a la izquierda)
            const rect = a.getBoundingClientRect();
            const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;

            // valores del ancho del popup 
            const popupApproxWidth = 260;
            let left = rect.right + 10 + scrollX;
            if (left + popupApproxWidth > window.innerWidth + scrollX) {
                left = rect.left - popupApproxWidth - 10 + scrollX;
            }
            let top = rect.top + scrollY;

            // evitar que quede fuera abajo
            if (top + 300 > window.innerHeight + scrollY) {
                top = window.innerHeight + scrollY - 320;
            }

            popup.style.left = left + 'px';
            popup.style.top = top + 'px';
        });

        // ocultar al salir
        a.addEventListener('mouseenter', (e) => {
            const imgSrc = a.dataset.img;
            if (!imgSrc) return;

            // Actualiza popup
            popupImg.src = imgSrc;
            popupName.textContent = a.textContent.trim();
            popup.style.display = 'block';

            const rect = a.getBoundingClientRect();
            const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;

            const popupApproxWidth = popup.offsetWidth || 260;
            const popupApproxHeight = popup.offsetHeight || 300;

            // Siempre intento a la izquierda
            let left = rect.left - popupApproxWidth - 10 + scrollX;
            if (left < 0) {
                // Si no hay espacio a la izquierda, lo pongo a la derecha
                left = rect.right + 10 + scrollX;
            }

            // Alinear al centro vertical del link
            let top = rect.top + scrollY + (rect.height / 2) - (popupApproxHeight / 2);

            // Evitar que se corte por arriba o abajo
            if (top < scrollY + 10) {
                top = scrollY + 10; // margen arriba
            } else if (top + popupApproxHeight > scrollY + window.innerHeight) {
                top = scrollY + window.innerHeight - popupApproxHeight - 10; // margen abajo
            }

            popup.style.left = left + 'px';
            popup.style.top = top + 'px';
        });
    });

    // desaparece si el usuario mueve fuera del popup:
    popup.addEventListener('mouseleave', () => {
        popup.style.display = 'none';
        popup.setAttribute('aria-hidden', 'true');
    });
});