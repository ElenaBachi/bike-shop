(function() {
  const Menu = document.querySelector('.main-nav');
  const NavToggle = Menu.querySelector('.main-nav__toggle');

  const onNavToggleClick = () => {
    const isOpened = Menu.classList.contains('main-nav--opened');

    if (isOpened) {
      Menu.classList.remove('main-nav--opened');
      Menu.classList.add('main-nav--closed');
    } else {
      Menu.classList.remove('main-nav--closed');
      Menu.classList.add('main-nav--opened');
    }
  };

  NavToggle.addEventListener('click', onNavToggleClick);
})();
