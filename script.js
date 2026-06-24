
document.addEventListener('DOMContentLoaded', () => {
  /* ===============================
   * 1. DARK / LIGHT MODE TOGGLE
   * =============================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const DARK = 'dark';
  const LIGHT = 'light';
  const THEME_KEY = 'theme-preference';

  // Apply saved theme or default to system preference
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const initialTheme = savedTheme ? savedTheme : (prefersDark.matches ? DARK : LIGHT);
  setTheme(initialTheme);

  themeToggleBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light-theme') ? DARK : LIGHT;
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  });

  function setTheme(theme) {
    // Update toggle icon
    const icon = themeToggleBtn.querySelector('span');
    if (!icon) return;
    icon.textContent = theme === LIGHT ? '🌙' : '☀️';
    // Toggle body class
    document.body.classList.toggle('light-theme', theme === LIGHT);
  }

  /* ===============================
   * 2. Smooth Scroll Navigation
   * =============================== */
  const OFFSET = 80; // approximate header height
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const topPos = target.getBoundingClientRect().top + window.pageYOffset - OFFSET;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
      }
    });
  });

  /* ===============================
   * 3. Show / Hide Sections
   * =============================== */
  document.querySelectorAll('.section-title').forEach(title => {
    const btn = document.createElement('button');
    btn.className = 'section-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle section visibility');
    btn.innerHTML = '🙈';
    title.appendChild(btn);
  });

  document.body.addEventListener('click', e => {
    if (e.target.matches('.section-toggle')) {
      const section = e.target.closest('section');
      if (section) {
        section.classList.toggle('hidden');
        e.target.textContent = section.classList.contains('hidden') ? '😎' : '🙈';
      }
    }
  });

  /* ===============================
   * 4. Contact Form Validation
   * =============================== */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', validateForm);
  }

  function validateForm(e) {
    e.preventDefault();
    let valid = true;

    // Remove previous errors
    form.querySelectorAll('.error').forEach(el => el.remove());

    // Validate name
    const nameField = form.querySelector('#name');
    if (!nameField.value.trim()) {
      showError(nameField, 'Name is required');
      valid = false;
    }

    // Validate email
    const emailField = form.querySelector('#email');
    const emailValue = emailField.value.trim();
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(emailValue)) {
      showError(emailField, 'Enter a valid email');
      valid = false;
    }

    // Validate message (optional)
    const msgField = form.querySelector('#message');
    if (msgField.value.trim() && msgField.value.trim().length < 10) {
      showError(msgField, 'Message should be at least 10 characters');
      valid = false;
    }

    if (valid) {
      // Simulate form submission
      alert('Form submitted successfully!');
      form.reset();
    }
  }

  function showError(input, msg) {
    const error = document.createElement('small');
    error.className = 'error';
    error.textContent = msg;
    input.insertAdjacentElement('afterend', error);
    input.style.borderColor = 'hsl(0, 100%, 50%)';
  }

  /* ===============================
   * 5. Interactive Image Gallery
   * =============================== */
  const gallery = document.getElementById('image-slider');
  if (gallery) {
    const images = [
      'images/profile.png',
      'https://picsum.photos/seed/1/860/500',
      'https://picsum.photos/seed/2/860/500'
    ];
    let currentIndex = 0;
    const imgTag = gallery.querySelector('img');
    const nextBtn = gallery.querySelector('#next-slide');
    const prevBtn = gallery.querySelector('#prev-slide');

    function updateSlide() {
      imgTag.src = images[currentIndex];
    }

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlide();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlide();
    });

    updateSlide();
  }

  /* ===============================
   * 6. Dynamic Text Animation (Typing)
   * =============================== */
  const typeTextEl = document.getElementById('dynamic-text');
  if (typeTextEl) {
    const strings = ['Front‑End Engineer', 'Back‑End Developer', 'Full‑Stack Enthusiast'];
    let strIdx = 0;
    let charIdx = 0;
    const speed = 150;

    function type() {
      if (charIdx < strings[strIdx].length) {
        typeTextEl.textContent += strings[strIdx][charIdx++];
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          typeTextEl.textContent = '';
          strIdx = (strIdx + 1) % strings.length;
          charIdx = 0;
          setTimeout(type, speed);
        }, 2000);
      }
    }
    type();
  }
});
