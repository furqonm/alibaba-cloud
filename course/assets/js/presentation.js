// Apply saved theme immediately to prevent flash of unstyled theme
(function () {
  try {
    const savedTheme = localStorage.getItem('agy-theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {}
})();

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slideCounterEl = document.getElementById('slideCounter');
  const currentSlideEl = document.getElementById('currentSlide');
  const totalSlidesEl = document.getElementById('totalSlides');
  const progressBar = document.getElementById('progressBar');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const sectionIndicator = document.getElementById('sectionIndicator');
  const slideJumpSelect = document.getElementById('slideJumpSelect');

  // Setup Night Theme Toggle Button
  let themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) {
    const navButtons = document.querySelector('.nav-buttons');
    if (navButtons) {
      themeToggleBtn = document.createElement('button');
      themeToggleBtn.className = 'btn-nav';
      themeToggleBtn.id = 'themeToggleBtn';
      themeToggleBtn.title = 'Toggle Night Theme (T)';
      navButtons.appendChild(themeToggleBtn);
    }
  }

  function updateThemeButtonUI() {
    if (!themeToggleBtn) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeToggleBtn.innerHTML = isDark ? '<span>☀️</span> Light' : '<span>🌙</span> Night';
    themeToggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    if (nextTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem('agy-theme', nextTheme);
    } catch (e) {}
    updateThemeButtonUI();
  }

  updateThemeButtonUI();
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  let currentIdx = 0;
  const total = slides.length;

  if (totalSlidesEl) {
    totalSlidesEl.textContent = total;
  }

  // Populate Jump Dropdown
  if (slideJumpSelect) {
    slideJumpSelect.innerHTML = '';
    slides.forEach((slide, idx) => {
      const option = document.createElement('option');
      option.value = idx;
      const titleEl = slide.querySelector('h1, h2');
      const title = titleEl ? titleEl.textContent.trim() : `Slide ${idx + 1}`;
      const cat = slide.dataset.category || '';
      option.textContent = `${idx + 1}. ${cat ? `[${cat}] ` : ''}${title}`;
      slideJumpSelect.appendChild(option);
    });

    slideJumpSelect.addEventListener('change', (e) => {
      updateSlide(parseInt(e.target.value, 10));
    });
  }

  function updateSlide(index) {
    if (index < 0) index = 0;
    if (index >= total) index = total - 1;

    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
      if (idx === index) {
        slide.scrollTop = 0; // Scroll slide to top on activation
      }
    });

    currentIdx = index;

    if (slideCounterEl) {
      slideCounterEl.textContent = `${currentIdx + 1}/${total}`;
    }

    if (currentSlideEl) {
      currentSlideEl.textContent = currentIdx + 1;
    }

    if (slideJumpSelect) {
      slideJumpSelect.value = currentIdx;
    }

    // Update section indicator
    if (sectionIndicator) {
      const activeSlide = slides[currentIdx];
      const category = activeSlide ? activeSlide.dataset.category : '';
      if (category) {
        sectionIndicator.textContent = category;
        sectionIndicator.style.display = 'inline-block';
      } else {
        sectionIndicator.style.display = 'none';
      }
    }

    // Update progress bar
    if (progressBar) {
      const progress = total > 1 ? ((currentIdx) / (total - 1)) * 100 : 100;
      progressBar.style.width = `${progress}%`;
    }

    if (prevBtn) prevBtn.disabled = currentIdx === 0;
    if (nextBtn) nextBtn.disabled = currentIdx === total - 1;
  }

  function nextSlide() {
    if (currentIdx < total - 1) {
      updateSlide(currentIdx + 1);
    }
  }

  function prevSlide() {
    if (currentIdx > 0) {
      updateSlide(currentIdx - 1);
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn(`Fullscreen error: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    // Ignore keystrokes inside select or input
    if (['SELECT', 'INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ': // Spacebar
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        updateSlide(0);
        break;
      case 'End':
        e.preventDefault();
        updateSlide(total - 1);
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
      case 't':
      case 'T':
        toggleTheme();
        break;
    }
  });

  // Touch / swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  window.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const threshold = 50;
    if (touchEndX < touchStartX - threshold) {
      nextSlide(); // Swiped left -> next
    } else if (touchEndX > touchStartX + threshold) {
      prevSlide(); // Swiped right -> prev
    }
  }

  // Button clicks
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);

  // Initialize
  updateSlide(0);
});
