// =============================================
// THE DAILY PULSE — CATEGORY PAGE (category.js)
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  initCommon();
  const cat = loadCategory();
  if (cat) {
    renderCategoryHeader(cat);
    renderCategoryArticles(cat);
  }
});

// ── LOAD CATEGORY FROM URL ────────────────────
function loadCategory() {
  const params = new URLSearchParams(window.location.search);
  const catId  = params.get('cat');

  if (!catId) {
    showCatError('No category specified.');
    return null;
  }

  const cat = CATEGORIES.find(c => c.id === catId);
  if (!cat) {
    showCatError(`Category "${catId}" not found.`);
    return null;
  }

  return cat;
}

function showCatError(msg) {
  const main = document.getElementById('category-main');
  if (main) {
    main.innerHTML = `
      <div class="container" style="padding:80px 24px;text-align:center;">
        <h2 style="font-family:var(--font-display);margin-bottom:16px;">Category Not Found</h2>
        <p style="color:var(--color-text-muted);margin-bottom:28px;">${escapeHtml(msg)}</p>
        <a href="index.html" style="color:var(--color-red);font-weight:600;">← Back to Homepage</a>
      </div>
    `;
  }
}

// ── RENDER CATEGORY HEADER ────────────────────
function renderCategoryHeader(cat) {
  const header = document.getElementById('category-header');
  if (!header) return;

  const articles = getArticlesByCategory(cat.id);
  const count    = articles.length;

  header.innerHTML = `
    <div class="cat-page-header">
      <div class="container">
        <a href="index.html" style="font-size:0.82rem;color:var(--color-text-muted);display:inline-flex;align-items:center;gap:4px;margin-bottom:12px;transition:color 0.2s;">
          ← Home
        </a>
        <h1 class="cat-page-title" style="color:${cat.color};">${cat.label}</h1>
        <div class="cat-underline" style="background:${cat.color};"></div>
        <p class="cat-article-count">${count} ${count === 1 ? 'story' : 'stories'}</p>
      </div>
    </div>
  `;

  // Update page title
  document.title = `${cat.label} — The Daily Pulse`;
}

// ── RENDER CATEGORY ARTICLES ──────────────────
function renderCategoryArticles(cat) {
  const container = document.getElementById('category-articles');
  if (!container) return;

  const articles = getArticlesByCategory(cat.id);

  if (articles.length === 0) {
    container.innerHTML = `
      <div class="container" style="padding:60px 24px;text-align:center;">
        <p style="color:var(--color-text-muted);">No articles found in this category yet.</p>
      </div>
    `;
    return;
  }

  // First article: large featured card
  const [featured, ...rest] = articles;

  container.innerHTML = `
    <div class="container">

      <!-- Featured article for this category -->
      <div style="margin-bottom:48px;">
        <a href="article.html?id=${featured.id}" class="cat-featured-card"
           style="display:grid;grid-template-columns:1fr 1fr;gap:32px;text-decoration:none;">
          <div style="overflow:hidden;">
            <img src="${featured.image}" alt="${escapeHtml(featured.title)}"
                 style="width:100%;height:320px;object-fit:cover;transition:transform 0.5s ease;"
                 onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'"
                 onerror="this.src='https://picsum.photos/seed/${featured.id}catfeat/800/400'">
          </div>
          <div style="display:flex;flex-direction:column;justify-content:center;gap:12px;">
            ${createCatBadge(featured.category)}
            <h2 style="font-family:var(--font-display);font-size:clamp(1.4rem,2.5vw,2rem);line-height:1.2;color:var(--color-text);">
              ${escapeHtml(featured.title)}
            </h2>
            <p style="font-size:0.95rem;color:var(--color-text-secondary);line-height:1.65;">
              ${escapeHtml(featured.subtitle)}
            </p>
            <div class="card-meta">
              <span>${featured.author}</span>
              <span class="dot">·</span>
              <span>${featured.readTime} min read</span>
              <span class="dot">·</span>
              <span>${formatDate(featured.date)}</span>
            </div>
            <span style="display:inline-flex;align-items:center;gap:6px;color:${cat.color};font-size:0.85rem;font-weight:600;margin-top:4px;">
              Read story →
            </span>
          </div>
        </a>
      </div>

      <hr class="divider" style="margin:0 0 40px;">

      <!-- Rest of articles in grid -->
      ${rest.length > 0 ? `
        <div class="cat-articles-grid">
          ${rest.map(a => createArticleCard(a)).join('')}
        </div>
      ` : ''}

    </div>
  `;

  // Responsive fix for featured card on mobile
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 640px) {
      .cat-featured-card { grid-template-columns: 1fr !important; }
      .cat-featured-card img { height: 220px !important; }
    }
  `;
  document.head.appendChild(style);
}
