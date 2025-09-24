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



// Lobo de mar
const wrappers = document.querySelectorAll('.sea-wolf-wrap');
const sections = document.querySelectorAll('section');

const speedFactor = 0.75;   // ajustar
const startScroll = 0.8; // empezar movimiento a 60%

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

    // efecto "latido" al mover
    wrapper.animate(
      [
        { transform: `translateX(${moveX}px) scale(1)` },
        { transform: `translateX(${moveX}px) scale(1.05)` },
        { transform: `translateX(${moveX}px) scale(1)` }
      ],
      {
        duration: 300, // ms
        easing: "ease-in-out"
      }
    );
    
    // si tenés 2 imágenes para forward/backward, actualizalas a las dos
    if ((scrollingDown && direction === 1) || (!scrollingDown && direction === -1)) {
      img.src = 'img/eduardo/lobo_mar.webp';
      reflection.src = 'img/eduardo/lobo_mar_sombra.webp';
    } else {
      img.src = 'img/eduardo/lobo_mar2.webp';
      reflection.src = 'img/eduardo/lobo_mar2_sombra.webp';
    }
  });
}


const seaWolves = document.querySelectorAll('.sea-wolf');

seaWolves.forEach(wolf => {
  const wolfPack = wolf.parentElement.querySelector('.wolf-pack');
  wolf.addEventListener('click', () => {
    wolfPack.classList.add('show');
    setTimeout(() => {
      wolfPack.classList.remove('show');
    }, 4000);
  });
});



const footer = document.querySelector("footer");
let starsActive = false;

function createStar() {
  const star = document.createElement("img");
  star.src = "img/eduardo/estrella.webp"; 
  star.classList.add("star");

  // tamaño random entre 40px y 100px
  const size = Math.random() * 60 + 40;  
  star.style.width = size + "px";
  star.style.height = size + "px";

  // posición horizontal random
  star.style.left = Math.random() * window.innerWidth + "px";

  // duración random de caída
  const duration = 3 + Math.random() * 2;
  star.style.animationDuration = duration + "s";

  document.body.appendChild(star);

  // eliminar cuando termine animación
  star.addEventListener("animationend", () => {
    star.remove();
  });
}

// función que crea varias estrellas con un pequeño intervalo
function createStarsBatch(count = 15, interval = 250) {
  for (let i = 0; i < count; i++) {
    setTimeout(createStar, i * interval);
  }
}

// detectar cuando el footer entra en pantalla
window.addEventListener("scroll", () => {
  const footerTop = footer.getBoundingClientRect().top;

  if (!starsActive && footerTop <= window.innerHeight) {
    starsActive = true;

    // crear estrellas cada 1 segundo mientras el usuario sigue viendo el footer
    const starsInterval = setInterval(() => {
      const footerTopNow = footer.getBoundingClientRect().top;
      if (footerTopNow > window.innerHeight) {
        clearInterval(starsInterval); 
        starsActive = false;
      } else {
        createStarsBatch(10, 150); 
      }
    }, 1000);
  }
});
