   // ترجمه‌های فارسی و انگلیسی
   const translations = {
    fa: {
      "header.title": "رزومه ابوالفضل نادری",
      "nav.about": "درباره من",
      "nav.skills": "مهارت‌ها",
      "nav.projects": "پروژه‌ها",
      "nav.contact": "تماس",
      "about.title": "ابوالفضل نادری - توسعه دهنه فرانت اند",
      "about.text": "سلام! من ابوالفضل نادری هستم، یک توسعه‌دهنده فرانت‌اند توانمند در ایجاد رابط‌های کاربری جذاب و واکنش‌گرا. تخصص اصلی من در تبدیل طرح‌های خلاقانه به کدهای کارآمد و قابل نگهداری است.",
      "about.text2": "من به فناوری‌های مدرن وب مانند React, JavaScript (ES6+) و CSS3 مسلط هستم و همیشه در حال یادگیری و به‌روزرسانی مهارت‌هایم می‌باشم.",
      "skills.title": "مهارت‌های تخصصی",
      "skills.subtitle": "تخصص‌ها و توانمندی‌های من در توسعه وب",
      "projects.title": "نمونه کارها",
      "projects.subtitle": "برترین پروژه‌های توسعه یافته توسط من",
      "projects.demo": "مشاهده دمو",
      "projects.code": "مشاهده کد",
      "all.projects": "مشاهده تمام پروژه‌ها در GitHub",
      "contact.title": "تماس با من",
      "contact.subtitle": "برای همکاری یا پرسش‌های خود در ارتباط باشید",
      "contact.info.title": "اطلاعات تماس",
      "contact.email.label": "ایمیل",
      "contact.github.label": "GitHub",
      "contact.location.label": "موقعیت",
      "contact.form.title": "ارسال پیام",
      "contact.name.label": "نام شما",
      "contact.email.label": "ایمیل",
      "contact.message.label": "پیام",
      "contact.submit": "ارسال پیام",
      "footer.text": "© 2023 طراحی و توسعه توسط زروان | کلیه حقوق محفوظ است"
    },
    en: {
      "header.title": "AbolfazlNaderi's Resume",
      "nav.about": "About Me",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "about.title": "Abolfazl Naderi - Frontend Developer",
      "about.text": "Hello! I'm Abolfazl Naderi, a front-end developer dedicated to building captivating, responsive UIs. I excel at transforming creative designs into high-performance, maintainable code.",
      "about.text2": "I am proficient in modern web technologies such as React, JavaScript (ES6+), and CSS3, and I am always learning and updating my skills.",
      "skills.title": "Technical Skills",
      "skills.subtitle": "My expertise in web development",
      "projects.title": "Portfolio Projects",
      "projects.subtitle": "Top projects developed by me",
      "projects.demo": "View Demo",
      "projects.code": "View Code",
      "all.projects": "View All Projects on GitHub",
      "contact.title": "Contact Me",
      "contact.subtitle": "Get in touch for collaboration or inquiries",
      "contact.info.title": "Contact Information",
      "contact.email.label": "Email",
      "contact.github.label": "GitHub",
      "contact.location.label": "Location",
      "contact.form.title": "Send Message",
      "contact.name.label": "Your Name",
      "contact.email.label": "Email",
      "contact.message.label": "Message",
      "contact.submit": "Send Message",
      "footer.text": "© 2023 Designed & Developed by Zarvan | All Rights Reserved"
    }
  };

  // مدیریت تغییر زبان
  const langToggle = document.getElementById('langToggle');
  let currentLang = 'fa'; // زبان پیش‌فرض فارسی
  
  // تابع تغییر زبان
  function changeLanguage(lang) {
    currentLang = lang;
    
    // تغییر جهت صفحه بر اساس زبان
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    
    // تغییر متن‌ها
    document.getElementById('header-title').textContent = translations[lang]['header.title'];
    document.getElementById('about-title').textContent = translations[lang]['about.title'];
    document.getElementById('about-text').innerHTML = translations[lang]['about.text'];
    document.getElementById('about-text-2').innerHTML = translations[lang]['about.text2'];
    document.getElementById('skills-title').textContent = translations[lang]['skills.title'];
    document.getElementById('skills-subtitle').textContent = translations[lang]['skills.subtitle'];
    document.getElementById('projects-title').textContent = translations[lang]['projects.title'];
    document.getElementById('projects-subtitle').textContent = translations[lang]['projects.subtitle'];
    document.getElementById('all-projects-link').textContent = translations[lang]['all.projects'];
    document.getElementById('contact-title').textContent = translations[lang]['contact.title'];
    document.getElementById('contact-subtitle').textContent = translations[lang]['contact.subtitle'];
    document.getElementById('contact-info-title').textContent = translations[lang]['contact.info.title'];
    document.getElementById('contact-email-label').textContent = translations[lang]['contact.email.label'];
    document.getElementById('contact-github-label').textContent = translations[lang]['contact.github.label'];
    document.getElementById('contact-location-label').textContent = translations[lang]['contact.location.label'];
    document.getElementById('contact-form-title').textContent = translations[lang]['contact.form.title'];
    document.getElementById('contact-name-label').textContent = translations[lang]['contact.name.label'];
    document.getElementById('contact-email-label').textContent = translations[lang]['contact.email.label'];
    document.getElementById('contact-message-label').textContent = translations[lang]['contact.message.label'];
    document.getElementById('contact-submit-btn').textContent = translations[lang]['contact.submit'];
    document.getElementById('footer-text').textContent = translations[lang]['footer.text'];
    
    // تغییر لینک‌های نویگیشن
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      const key = link.getAttribute('data-i18n');
      if (key) {
        link.textContent = translations[lang][key];
      }
    });
    
    // تغییر دکمه‌های پروژه‌ها
    const projectButtons = document.querySelectorAll('.project-links .btn');
    projectButtons.forEach(button => {
      const key = button.getAttribute('data-i18n');
      if (key) {
        button.textContent = translations[lang][key];
      }
    });
  }
  
  // تغییر زبان با کلیک بر روی دکمه
  langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'fa' ? 'en' : 'fa';
    changeLanguage(newLang);
  });

  // مدیریت تغییر تم
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  
  // بررسی حالت ذخیره شده در localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }
  
  // تغییر تم با کلیک بر روی دکمه
  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
  
  // آپدیت آیکون بر اساس تم فعلی
  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }
  
  // انیمیشن اسکرول
  document.addEventListener('DOMContentLoaded', function() {
    // فعال کردن انیمیشن‌ها هنگام اسکرول
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.style.opacity = '1';
        }
      });
    }, {
      threshold: 0.1
    });
    
    animateElements.forEach(el => {
      observer.observe(el);
    });
    
    // منوی موبایل
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
    
    // فرم تماس
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = currentLang === 'fa' 
        ? 'پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهم گرفت.' 
        : 'Your message has been sent successfully! I will contact you soon.';
      alert(message);
      contactForm.reset();
    });
    
    // فعال کردن نوارهای پیشرفت
    const progressBars = document.querySelectorAll('.level-progress');
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 500);
    });
  });