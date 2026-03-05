document.addEventListener('DOMContentLoaded', () => {
    initSmoothMouseScroll();
    initThemeMode();
    initBurgerMenu();
    initAccordion();
    initSmoothNavigation();
    initBackToTop();
    initModal()
    initNewsletterValidation()
    initSlider()
});

function initSmoothMouseScroll() {
    SmoothScroll({
        animationTime: 800,
        stepSize: 75,
        accelerationDelta: 30,
        accelerationMax: 2,
        keyboardSupport: true,
        arrowScroll: 50,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        touchpadSupport: true,
    });
}


function closeAllMenus() {
    const burgerBtn = document.querySelector('.burger-menu');
    const nav = document.querySelector('.header__nav');
    const navItems = document.querySelectorAll('.header__nav-item');

    nav.classList.remove('is-active');
    burgerBtn.classList.remove('is-active');
    navItems.forEach(item => item.classList.remove("open"));
}

// Dark/Light Theme

function initThemeMode() {
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
            img.src = "assets/images/theme/moon.svg";                
        } else {
            htmlElement.setAttribute('data-theme', 'dark'); 
            localStorage.setItem('theme', 'dark');          
            img.src = "assets/images/theme/sun.svg";                       
        }
    });
}

// BURGER-MENU

function initBurgerMenu() {
    const burgerBtn = document.querySelector('.burger-menu');
    const nav = document.querySelector('.header__nav');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
}

// ACCORDION

function initAccordion() {
    const items = document.querySelectorAll('.header__nav-item');

    items.forEach(item => {
        item.addEventListener('click', (event) => {
            
            if (event.target.closest('.header__dropdown-menu')) {
                return; 
            }

            if (item.classList.contains('open')) {
                item.classList.remove('open');
            } else {
                items.forEach(i => i.classList.remove('open'));
                item.classList.add('open');
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.header__nav-list')) {
            items.forEach(i => i.classList.remove('open'));
        }
    });
}

// SMOOTH NAVIGATION SCROLL
function initSmoothNavigation() {
    const navLinks = document.querySelectorAll('.header__dropdown-item');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            if (targetId === '#') return; 

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                closeAllMenus(); 
            }
        });
    });
}

// BACK-TO-TOP BUTTON

function initBackToTop() {
    const btn = document.querySelector(".back_to_top");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btn.classList.add("but_show");
        } else {
            btn.classList.remove("but_show");
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// MODAL - CONTACT

function initModal() {
    const modal = document.getElementById('contactModal');
    const btnOpen = document.querySelector('.js-open-modal'); 
    const btnClose = document.querySelector('.modal-close'); 
    const body = document.body;


    btnOpen.addEventListener('click', (e) => {
        e.preventDefault(); 
        modal.classList.add('is-open');
        body.classList.add('no-scroll'); 
        closeAllMenus(); 
    });

    btnClose.addEventListener('click', () => {
        modal.classList.remove('is-open');
        body.classList.remove('no-scroll'); 
    });

  
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('is-open');
            body.classList.remove('no-scroll');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' ) {
            modal.classList.remove('is-open');
            body.classList.remove('no-scroll');
        }
    });
}

// VALIDATION FORM

function initNewsletterValidation() {
    const form = document.querySelector('.footer__form');
    const input = document.querySelector('.footer__input');

    const message = document.createElement('span');
    message.className = 'footer__message';
    form.appendChild(message);

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const emailValue = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === '') {
            showError('Please enter an email address.');
        } else if (!emailRegex.test(emailValue)) {
            showError('Oops! Invalid email format.');
        } else {
            showSuccess('Thanks for subscribing!');
            input.value = ''; 
        }
    });

    function showError(text) {
        input.style.borderColor = 'var(--color-error)';
        message.textContent = text;
        message.style.color = 'var(--color-error)';
        message.style.display = 'block';
    }

    function showSuccess(text) {
        input.style.borderColor = 'var(--color-button)';
        message.textContent = text;
        message.style.color = 'var(--color-button)';
        message.style.display = 'block';
        
        setTimeout(() => {
            message.style.display = 'none';
            input.style.borderColor = ''; 
        }, 3000);
    }

    input.addEventListener('input', () => {
        input.style.borderColor = ''; 
        message.style.display = 'none';
    });
}


// SLIDER SECTION PROJECTS

function initSlider() {
  const slider = document.querySelector('.project__slider');
  const prevBtn = document.querySelector('.project__btn--prev');
  const nextBtn = document.querySelector('.project__btn--next');


  function nextSlide() {
    const itemWidth = slider.querySelector('.project__slider-item').offsetWidth + 30;
    
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        slider.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  }

  function prevSlide() {
    const itemWidth = slider.querySelector('.project__slider-item').offsetWidth + 30;
    
    if (slider.scrollLeft <= 0) {
        slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
    } else {
        slider.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);


  setInterval(nextSlide, 5000);
}

