/*menu desplegable*/
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


//Modo oscuro / modo claro en index
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


//JS para abrir/cerrar menú al clickear
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

            // Usar setTimeout para permitir que el popup se renderice y obtenga sus dimensiones reales
            setTimeout(() => {
                const rect = a.getBoundingClientRect();
                const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
                const scrollY = window.pageYOffset || document.documentElement.scrollTop;

                // Obtener dimensiones reales del popup o usar valores por defecto
                const popupApproxWidth = popup.offsetWidth || 260;
                const popupApproxHeight = popup.offsetHeight || 300;

                // Intentar a la izquierda primero (ya que los enlaces están a la derecha)
                let left = rect.left - popupApproxWidth - 15 + scrollX;
                
                // Si no cabe a la izquierda, colocar a la derecha
                if (left < scrollX) {
                    left = rect.right + 15 + scrollX;
                }

                // Si tampoco cabe a la derecha, ajustar dentro de la pantalla
                if (left + popupApproxWidth > window.innerWidth + scrollX) {
                    left = window.innerWidth + scrollX - popupApproxWidth - 10;
                }

                // Centrar verticalmente respecto al enlace
                let top = rect.top + scrollY + (rect.height / 2) - (popupApproxHeight / 2);

                // Evitar que se corte por arriba o abajo
                if (top < scrollY + 10) {
                    top = scrollY + 10;
                } else if (top + popupApproxHeight > scrollY + window.innerHeight - 10) {
                    top = scrollY + window.innerHeight - popupApproxHeight - 10;
                }

                popup.style.left = left + 'px';
                popup.style.top = top + 'px';
            }, 10);
        });

        // Ocultar al salir del enlace
        a.addEventListener('mouseleave', () => {
            popup.style.display = 'none';
            popup.setAttribute('aria-hidden', 'true');
        });
    });

    // desaparece si el usuario mueve fuera del popup:
    popup.addEventListener('mouseleave', () => {
        popup.style.display = 'none';
        popup.setAttribute('aria-hidden', 'true');
    });
});



