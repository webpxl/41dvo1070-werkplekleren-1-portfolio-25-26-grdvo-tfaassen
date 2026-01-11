// Voeg een simpel hover effect toe aan de projecten
document.querySelectorAll('.projects-content li').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateX(10px)';
        item.style.transition = '0.3s';
        item.style.color = '#000';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateX(0)';
        item.style.color = '#fff';
    });
});