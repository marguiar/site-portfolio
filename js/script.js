import menuMobile from './modules/menuMobile.js';
import toggleTheme from './modules/toggleTheme.js';
import projectsNavigation from './modules/projects-navigation.js';
import isEmployed from './modules/is-employed.js';

menuMobile();
toggleTheme();

function singlePageApplication() {
  const links = document.querySelectorAll('ul a');

  function updatePage(newContent) {
    const oldPage = document.querySelector('#root');
    const oldTitle = document.querySelector('.title-container');

    const container = document.createElement('div');
    container.innerHTML = newContent;
    const newPage = container.querySelector('#root');
    const newTitle = container.querySelector('.title-container');

    oldPage.innerHTML = newPage.innerHTML;
    oldTitle.innerHTML = newTitle.innerHTML;
    document.title = container.querySelector('title').innerText;
  }

  function activeScripts() {
    const pathName = window.location.pathname;

    if (pathName === '/projetos') projectsNavigation();
    else if (pathName === '/contato') isEmployed(false);
  }

  async function fetchPage(url) {
    const response = await fetch(url);
    const pageContent = await response.text();

    updatePage(pageContent);
    activeScripts();
  }

  function handleClick(e) {
    const url = e.target.href;

    fetchPage(url);
    window.history.pushState(
      null,
      null,
      url.replace('pages/', '').replace('.html', '').replace('index', ''),
    );
  }

  window.addEventListener('popstate', () => {
    let whichPage = window.location.pathname;

    if (
      whichPage === '/sobre'
      || whichPage === '/projetos'
      || whichPage === '/contato'
    ) {
      whichPage = `/pages${whichPage}.html`;
    }

    fetchPage(whichPage);
  });

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pathName = window.location.pathname;
      if (link.id !== pathName) {
        handleClick(e);
      }
    });
  });
}

singlePageApplication();
