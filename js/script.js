function menuMobile() {
  const btnMobile = document.querySelector('nav button');
  const menu = document.querySelector('.menu');

  function handleClick() {
    btnMobile.classList.toggle('active');
    menu.classList.toggle('active');
  }

  btnMobile.addEventListener('click', handleClick);
}

menuMobile();

function toggleTheme() {
  const btnToggleTheme = document.querySelector('.theme-toggle');
  const iconTheme = document.querySelector('.fa-sun');

  function handleClick() {
    document.documentElement.classList.toggle('light-mode');
    if (iconTheme.classList[1] === 'fa-sun') {
      iconTheme.classList.remove('fa-sun');
      iconTheme.classList.add('fa-moon');
    } else {
      iconTheme.classList.remove('fa-moon');
      iconTheme.classList.add('fa-sun');
    }
  }

  btnToggleTheme.addEventListener('click', handleClick);
}

toggleTheme();
