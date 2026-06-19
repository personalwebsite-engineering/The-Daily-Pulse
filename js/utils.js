// =============================================
// THE DAILY PULSE — UTILITY FUNCTIONS
// =============================================

// Format date: "June 18, 2026"
function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

// Time ago: "2 hours ago", "3 days ago"
function timeAgo(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  const now  = new Date();
  const diff = now - date;
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7)  return `${days} days ago`;
  return formatDate(dateStr);
}

// Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Create category badge HTML
function createCatBadge(category) {
  return `<span class="cat-badge ${category}">${capitalize(category)}</span>`;
}

// Create article card HTML
function createArticleCard(article, size = 'default') {
  return `
    <a href="article.html?id=${article.id}" class="article-card">
      <div class="card-image-wrap">
        <img src="${article.thumbnail}" alt="${escapeHtml(article.title)}" loading="lazy"
             onerror="this.src='https://picsum.photos/seed/${article.id}fallback/600/380'">
      </div>
      <div class="card-body">
        ${createCatBadge(article.category)}
        <h3 class="card-title">${escapeHtml(article.title)}</h3>
        <p class="card-excerpt">${escapeHtml(article.subtitle)}</p>
        <div class="card-meta">
          <span>${article.author}</span>
          <span class="dot">·</span>
          <span>${article.readTime} min read</span>
          <span class="dot">·</span>
          <span>${timeAgo(article.date)}</span>
        </div>
      </div>
    </a>
  `;
}

// Create horizontal card HTML
function createHorizontalCard(article) {
  return `
    <a href="article.html?id=${article.id}" class="article-card card-horizontal">
      <div class="card-image-wrap" style="flex-shrink:0;">
        <img src="${article.thumbnail}" alt="${escapeHtml(article.title)}" loading="lazy"
             style="width:110px;height:80px;object-fit:cover;"
             onerror="this.src='https://picsum.photos/seed/${article.id}fb/200/150'">
      </div>
      <div class="card-body">
        ${createCatBadge(article.category)}
        <h4 class="card-title">${escapeHtml(article.title)}</h4>
        <div class="card-meta">
          <span>${timeAgo(article.date)}</span>
          <span class="dot">·</span>
          <span>${article.readTime} min</span>
        </div>
      </div>
    </a>
  `;
}

// Escape HTML to prevent XSS
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Render a section of article cards
function renderCardsSection(category, articles) {
  const cat = CATEGORIES.find(c => c.id === category);
  const label = cat ? cat.label : capitalize(category);
  return `
    <section class="category-section">
      <div class="section-header">
        <h2 class="section-title">${label}</h2>
        <a href="category.html?cat=${category}" class="section-link">
          All ${label} →
        </a>
      </div>
      <div class="cards-grid">
        ${articles.map(a => createArticleCard(a)).join('')}
      </div>
    </section>
  `;
}

// Dark mode
function initDarkMode() {
  const btn  = document.getElementById('darkModeBtn');
  const body = document.body;
  const saved = localStorage.getItem('dp-darkmode');
  if (saved === 'true') body.classList.add('dark-mode');
  updateDarkModeIcon(body.classList.contains('dark-mode'));

  if (btn) {
    btn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      localStorage.setItem('dp-darkmode', isDark);
      updateDarkModeIcon(isDark);
    });
  }
}

function updateDarkModeIcon(isDark) {
  const btn = document.getElementById('darkModeBtn');
  if (!btn) return;
  btn.innerHTML = isDark
    ? `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    : `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

// Header scroll shadow
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// Back to top button
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Toast notification
function showToast(msg, duration = 2500) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// Breaking news ticker
function initTicker() {
  const track = document.querySelector('.ticker-content');
  if (!track || typeof BREAKING_NEWS === 'undefined') return;
  // Duplicate for seamless loop
  const items = [...BREAKING_NEWS, ...BREAKING_NEWS];
  track.innerHTML = items.map(n => `<span class="ticker-item">${escapeHtml(n)}</span>`).join('');
}

// Active nav link based on current page
function setActiveNav() {
  const params = new URLSearchParams(window.location.search);
  const cat    = params.get('cat');
  const links  = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (cat && href.includes(`cat=${cat}`)) {
      link.classList.add('active');
    } else if (!cat && href === 'index.html') {
      link.classList.add('active');
    }
  });
}

