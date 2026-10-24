// Toggle mode gelap
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Cek preferensi tersimpan
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = '☀️ Terang';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  toggleBtn.textContent = isDark ? '☀️ Terang' : '🌙 Gelap';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Smooth scroll untuk link navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animasi card muncul saat halaman dimuat
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 100 + index * 100);
});