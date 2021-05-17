import menuMobile from './modules/menuMobile.js';
import toggleTheme from './modules/toggleTheme.js';
import projectsPageScripts from './modules/projects-page-scripts.js';
import contactPageScripts from './modules/contact-page-scripts.js';

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
    const { pathname } = window.location;

    if (pathname === '/projetos') projectsPageScripts();
    else if (pathname === '/contato') contactPageScripts();
  }

  async function fetchPage(url) {
    const loading = `
      <div class="lds-ellipsis">
        <div></div><div></div><div></div><div></div>
      </div>`;
    document.querySelector('#root').innerHTML = loading;

    const response = await fetch(url);
    const pageContent = await response.text();

    updatePage(pageContent);
    activeScripts();
  }

  function handleClick(e) {
    let url = e.target.href;

    if (url.slice(-1) !== '/') url = `pages/${e.target.pathname}.html`;

    fetchPage(url);
    window.history.pushState(
      null,
      null,
      url.replace('pages/', '').replace('.html', '').replace('index', ''),
    );
  }

  window.addEventListener('popstate', () => {
    let { pathname } = window.location;

    if (
      pathname === '/sobre'
      || pathname === '/projetos'
      || pathname === '/contato'
    ) pathname = `/pages${pathname}.html`;

    fetchPage(pathname);
  });

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      links.forEach((navLink) => navLink.classList.remove('active'));
      link.classList.add('active');

      const { pathname } = window.location;
      if (link.id !== pathname) handleClick(e);
    });
  });
}

singlePageApplication();
