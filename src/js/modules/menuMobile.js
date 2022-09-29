function menuMobile() {
  const btnMobile = document.querySelector('nav button');
  const menu = document.querySelector('.menu');
  const links = menu.querySelectorAll('li a');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      const pathName = window.location.pathname;
      if (link.id !== pathName) {
        btnMobile.classList.remove('active');
        menu.classList.remove('active');
      }
    });
  });

  function handleClick() {
    btnMobile.classList.toggle('active');
    menu.classList.toggle('active');
  }

  btnMobile.addEventListener('click', handleClick);
}

export default menuMobile;
