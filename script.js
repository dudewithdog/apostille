const caseButtons = Array.from(document.querySelectorAll('.case-card'));
const resultCards = Array.from(document.querySelectorAll('.result-card'));

function setResult(id, shouldScroll = true) {
  resultCards.forEach(card => card.classList.toggle('active', card.id === id));
  caseButtons.forEach(button => button.classList.toggle('active', button.dataset.target === id));

  if (shouldScroll) {
    const result = document.getElementById(id);
    if (result) {
      result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

caseButtons.forEach(button => {
  button.addEventListener('click', () => setResult(button.dataset.target, true));
});

// Beim Laden der Seite nur die erste Karte aktivieren.
// Nicht automatisch scrollen, damit die Seite oben beim Startbild beginnt.
setResult('case-copy', false);
