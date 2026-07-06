# Sadman Sadik Khan — Portfolio (Static HTML/CSS/JS)

A fully self-contained, dynamic portfolio website. No backend, no database,
no build step — just open `index.html` in a browser, or deploy anywhere
that serves static files.

---

## 📁 Files

```
static-portfolio/
├── index.html               # Page structure (all sections)
├── style.css                # All styling, animations, responsive layout
├── script.js                # All data + rendering + interactivity (incl. PROFILES config)
├── profile.jpg               # Your photo, shown in the hero section
├── book-cover.jpg             # Book cover, shown on the Publications page
└── Sadman_Sadik_Khan_CV.pdf  # Your CV (used by Download/Preview buttons)
```

There is **no admin panel** and **no database** — to update content,
you edit `script.js` directly (see "How to Edit Content" below).

---

## ✨ What's "dynamic" about it

Even though it's static (no server), the page is dynamic in behavior:

- **Data-driven rendering** — All publications, projects, education,
  experience, training, and activities are stored in a single `DATA` object
  in `script.js` and rendered into the page by JavaScript at load time.
- **Publication filters** — Click "Conference / Journal / Book" to filter
  the 52 publications live, grouped and re-grouped by year automatically.
- **Animated counters** — The stats on the homepage (52 Publications, etc.)
  count up from 0 when scrolled into view.
- **Scroll-reveal animations** — Cards fade and slide in as you scroll.
- **Active nav highlighting** — The navbar highlights whichever section
  is currently in view, using `IntersectionObserver`.
- **Mobile menu** — Responsive hamburger menu below 768px width.
- **Back-to-top button** — Appears after scrolling, smooth-scrolls to top.

---

## 🚀 How to Deploy

### Option A — Vercel (recommended, free)
1. Push this folder to a GitHub repo (just these 4 files, no `package.json` needed)
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo
3. Framework preset: choose **"Other"** (it's plain static files)
4. Deploy — done. Vercel serves static files instantly, no build step.

### Option B — GitHub Pages (free)
1. Push to a GitHub repo
2. Repo → Settings → Pages → Source: `main` branch, root folder
3. Your site is live at `https://yourusername.github.io/repo-name`

### Option C — Netlify (free)
1. Drag and drop the `static-portfolio` folder onto [app.netlify.com/drop](https://app.netlify.com/drop)
2. Done — instant URL.

### Option D — Just open it locally
Double-click `index.html` — it works directly in any browser, no server needed
(though some browsers block local file downloads of the PDF; if so, run a
quick local server: `python3 -m http.server 8000` then visit `localhost:8000`).

---

## ✏️ How to Edit Content

Everything content-related lives in the `DATA` object at the top of
**`script.js`**. No HTML editing required for routine updates.

### Add a new publication
```js
DATA.publications.push({
  title: "Your New Paper Title",
  authors: "Your Name*, Co-Author",
  venue: "IEEE Conference Name 2026",
  publisher: "IEEE",       // IEEE | Springer | Taylor & Francis | Book | Other
  year: "2026",
  type: "conference"        // conference | journal | book | preprint
});
```

### Add a new project
```js
DATA.projects.push({
  title: "Project Name",
  description: "What it does...",
  tags: ["Tag1", "Tag2"],
  year: "2026"
});
```

### Add a job / experience entry
```js
DATA.experience.unshift({   // unshift = add to top
  role: "New Role",
  department: "Department Name",
  organization: "Institution",
  period: "June 2026 – Present",
  description: "What you do in this role.",
  current: true   // set previous "current: true" entry back to false
});
```

### Add an activity
```js
DATA.activities.push({
  title: "Activity Title",
  organization: "Organization",
  year: "2026",
  description: "Details...",
  category: "leadership"  // leadership | event | volunteer | competition
});
```

### Update your profile photo
The hero section shows `profile.jpg`. To change it, just replace that file
with a new image (keep the filename `profile.jpg`, or update the `src` in
`index.html`: `<img src="profile.jpg" class="hero-avatar-img" />`).
The image auto-crops to a circle — a roughly square photo works best.

### Replace the CV file
Just replace `Sadman_Sadik_Khan_CV.pdf` with your updated file, keeping the
same filename — or update the filename in `index.html` wherever it appears
(`href="Sadman_Sadik_Khan_CV.pdf"`, two places in the About section).

### Update social/profile links & metrics (Scholar, ResearchGate, ORCID, WoS, LinkedIn)
All of these live in **one place**: the `PROFILES` object at the very top of
`script.js`. Edit it once and it updates everywhere automatically — the
Home hero stat cards, the Home hero link pills, and the Contact page buttons.
```js
const PROFILES = {
  googleScholar: { url: "...", citations: 163 },   // citations shown as an animated stat
  researchGate:  { url: "...", reads: 7000, citations: 66 }, // reads shown as an animated stat
  orcid:         { url: "https://orcid.org/0009-0003-7727-2047" },
  webOfScience:  { url: "https://www.webofscience.com/wos/author/record/..." },
  linkedin:      { url: "..." },
  email: "...", phone: "...",
};
```
The ORCID and Web of Science cards on Home are styled like the other stat
cards (icon instead of a number) and link straight out to your profile.

### Add or edit a publication abstract
Each entry in `DATA.publications` (top of `script.js`) can have an optional
`abstract` field. Clicking any publication card on the Publications page
expands it to reveal the abstract. If you haven't added one yet, a default
placeholder message is shown instead.
```js
{
  title: "Your Paper Title",
  authors: "...",
  venue: "...", publisher: "IEEE", year: "2026", type: "conference",
  abstract: "Paste the real abstract text here once available."
}
```

### Book cover image
The book entry in `DATA.publications` has a `coverImage` field pointing to
`book-cover.jpg`. It shows as a small thumbnail on the collapsed card and a
larger image next to the abstract when expanded. Replace `book-cover.jpg`
with a new cover image any time (same filename), or point `coverImage` at
a different file.

### Update other contact info
Search `index.html` for `mailto:` and `tel:` if you need to change the raw
email/phone text shown anywhere outside the dynamic Contact grid.

---

## 🎨 Customizing the look

All colors are defined as CSS custom values used directly in `style.css`.
Key accent colors to change for a different theme:
- `#6395ff` — primary blue
- `#a78bfa` — secondary purple
- `#050b18` — background navy
- `#34d399` — success/green accent (used for "current" badges)

Most gradients use `linear-gradient(135deg, #6395ff, #a78bfa)` — find/replace
these two hex codes throughout `style.css` to re-theme the whole site.

---

## 🌐 Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Uses standard
ES6 JavaScript, CSS Grid/Flexbox, and `IntersectionObserver` — no build tools,
no frameworks, no dependencies beyond a Google Fonts import.
