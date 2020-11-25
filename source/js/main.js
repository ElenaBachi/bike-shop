(function() {
  const MENU = document.querySelector('.main-nav');
  const NAV_TOOGLE = MENU.querySelector('.main-nav__toggle');

  const onNavToggleClick = () => {
    const isOpened = MENU.classList.contains('main-nav--opened');

    if (isOpened) {
      MENU.classList.remove('main-nav--opened');
      MENU.classList.add('main-nav--closed');
    } else {
      MENU.classList.remove('main-nav--closed');
      MENU.classList.add('main-nav--opened');
    }
  };

  MENU.classList.remove('main-nav--nojs');

  NAV_TOOGLE.addEventListener('click', onNavToggleClick);
})();
