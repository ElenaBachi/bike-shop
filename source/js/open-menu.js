const menu = document.querySelector('.main-nav');
const navToggle = menu.querySelector('.main-nav__toggle');

const onNavToggleClick = () => {
  const isOpened = menu.classList.contains('main-nav--opened');

  if (isOpened) {
    menu.classList.remove('main-nav--opened');
    menu.classList.add('main-nav--closed');
  }

  menu.classList.remove('main-nav--closed');
  menu.classList.add('main-nav--opened');
};

menu.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', onNavToggleClick);

