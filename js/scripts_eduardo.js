// Función para la portada 
document.addEventListener('DOMContentLoaded', () => {
    const teamTitle = document.getElementById('team-title');

    // Cambia el color del título 
    if (teamTitle) {
        teamTitle.addEventListener('click', () => {
            if (teamTitle.style.color === 'blue') {
                teamTitle.style.color = 'var(--color-heading)';
            } else {
                teamTitle.style.color = 'blue';
            }
        });
    }

    // Función para la página del integrante del grupo
    const toggleInfoBtn = document.getElementById('toggle-info-btn');
    const additionalInfo = document.getElementById('additional-info');

    // Alterna la visibilidad de un elemento en la tarjeta del integrante
    if (toggleInfoBtn) {
        toggleInfoBtn.addEventListener('click', () => {
            additionalInfo.classList.toggle('hidden');
        });
    }
});