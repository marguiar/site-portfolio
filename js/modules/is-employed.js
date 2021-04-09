export default function isEmployed(bool) {
  const jobSpan = document.querySelector('.job');

  if (bool) {
    jobSpan.classList.add('employed');
    jobSpan.innerHTML = 'Não estou disponível para contratação.';
  } else {
    jobSpan.classList.remove('employed');
    jobSpan.innerHTML = 'Estou disponível para contratação!';
  }
}
