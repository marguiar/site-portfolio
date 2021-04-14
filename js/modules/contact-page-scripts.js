export default function contactPageScripts() {
  function isEmployed(bool) {
    const jobSpan = document.querySelector('.job');

    if (bool) {
      jobSpan.classList.add('employed');
      jobSpan.innerHTML = 'Não estou disponível para contratação.';
    } else {
      jobSpan.classList.remove('employed');
      jobSpan.innerHTML = 'Estou disponível para contratação!';
    }
  }

  isEmployed(false);

  function modalScripts() {
    const emailButton = document.querySelector('.email');
    const modalContainer = document.querySelector('.modal-container');
    const navBar = document.querySelector('nav');
    const copyButton = document.querySelector('.button-copy');
    const active = 'active';

    emailButton.addEventListener('click', (e) => {
      e.preventDefault();
      modalContainer.classList.add(active);
      navBar.style.zIndex = '-1';
    });

    modalContainer.addEventListener('click', (e) => {
      if (
        e.target.classList[0] === 'button-close'
        || e.target.classList[0] === 'modal-container'
      ) {
        modalContainer.classList.remove(active);
        navBar.style.zIndex = '1';
      }
    });

    copyButton.addEventListener('click', () => {
      if (modalContainer.classList[1] === active) {
        document.querySelector('#email').select();
        document.execCommand('copy');
        copyButton.innerHTML = 'Copiado =D';
        copyButton.style.background = '#70e000';

        setTimeout(() => {
          copyButton.style.background = 'var(--text)';
          copyButton.innerHTML = 'Copiar';
        }, 2000);
      }
    });
  }

  modalScripts();
}
