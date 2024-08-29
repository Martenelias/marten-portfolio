const logo = document.getElementById('logo');
const logoText = document.getElementById('logo-text');
const logoPath = document.querySelectorAll('#logo-text path');
const splashScreen = document.querySelector('.splash-screen');
const menuToggle = document.querySelector('.hamburger');
const burgerSpan = document.querySelectorAll('.hamburger span');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');
const stickySection = document.querySelector('.projects');
const emailElement = document.querySelector('.copy-email-name');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    logoPath.forEach((pathElement, index) => {
      const path = pathElement;
      path.style.strokeDasharray = path.getTotalLength();
      path.style.strokeDashoffset = path.getTotalLength();

      const totalPaths = logoPath.length;
      const delay = (totalPaths - index) * 0.2;
      path.style.animation = `line-anim 2s ease forwards ${delay}s`;

      setTimeout(
        () => {
          logoText.classList.add('active');
          logo.classList.add('active');
        },
        delay * 500 + 3200,
      );
    });
    setTimeout(() => {
      splashScreen.style.top = '-100vh';
    }, 6500);
  });

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('open');

    const isOpen = menuToggle.classList.contains('open');

    burgerSpan.forEach((span) => {
      const newSpan = span;
      newSpan.style.backgroundColor = isOpen ? '#E5E0DA' : '#2F4858';
    });
  });
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('open');

      burgerSpan.forEach((span) => {
        const newSpan = span;
        newSpan.style.backgroundColor = '#2F4858';
      });
    });
  });

  const transform = (section) => {
    const offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
    const scrollSection = section.querySelector('.projects-box');
    let precentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    if (precentage < 0) {
      precentage = 0;
    } else if (precentage > 400) {
      precentage = 400;
    }
    scrollSection.style.transform = `translate3d(${-(precentage)}vw, 0, 0)`;
  };

  window.addEventListener('scroll', () => {
    transform(stickySection);
  });

  emailElement.addEventListener('click', () => {
    const emailText = emailElement.innerText.replace(/\n/g, '');
    const tempInput = document.createElement('textarea');

    tempInput.value = emailText;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  });
});
