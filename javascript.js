const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ======== Menú hamburguesa ========
const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (navToggle && navLinksContainer) {
  // Abrir/cerrar menú al hacer clic en ☰
  navToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('show');
  });

  // 🟢 Cerrar el menú al hacer clic en cualquier enlace del menú
  const navLinks = navLinksContainer.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('show');
    });
  });
}



