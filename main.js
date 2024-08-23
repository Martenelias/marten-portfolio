const logo = document.getElementById('logo');
const logoText = document.getElementById('logo-text');
const logoPath = document.querySelectorAll('#logo-text path');
const splashScreen = document.querySelector('.splash-screen');
const menuToggle = document.querySelector('.hamburger');
const burgerSpan = document.querySelectorAll('.hamburger span');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

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

    // Update the burger span colors based on the menu state
    burgerSpan.forEach((span) => {
      const newSpan = span;
      newSpan.style.backgroundColor = isOpen ? '#141730' : '#F9F8FF';
    });
  });
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('open');

      burgerSpan.forEach((span) => {
        const newSpan = span;
        newSpan.style.backgroundColor = '#F9F8FF';
      });
    });
  });
});
