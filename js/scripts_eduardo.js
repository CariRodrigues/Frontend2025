// // Función para la portada 
// document.addEventListener('DOMContentLoaded', () => {
//     const teamTitle = document.getElementById('team-title');

//     // Cambia el color del título 
//     if (teamTitle) {
//         teamTitle.addEventListener('click', () => {
//             if (teamTitle.style.color === 'blue') {
//                 teamTitle.style.color = 'var(--color-heading)';
//             } else {
//                 teamTitle.style.color = 'blue';
//             }
//         });
//     }

//     // Función para la página del integrante del grupo
//     const toggleInfoBtn = document.getElementById('toggle-info-btn');
//     const additionalInfo = document.getElementById('additional-info');

//     // Alterna la visibilidad de un elemento en la tarjeta del integrante
//     if (toggleInfoBtn) {
//         toggleInfoBtn.addEventListener('click', () => {
//             additionalInfo.classList.toggle('hidden');
//         });
//     }
// });


const card = document.getElementById('profile-image-container');
        const cursor = document.querySelector('.custom-cursor');

        // Función para mover el cursor
        document.addEventListener('mousemove', (e) => {
            if (cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        });

        // Función para el efecto de movimiento 3D (Parallax)
        function handleParallax(event) {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            const cardX = (x / rect.width - 0.5) * 20;
            const cardY = (y / rect.height - 0.5) * -20;
            card.style.transform = `rotateY(${cardX}deg) rotateX(${cardY}deg)`;
        }
        
        card.addEventListener('mousemove', handleParallax);

        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });