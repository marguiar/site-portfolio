export default function projectsPageScripts() {
  const projectItems = document.querySelectorAll('.projects-items li');
  const projectHighlighted = document.querySelectorAll('.active-item article');
  const active = 'active';

  projectItems[0].classList.add(active);

  function activeProject(index) {
    projectHighlighted.forEach((section) => {
      section.classList.remove(active);
    });
    projectHighlighted[index].classList.add(active);
  }

  if (projectItems.length && projectHighlighted.length) {
    projectHighlighted[0].classList.add(active);

    projectItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        const currentActiveItem = document.querySelector('li.active');
        if (currentActiveItem.classList.length > 0) {
          currentActiveItem.classList.remove(active);
        } item.classList.add(active);

        activeProject(index);
      });
    });
  }
}
