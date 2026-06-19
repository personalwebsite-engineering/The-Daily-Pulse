# The Daily Pulse 📰

A modern, NYT-inspired news website built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step — just clean, fast, deployable code.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- **Clean, minimal NYT-style design** — serif headlines, generous whitespace, classic red accent
- **6 categories**: World, Politics, Business, Tech, Sports, Entertainment
- **21 realistic mock articles** with full content, images, tags, and bylines
- **Breaking news ticker** with smooth marquee animation
- **Live search** with instant results overlay
- **Dark mode** with persisted preference (localStorage)
- **Reading progress bar** on article pages
- **Social sharing** (Twitter, LinkedIn, copy link)
- **Fully responsive** — mobile, tablet, and desktop layouts
- **Zero dependencies** — no npm install needed to run locally
- **Fast** — static HTML/CSS/JS, no build step, deploys instantly

## 📁 Project Structure

```
the-daily-pulse/
├── index.html          # Homepage (hero + category sections)
├── article.html        # Article detail page template
├── category.html       # Category listing page template
├── css/
│   └── style.css       # All styles (design tokens, components, responsive)
├── js/
│   ├── data.js         # Article data (replace with real API — see below)
│   ├── utils.js         # Shared components (header, footer, search, dark mode)
│   ├── main.js          # Homepage logic
│   ├── article.js       # Article page logic
│   └── category.js      # Category page logic
├── vercel.json          # Vercel routing config
└── README.md
```

## 🚀 Run Locally

No build tools required. Just serve the folder with any static server:

```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node (npx, no install needed)
npx serve .

# Option 3: VS Code
# Right-click index.html → "Open with Live Server"
```

Then open `http://localhost:8000`.

> ⚠️ Don't just double-click `index.html` to open it as a `file://` URL — some browsers block JS module-like behavior and relative fetches that way. Use a local server.

## 📤 Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — The Daily Pulse"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/the-daily-pulse.git
git push -u origin main
```

## ▲ Deploy to Vercel

**Option A — Vercel Dashboard (easiest)**
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repo
3. Framework Preset: **Other** (it's a static site, no build step needed)
4. Click **Deploy** — done in ~30 seconds

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel
```

That's it — no environment variables, no build command needed since this is pure static HTML/CSS/JS.

## 🔌 Connecting Real News Data

Right now all articles live in `js/data.js` as mock data. To pull in **real, live news**, swap that file for an API call. Good free/cheap options:

| API | Free Tier | Notes |
|---|---|---|
| [NewsAPI.org](https://newsapi.org) | 100 req/day | Easiest to start with |
| [GNews](https://gnews.io) | 100 req/day | Good category support |
| [The Guardian Open Platform](https://open-platform.theguardian.com) | Free, generous | High-quality journalism, full article text |
| [NYTimes API](https://developer.nytimes.com) | Free, rate-limited | Official NYT headlines |

Example swap (NewsAPI) in `js/data.js`:

```js
async function fetchArticles() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_KEY`
  );
  const data = await res.json();
  return data.articles.map(a => ({
    id: a.url,
    title: a.title,
    subtitle: a.description,
    image: a.urlToImage,
    thumbnail: a.urlToImage,
    author: a.author || 'Staff Writer',
    date: a.publishedAt.split('T')[0],
    category: 'world', // NewsAPI doesn't return category on top-headlines by default
    content: `<p>${a.content || a.description}</p>`,
    tags: [],
    readTime: 4,
  }));
}
```

⚠️ **Important:** Never put a real API key directly in client-side JS for a public repo — it'll be visible to anyone. For production, either:
- Use a serverless function (Vercel API Route) as a proxy, or
- Use an API that supports CORS + public/restricted keys (like NewsAPI's dev tier, fine for personal projects)

## 🎨 Customization

- **Colors & fonts**: edit the CSS custom properties at the top of `css/style.css` (`:root` section)
- **Site name**: search and replace "The Daily Pulse" across `index.html`, `article.html`, `category.html`, and `js/utils.js`
- **Categories**: edit the `CATEGORIES` array in `js/data.js`
- **Logo**: the logo is pure CSS/text (no image needed) — edit `.logo` in `js/utils.js`'s `buildHeader()`

## 📄 License

MIT — free to use, modify, and deploy for personal or commercial projects.

---

Built with care. No frameworks. No build step. Just ships. 🚀
