import menuMobile from './modules/menuMobile.js';
import toggleTheme from './modules/toggleTheme.js';
import Slide from './modules/slide.js';
import projectsNavigation from './modules/projects-navigation.js';

const slide = new Slide();

menuMobile();
toggleTheme();

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

  function activeScripts() {
    const pathName = window.location.pathname;
    if (pathName === '/projetos') projectsNavigation();
  }

  async function fetchPage(url) {
    const response = await fetch(url);
    const pageContent = await response.text();
    updatePage(pageContent);
    activeScripts();
  }

  function handleClick(e) {
    e.preventDefault();
    const url = e.target.href;
    fetchPage(url);
    window.history.pushState(
      null,
      null,
      url.replace('pages/', '').replace('.html', '').replace('index', ''),
    );
  }

  window.addEventListener('popstate', () => {
    let previousPage = window.location.pathname;

    if (
      previousPage === '/sobre'
      || previousPage === '/projetos'
      || previousPage === '/contato'
    ) {
      previousPage = `/pages${previousPage}.html`;
    }

    fetchPage(previousPage);
  });

  links.forEach((link) => {
    link.classList.remove('active');
    link.addEventListener('click', handleClick);
  });
}

singlePageApplication();
