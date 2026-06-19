// =============================================
// THE DAILY PULSE — HOMEPAGE (main.js)
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  initCommon();
  renderHero();
  renderAllSections();
  initNewsletterForm();
  initCategoryJumpNav();
});

// ── HERO SECTION ─────────────────────────────
function renderHero() {
  const container = document.getElementById('hero-container');
  if (!container) return;

  // Pick featured articles; ensure we have at least 3
  let featured = FEATURED_ARTICLES.slice(0, 3);
  if (featured.length < 3) {
    const extra = ARTICLES.filter(a => !featured.includes(a)).slice(0, 3 - featured.length);
    featured = [...featured, ...extra];
  }

  const [main, sec1, sec2] = featured;

  container.innerHTML = `
    <div class="hero-grid">

      <!-- Main featured story -->
      <a href="article.html?id=${main.id}" class="hero-featured">
        <div class="hero-featured-inner">
          <div class="hero-image-wrap">
            <img src="${main.image}" alt="${escapeHtml(main.title)}" loading="eager"
                 onerror="this.src='https://picsum.photos/seed/${main.id}hero/1200/600'">
            <div class="hero-image-gradient"></div>
          </div>
          <div class="hero-content">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
              ${createCatBadge(main.category)}
              ${main.breaking ? `<span class="label" style="color:var(--color-red);display:flex;align-items:center;gap:5px;"><span style="width:6px;height:6px;background:var(--color-red);border-radius:50%;display:inline-block;animation:pulse 1.5s ease-in-out infinite;"></span>Breaking</span>` : ''}
            </div>
            <h2>${escapeHtml(main.title)}</h2>
            <p class="hero-excerpt">${escapeHtml(main.subtitle)}</p>
            <div class="card-meta">
              <span>${main.author}</span>
              <span class="dot">·</span>
              <span>${main.readTime} min read</span>
              <span class="dot">·</span>
              <span>${timeAgo(main.date)}</span>
            </div>
          </div>
        </div>
      </a>

      <!-- Secondary story 1 -->
      <a href="article.html?id=${sec1.id}" class="hero-secondary">
        <div class="hero-secondary-inner">
          <img src="${sec1.thumbnail}" alt="${escapeHtml(sec1.title)}" loading="lazy"
               onerror="this.src='https://picsum.photos/seed/${sec1.id}s1/600/380'">
          <div style="display:flex;flex-direction:column;gap:8px;">
            ${createCatBadge(sec1.category)}
            <h3>${escapeHtml(sec1.title)}</h3>
            <div class="card-meta">
              <span>${sec1.author}</span>
              <span class="dot">·</span>
              <span>${timeAgo(sec1.date)}</span>
            </div>
          </div>
        </div>
      </a>

      <!-- Secondary story 2 -->
      <a href="article.html?id=${sec2.id}" class="hero-secondary">
        <div class="hero-secondary-inner">
          <img src="${sec2.thumbnail}" alt="${escapeHtml(sec2.title)}" loading="lazy"
               onerror="this.src='https://picsum.photos/seed/${sec2.id}s2/600/380'">
          <div style="display:flex;flex-direction:column;gap:8px;">
            ${createCatBadge(sec2.category)}
            <h3>${escapeHtml(sec2.title)}</h3>
            <div class="card-meta">
              <span>${sec2.author}</span>
              <span class="dot">·</span>
              <span>${timeAgo(sec2.date)}</span>
            </div>
          </div>
        </div>
      </a>

    </div>
  `;
}

// ── CATEGORY SECTIONS ─────────────────────────
function renderAllSections() {
  const container = document.getElementById('sections-container');
  if (!container) return;

  let html = '';

  CATEGORIES.forEach((cat, i) => {
    const articles = getArticlesByCategory(cat.id, 3);
    if (articles.length === 0) return;

    html += `
      <section class="category-section section-gap" id="section-${cat.id}">
        <div class="section-header">
          <h2 class="section-title" style="border-left:4px solid ${cat.color};padding-left:12px;">${cat.label}</h2>
          <a href="category.html?cat=${cat.id}" class="section-link">All ${cat.label} stories →</a>
        </div>
        <div class="cards-grid">
          ${articles.map(a => createArticleCard(a)).join('')}
        </div>
      </section>
    `;

    // After Business, insert the newsletter CTA inline
    if (cat.id === 'business') {
      html += `<div id="newsletter-inline"></div>`;
    }
  });

  container.innerHTML = html;
}

// ── NEWSLETTER ────────────────────────────────
function initNewsletterForm() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      const email = input ? input.value.trim() : '';
      if (!email || !email.includes('@')) {
        showToast('Please enter a valid email address.');
        return;
      }
      // In production: send to your email service API
      input.value = '';
      showToast('🎉 You\'re subscribed! Welcome to The Daily Pulse.');
    });
  });
}

// ── CATEGORY QUICK-JUMP NAV ───────────────────
function initCategoryJumpNav() {
  // Smooth-scroll to section when clicking category nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('category.html')) return; // external page, skip

    link.addEventListener('click', e => {
      const cat = href.replace('#section-', '');
      const target = document.getElementById(`section-${cat}`);
      if (target) {
        e.preventDefault();
        const offset = document.querySelector('.site-header')?.offsetHeight || 60;
        const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}
