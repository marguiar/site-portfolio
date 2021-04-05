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
const links = document.querySelectorAll('ul a');

function singlePageApplication() {
  const links = document.querySelectorAll('ul a');
  links[0].classList.add('active');

  function updatePage(newContent) {
    const container = document.createElement('div');
    container.innerHTML = newContent;

    const oldPage = document.querySelector('#root');
    const newPage = container.querySelector('#root');
    const oldTitle = document.querySelector('.title-container');
    const newTitle = container.querySelector('.title-container');
    oldPage.innerHTML = newPage.innerHTML;
    oldTitle.innerHTML = newTitle.innerHTML;
    document.title = container.querySelector('title').innerText;
  }

  async function fetchPage(url) {
    const response = await fetch(url);
    const pageContent = await response.text();
    updatePage(pageContent);
  }

  function handleClick(e) {
    e.preventDefault();
    const url = e.target.href;

    fetchPage(url);
    window.history
      .pushState(
        null, null,
        url.replace('pages/', '').replace('.html', '').replace('index', ''),
      );
  }

  window.addEventListener('popstate', () => {
    let previousPage = window.location.pathname;

    if (previousPage === '/sobre') {
      previousPage = ('/pages/sobre.html');
    }

    fetchPage(previousPage);
  });

  links.forEach((link) => {
    link.classList.remove('active');
    link.addEventListener('click', handleClick);
  });
}

singlePageApplication();
