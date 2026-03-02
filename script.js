const toggles = document.querySelectorAll('.header__nav-item');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {

      const item = toggle.closest('.header__nav-item');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.header__nav-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.header__nav');

  burgerMenu.addEventListener('click', () => {
      nav.classList.toggle('is-active');
  });




  //  slider section Projects
const slider = document.querySelector('.project__slider');
const prevBtn = document.querySelector('.project__btn--prev');
const nextBtn = document.querySelector('.project__btn--next');

if (slider && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
        const itemWidth = slider.querySelector('.project__slider-item').offsetWidth + 30;
        slider.scrollBy({ left: itemWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        const itemWidth = slider.querySelector('.project__slider-item').offsetWidth + 30;
        slider.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    });
}




