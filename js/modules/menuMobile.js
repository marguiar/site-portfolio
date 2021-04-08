function menuMobile() {
  const btnMobile = document.querySelector('nav button');
  const menu = document.querySelector('.menu');

  function handleClick() {
    btnMobile.classList.toggle('active');
    menu.classList.toggle('active');
  }

  btnMobile.addEventListener('click', handleClick);
}

export default menuMobile;
