document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.querySelector('.header__block-mode');
    const img = document.querySelector('.header__mode-img'); 
    const htmlElement = document.documentElement;


    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        img.src = "assets/images/theme/sun.svg";
    } else {
        img.src = "assets/images/theme/moon.svg";
    }


 
        themeToggleBtn.addEventListener('click', function() {
            const currentTheme = htmlElement.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                htmlElement.removeAttribute('data-theme'); 
                localStorage.setItem('theme', 'light');    
                img.src = "moon.svg";                 
            } else {
                htmlElement.setAttribute('data-theme', 'dark'); 
                localStorage.setItem('theme', 'dark');          
                img.src = "sun.svg";                       
            }
        });
});


const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.header__nav');

  burgerMenu.addEventListener('click', () => {
      nav.classList.toggle('is-active');
  });


const items = document.querySelectorAll('.header__nav-item');

items.forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('open')) {
        item.classList.remove('open');
    } 

    else {
        items.forEach(i => i.classList.remove('open'));
        item.classList.add('open');
    }
    
  });
});

  




  //  slider section Projects
const slider = document.querySelector('.project__slider');
const prevBtn = document.querySelector('.project__btn--prev');
const nextBtn = document.querySelector('.project__btn--next');


    nextBtn.addEventListener('click', () => {
        const itemWidth = slider.querySelector('.project__slider-item').offsetWidth + 30 ;
        slider.scrollBy({ left: itemWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        const itemWidth = document.querySelector('.project__slider-item').offsetWidth + 30;
        slider.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    });




