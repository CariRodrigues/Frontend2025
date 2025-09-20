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



// const wolves = document.querySelectorAll('.sea-wolf');
// const sections = document.querySelectorAll('section');

// const speedFactor = 1; // >1 = más rápido, <1 = más lento
// const startScroll = 0.8; // % de la sección donde empieza el movimiento (0 = inicio, 0.5 = mitad)

// let lastScrollY = window.scrollY; // Guardamos la posición anterior del scroll

// window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;
//     const scrollingDown = scrollY > lastScrollY; // true = bajando, false = subiendo
//     lastScrollY = scrollY;

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

//         // CAMBIO DE IMAGEN SEGÚN DIRECCIÓN Y SENTIDO DE DESPLAZAMIENTO
//         if ((scrollingDown && direction === 1) || (!scrollingDown && direction === -1)) {
//             wolf.src = 'img/eduardo/lobo_mar.png'; // Imagen normal
//         } else {
//             wolf.src = 'img/eduardo/lobo_mar2.png'; // Imagen reflejada
//         }
//     });
// });


// Selección
const wrappers = document.querySelectorAll('.sea-wolf-wrap');
const sections = document.querySelectorAll('section');

const speedFactor = 1;   // ajustar
const startScroll = 0.6; // empezar movimiento a 60%

let lastScrollY = window.scrollY;

// asegurarse que cuando carguen las imágenes el wrapper tenga el ancho correcto
function syncWrapperSizes() {
  wrappers.forEach(wrapper => {
    const img = wrapper.querySelector('.sea-wolf');
    if (img && img.complete) {
      wrapper.style.width = img.clientWidth + 'px';
    } else if (img) {
      img.addEventListener('load', () => {
        wrapper.style.width = img.clientWidth + 'px';
      });
    }
  });
}
window.addEventListener('load', syncWrapperSizes);
window.addEventListener('resize', syncWrapperSizes);

// scroll handler (throttle con rAF para mejor performance)
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
});

function handleScroll() {
  const scrollY = window.scrollY;
  const scrollingDown = scrollY > lastScrollY;
  lastScrollY = scrollY;

  sections.forEach((section, index) => {
    const wrapper = wrappers[index];
    if (!wrapper) return;
    const img = wrapper.querySelector('.sea-wolf');
    const reflection = wrapper.querySelector('.sea-wolf-reflection');

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // progreso normalizado dentro de sección
    let scrollProgress = (scrollY - sectionTop) / sectionHeight;
    scrollProgress = (scrollProgress - startScroll) / (1 - startScroll);
    scrollProgress *= speedFactor;
    scrollProgress = Math.min(Math.max(scrollProgress, 0), 1);
    // invertimos para que avance al bajar
    scrollProgress = 1 - scrollProgress;

    const direction = index % 2 === 0 ? 1 : -1;
    const startX = direction === 1 ? -wrapper.offsetWidth : section.offsetWidth;
    const endX = direction === 1 ? section.offsetWidth : -wrapper.offsetWidth;
    const moveX = startX + (endX - startX) * scrollProgress;

    // mover wrapper (no la <img> directa)
    wrapper.style.transform = `translateX(${moveX}px)`;

    // si tenés 2 imágenes para forward/backward, actualizalas a las dos
    if ((scrollingDown && direction === 1) || (!scrollingDown && direction === -1)) {
      img.src = 'img/eduardo/lobo_mar.png';
      reflection.src = 'img/eduardo/lobo_mar_sombra.png';
    } else {
      img.src = 'img/eduardo/lobo_mar2.png';
      reflection.src = 'img/eduardo/lobo_mar2_sombra.png';
    }
  });
}

