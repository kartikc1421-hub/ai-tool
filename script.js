const filterButtons = document.querySelectorAll('.filter button');
const toolCards = document.querySelectorAll('.tool-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    toolCards.forEach(card => {
      const type = card.getAttribute('data-type');
      if(filter === 'all' || type === filter){
        card.style.display = 'block';
        card.classList.add('fadeInUp');
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50);
      } else {
        card.style.display = 'none';
      }
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  toolCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 50);
  });
});