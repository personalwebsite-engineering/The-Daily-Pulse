// =============================================
// THE DAILY PULSE — ARTICLE PAGE (article.js)
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  initCommon();
  const article = loadArticle();
  if (article) {
    renderArticle(article);
    renderRelated(article);
    initReadingProgress();
    initShareButtons(article);
    updatePageMeta(article);
  }
});

// ── LOAD ARTICLE FROM URL PARAM ───────────────
function loadArticle() {
  const params = new URLSearchParams(window.location.search);
  const id     = params.get('id');

  if (!id) {
    showError('No article specified.');
    return null;
  }

  const article = getArticleById(id);
  if (!article) {
    showError(`Article "${id}" not found.`);
    return null;
  }

  return article;
}

function showError(msg) {
  const main = document.getElementById('article-main');
  if (main) {
    main.innerHTML = `
      <div class="container" style="padding:80px 24px;text-align:center;">
        <h2 style="font-family:var(--font-display);margin-bottom:16px;">Article Not Found</h2>
        <p style="color:var(--color-text-muted);margin-bottom:28px;">${escapeHtml(msg)}</p>
        <a href="index.html" style="color:var(--color-red);font-weight:600;">← Back to Homepage</a>
      </div>
    `;
  }
}

// ── RENDER ARTICLE ────────────────────────────
function renderArticle(article) {
  const main = document.getElementById('article-main');
  if (!main) return;

  const cat = CATEGORIES.find(c => c.id === article.category);

  main.innerHTML = `
    <article class="article-page">
      <div class="container">
        <div class="article-layout">

          <!-- Article Header -->
          <header class="article-header">
            <div class="article-kicker">
              ${createCatBadge(article.category)}
              ${article.breaking
                ? `<span class="label" style="color:var(--color-red);display:flex;align-items:center;gap:6px;">
                     <span style="width:6px;height:6px;background:var(--color-red);border-radius:50%;animation:pulse 1.5s ease-in-out infinite;display:inline-block;"></span>
                     Breaking News
                   </span>`
                : ''}
            </div>

            <h1 class="article-title">${escapeHtml(article.title)}</h1>
            <p class="article-subtitle">${escapeHtml(article.subtitle)}</p>

            <div class="article-byline">
              <div class="byline-left">
                <span class="byline-author">${escapeHtml(article.author)}</span>
                <span class="byline-role">${escapeHtml(article.authorRole)}</span>
              </div>
              <div class="byline-right">
                <svg viewBox="0 0 24 24" style="width:15px;height:15px;stroke:var(--color-text-muted);fill:none;stroke-width:1.8;stroke-linecap:round;">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>${formatDate(article.date)}</span>
                <span>·</span>
                <span>${article.readTime} min read</span>
              </div>
            </div>
          </header>

          <!-- Hero Image (full bleed) -->
          <div class="article-hero-image full-bleed">
            <img src="${article.image}" alt="${escapeHtml(article.title)}"
                 onerror="this.src='https://picsum.photos/seed/${article.id}hero/1200/600'">
            <p class="image-caption">Photo credit: The Daily Pulse / ${escapeHtml(article.author)}</p>
          </div>

          <!-- Article Body -->
          <div class="article-body" id="article-body">
            ${article.content}
          </div>

          <!-- Tags -->
          <div class="article-tags">
            ${(article.tags || []).map(tag =>
              `<span class="tag">${escapeHtml(tag)}</span>`
            ).join('')}
          </div>

          <!-- Share Bar -->
          <div class="share-bar" id="share-bar">
            <span>Share:</span>
            <button class="share-btn" id="shareTwitter" aria-label="Share on Twitter">
              <svg viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5.5 4.3 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              Twitter
            </button>
            <button class="share-btn" id="shareLinkedIn" aria-label="Share on LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </button>
            <button class="share-btn copy-btn" id="copyLink" aria-label="Copy link">
              <svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              Copy Link
            </button>
          </div>

        </div>
      </div>

      <!-- Related Articles -->
      <div class="container">
        <div id="related-container"></div>
      </div>
    </article>
  `;
}

// ── RELATED ARTICLES ──────────────────────────
function renderRelated(article) {
  const container = document.getElementById('related-container');
  if (!container) return;

  const related = getRelatedArticles(article, 3);
  if (related.length === 0) return;

  container.innerHTML = `
    <section class="related-section">
      <div class="section-header" style="margin-bottom:28px;">
        <h2 class="section-title">More in ${capitalize(article.category)}</h2>
        <a href="category.html?cat=${article.category}" class="section-link">
          All ${capitalize(article.category)} →
        </a>
      </div>
      <div class="cards-grid">
        ${related.map(a => createArticleCard(a)).join('')}
      </div>
    </section>
  `;
}

// ── READING PROGRESS BAR ──────────────────────
function initReadingProgress() {
  const bar  = document.getElementById('readingProgress');
  const body = document.getElementById('article-body');
  if (!bar || !body) return;

  window.addEventListener('scroll', () => {
    const bodyRect  = body.getBoundingClientRect();
    const bodyStart = body.offsetTop;
    const bodyEnd   = bodyStart + body.offsetHeight;
    const scrolled  = window.scrollY + window.innerHeight;

    if (window.scrollY < bodyStart) {
      bar.style.width = '0%';
    } else if (scrolled >= bodyEnd) {
      bar.style.width = '100%';
    } else {
      const progress = ((window.scrollY - bodyStart) / (body.offsetHeight)) * 100;
      bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  }, { passive: true });
}

// ── SHARE BUTTONS ─────────────────────────────
function initShareButtons(article) {
  // Wait for DOM to have share buttons
  setTimeout(() => {
    const url   = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(article.title);

    const twitterBtn  = document.getElementById('shareTwitter');
    const linkedinBtn = document.getElementById('shareLinkedIn');
    const copyBtn     = document.getElementById('copyLink');

    if (twitterBtn) {
      twitterBtn.addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank', 'noopener');
      });
    }

    if (linkedinBtn) {
      linkedinBtn.addEventListener('click', () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener');
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          copyBtn.classList.add('copied');
          copyBtn.innerHTML = `
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
            Copied!
          `;
          showToast('Link copied to clipboard!');
          setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = `
              <svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              Copy Link
            `;
          }, 2500);
        } catch {
          showToast('Could not copy. Please copy manually.');
        }
      });
    }
  }, 300);
}

// ── PAGE META ─────────────────────────────────
function updatePageMeta(article) {
  document.title = `${article.title} — The Daily Pulse`;

  // Update meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = article.subtitle;

  // Open Graph tags
  const og = [
    ['og:title',       article.title],
    ['og:description', article.subtitle],
    ['og:image',       article.image],
    ['og:type',        'article'],
  ];
  og.forEach(([prop, content]) => {
    let tag = document.querySelector(`meta[property="${prop}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', prop);
      document.head.appendChild(tag);
    }
    tag.content = content;
  });
}
