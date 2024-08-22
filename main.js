const logo = document.getElementById('logo');
const logoText = document.getElementById('logo-text');
const logoPath = document.querySelectorAll('#logo-text path');
const splashScreen = document.querySelector('.splash-screen');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    logoPath.forEach((path, index) => {
      path.style.strokeDasharray = path.getTotalLength();
      path.style.strokeDashoffset = path.getTotalLength();

      const totalPaths = logoPath.length;
      const delay = (totalPaths - index) * 0.2;
      path.style.animation = `line-anim 2s ease forwards ${delay}s`;

      setTimeout(() => {
        logoText.classList.add('active');
        logo.classList.add('active');
      }, delay * 500 + 3200);
    });
    setTimeout(() => {
      splashScreen.style.top = '-100vh';
    }, 6500);
  });
});