// Build the standard header HTML
function buildHeader() {
  const navLinks = CATEGORIES.map(c =>
    `<li><a href="category.html?cat=${c.id}" class="nav-link">${c.label}</a></li>`
  ).join('');

  return `
    <header class="site-header" id="siteHeader">
      <div class="container">
        <div class="header-top">
          <a href="index.html" class="logo" aria-label="The Daily Pulse — Home">
            <div class="logo-pulse" aria-hidden="true"></div>
            <div class="logo-text">
              <span class="logo-top">The Daily</span>
              <span class="logo-bottom">Pulse</span>
            </div>
          </a>
          <div class="header-actions">
            <button class="icon-btn" id="searchBtn" aria-label="Search">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <button class="icon-btn" id="darkModeBtn" aria-label="Toggle dark mode">
              <svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
            <a href="#newsletter" class="subscribe-btn">Subscribe</a>
          </div>
        </div>
      </div>
      <nav class="header-nav" aria-label="Categories">
        <div class="container">
          <ul class="nav-list">
            <li><a href="index.html" class="nav-link">Home</a></li>
            ${navLinks}
          </ul>
        </div>
      </nav>
    </header>
  `;
}

// Build the standard footer HTML
function buildFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo">
              <div class="logo-pulse"></div>
              <div class="logo-text">
                <span class="logo-top">The Daily</span>
                <span class="logo-bottom">Pulse</span>
              </div>
            </div>
            <p class="footer-tagline">Independent journalism, delivered daily. We follow the story wherever it leads.</p>
          </div>
          <div>
            <p class="footer-col-title">Coverage</p>
            <ul class="footer-links">
              ${CATEGORIES.map(c => `<li><a href="category.html?cat=${c.id}">${c.label}</a></li>`).join('')}
            </ul>
          </div>
          <div>
            <p class="footer-col-title">Company</p>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Journalists</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Ethics Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <p class="footer-col-title">Subscribe</p>
            <ul class="footer-links">
              <li><a href="#">Daily Newsletter</a></li>
              <li><a href="#">Breaking Alerts</a></li>
              <li><a href="#">Weekend Digest</a></li>
              <li><a href="#">RSS Feed</a></li>
              <li><a href="#">Podcast</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} The Daily Pulse. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Build the search overlay HTML
function buildSearchOverlay() {
  return `
    <div class="search-overlay" id="searchOverlay" role="dialog" aria-label="Search">
      <div class="search-box">
        <div class="search-input-wrap">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" class="search-input" id="searchInput" placeholder="Search articles..." autocomplete="off" aria-label="Search articles">
          <button class="search-close" id="searchClose" aria-label="Close search">✕</button>
        </div>
        <div class="search-results" id="searchResults" style="display:none;"></div>
      </div>
    </div>
  `;
}

// Search overlay logic
function initSearch() {
  const overlay    = document.getElementById('searchOverlay');
  const openBtn    = document.getElementById('searchBtn');
  const closeBtn   = document.getElementById('searchClose');
  const input      = document.getElementById('searchInput');
  const resultsBox = document.getElementById('searchResults');
  if (!overlay || !openBtn) return;

  openBtn.addEventListener('click', () => {
    overlay.classList.add('open');
    setTimeout(() => input && input.focus(), 100);
  });

  const close = () => {
    overlay.classList.remove('open');
    if (input) input.value = '';
    if (resultsBox) { resultsBox.innerHTML = ''; resultsBox.style.display = 'none'; }
  };

  closeBtn && closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  input && input.addEventListener('input', () => {
    const q       = input.value.trim();
    const results = searchArticles(q);
    if (!resultsBox) return;

    if (!q || q.length < 2) {
      resultsBox.style.display = 'none';
      resultsBox.innerHTML = '';
      return;
    }

    if (results.length === 0) {
      resultsBox.style.display = 'block';
      resultsBox.innerHTML = `<div class="search-no-results">No articles found for "<strong>${escapeHtml(q)}</strong>"</div>`;
      return;
    }

    resultsBox.style.display = 'block';
    resultsBox.innerHTML = results.map(a => `
      <a href="article.html?id=${a.id}" class="search-result-item" onclick="void(0)">
        <img src="${a.thumbnail}" alt="" class="search-result-img" loading="lazy">
        <div class="search-result-text">
          ${createCatBadge(a.category)}
          <span class="search-result-title">${escapeHtml(a.title)}</span>
          <span class="meta">${timeAgo(a.date)} · ${a.readTime} min read</span>
        </div>
      </a>
    `).join('');
  });
}

// Init all common components
function initCommon() {
  // Inject header, overlay, footer, back-to-top, toast
  const headerEl = document.getElementById('header-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  const bodyEl   = document.body;

  if (headerEl) headerEl.outerHTML = buildHeader();
  if (footerEl) footerEl.outerHTML = buildFooter();

  // Inject search overlay and utility elements
  bodyEl.insertAdjacentHTML('beforeend', buildSearchOverlay());
  bodyEl.insertAdjacentHTML('beforeend', `
    <button class="back-to-top" id="backToTop" aria-label="Back to top">
      <svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  `);

  initDarkMode();
  initHeaderScroll();
  initBackToTop();
  initTicker();
  initSearch();
  setActiveNav();
}
