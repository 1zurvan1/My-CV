// ================= PWA Activation =================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
          .then(registration => {
              console.log('ServiceWorker registered: ', registration);
          })
          .catch(error => {
              console.log('ServiceWorker registration failed: ', error);
          });
  });
}

// ================= PDF Download =================
document.getElementById('download-pdf')?.addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p', 'mm', 'a4');
  
  doc.html(document.body, {
      callback: function(doc) {
          doc.save('resume.pdf');
      },
      margin: [15, 15, 15, 15],
      autoPaging: 'text',
      width: 190,
      windowWidth: document.documentElement.clientWidth
  });
});

// ================= Theme Toggle =================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle?.querySelector('i');

function updateThemeIcon() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  if (themeIcon) {
      themeIcon.className = currentTheme === 'light' 
          ? 'fas fa-moon' 
          : 'fas fa-sun';
  }
}

themeToggle?.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon();
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}
updateThemeIcon();

// ================= Skills Charts =================
document.querySelectorAll('.chart').forEach(chart => {
  const percent = chart.getAttribute('data-percent');
  chart.style.setProperty('--p', `${percent}%`);
});

// ================= Scroll Animations =================
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
      }
  });
}, observerOptions);

document.querySelectorAll('.animate').forEach(section => {
  observer.observe(section);
});