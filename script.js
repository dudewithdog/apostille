const caseButtons = Array.from(document.querySelectorAll('.case-card'));
const resultCards = Array.from(document.querySelectorAll('.result-card'));

function showResult(id) {
  resultCards.forEach(card => card.classList.toggle('active', card.id === id));
  caseButtons.forEach(button => button.classList.toggle('active', button.dataset.target === id));
  const result = document.getElementById(id);
  if (result) {
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

caseButtons.forEach(button => {
  button.addEventListener('click', () => showResult(button.dataset.target));
});

showResult('case-copy');
