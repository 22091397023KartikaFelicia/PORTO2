document.addEventListener('DOMContentLoaded', () => {
  // === 1. FITUR TEMA (DARK/LIGHT MODE) ===
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('i');
  const body = document.body;

  // Cek preferensi tema dari LocalStorage
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }

  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    
    // Ganti ikon
    if (isDark) {
      themeIcon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });

  // === 2. MENU HAMBURGER (RESPONSIF MOBILE) ===
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Tutup menu saat link diklik
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // === 3. SMOOTH SCROLLING ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Offset untuk navbar yang fixed
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
