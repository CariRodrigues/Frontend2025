// Selecciona todas las tarjetas con clase parallax-card
const cards = document.querySelectorAll('.parallax-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Calcula la rotación
        const cardX = (x / rect.width - 0.5) * 40;  // ángulo Y
        const cardY = (y / rect.height - 0.5) * -40; // ángulo X

        card.style.transform = `rotateY(${cardX}deg) rotateX(${cardY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});





// const wolves = document.querySelectorAll('.sea-wolf');
// const sections = document.querySelectorAll('section');

// const speedFactor = 1; // >1 = más rápido, <1 = más lento
// const startScroll = 0.6; // % de la sección donde empieza el movimiento (0 = inicio, 0.5 = mitad)

// window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;

//     sections.forEach((section, index) => {
//         const wolf = wolves[index];
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;

//         // Progreso normalizado dentro de la sección
//         let scrollProgress = (scrollY - sectionTop) / sectionHeight;

//         // Ajustamos para que empiece a la mitad de la sección
//         scrollProgress = (scrollProgress - startScroll) / (1 - startScroll);

//         // Aplicamos factor de velocidad
//         scrollProgress *= speedFactor;

//         // Limitamos entre 0 y 1
//         scrollProgress = Math.min(Math.max(scrollProgress, 0), 1);

//         // Invertimos para que avance al bajar el scroll
//         scrollProgress = 1 - scrollProgress;

//         // Dirección: alterna por sección
//         const direction = index % 2 === 0 ? 1 : -1;

//         // Límites del movimiento dentro de la sección
//         const startX = direction === 1 ? -wolf.offsetWidth : section.offsetWidth;
//         const endX = direction === 1 ? section.offsetWidth : -wolf.offsetWidth;

//         // Posición actual del lobo
//         const moveX = startX + (endX - startX) * scrollProgress;

//         // Aplicamos la transformación
//         wolf.style.transform = `translateX(${moveX}px)`;
//     });
// });



const wolves = document.querySelectorAll('.sea-wolf');
const sections = document.querySelectorAll('section');

const speedFactor = 1; // >1 = más rápido, <1 = más lento
const startScroll = 0.8; // % de la sección donde empieza el movimiento (0 = inicio, 0.5 = mitad)

let lastScrollY = window.scrollY; // Guardamos la posición anterior del scroll

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scrollingDown = scrollY > lastScrollY; // true = bajando, false = subiendo
    lastScrollY = scrollY;

    sections.forEach((section, index) => {
        const wolf = wolves[index];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Progreso normalizado dentro de la sección
        let scrollProgress = (scrollY - sectionTop) / sectionHeight;

        // Ajustamos para que empiece a la mitad de la sección
        scrollProgress = (scrollProgress - startScroll) / (1 - startScroll);

        // Aplicamos factor de velocidad
        scrollProgress *= speedFactor;

        // Limitamos entre 0 y 1
        scrollProgress = Math.min(Math.max(scrollProgress, 0), 1);

        // Invertimos para que avance al bajar el scroll
        scrollProgress = 1 - scrollProgress;

        // Dirección: alterna por sección
        const direction = index % 2 === 0 ? 1 : -1;

        // Límites del movimiento dentro de la sección
        const startX = direction === 1 ? -wolf.offsetWidth : section.offsetWidth;
        const endX = direction === 1 ? section.offsetWidth : -wolf.offsetWidth;

        // Posición actual del lobo
        const moveX = startX + (endX - startX) * scrollProgress;

        // Aplicamos la transformación
        wolf.style.transform = `translateX(${moveX}px)`;

        // CAMBIO DE IMAGEN SEGÚN DIRECCIÓN Y SENTIDO DE DESPLAZAMIENTO
        if ((scrollingDown && direction === 1) || (!scrollingDown && direction === -1)) {
            wolf.src = 'img/eduardo/lobo_mar.png'; // Imagen normal
        } else {
            wolf.src = 'img/eduardo/lobo_mar2.png'; // Imagen reflejada
        }
    });
});



