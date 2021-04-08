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

export default toggleTheme;
