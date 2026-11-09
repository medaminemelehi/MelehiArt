/* =========================================================
   Melehi Art — site script
   ========================================================= */

// Inlined gallery data (kept in sync with data.json so the site also works when opened as a static file)
//
// Painting: { id, image, technic, year, dimensions }   e.g. dimensions: "120 x 110 cm" (height x width)
// Ceramic:  { id, image, year, dimensions }            e.g. dimensions: "41 x 39 x 12.5 cm"
const siteData = {
  "home": {
    "paintingsCard": "assets/home/painting_overview.jpg",
    "ceramicsCard": "assets/home/ceramic_overview.JPG",
    "portrait": "assets/home/portrait_picture.png",
    "bookPoster": "assets/home/book_poster.png",
    "featured": ["painting-3", "painting-20", "painting-18", "painting-6", "painting-21", "painting-1"]
  },
  "paintings": [
    { "id": "painting-20", "image": "assets/paintings/IMG_1583 2.jpg", "technic": "Acrylic on canvas", "year": "2019", "dimensions": "120 x 110 cm" },
    { "id": "painting-4", "image": "assets/paintings/IMG_1172 2.jpg", "technic": "Acrylic on canvas", "year": "2015", "dimensions": "120 x 110 cm" },
    { "id": "painting-8", "image": "assets/paintings/IMG_1189 2.jpg", "technic": "Acrylic on canvas", "year": "2010", "dimensions": "93 x 56 cm" },
    { "id": "painting-9", "image": "assets/paintings/IMG_1191 2.jpg", "technic": "Acrylic on canvas", "year": "2012", "dimensions": "92 x 56 cm" },
    { "id": "painting-22", "image": "assets/paintings/catalogue_p06_x77.jpg", "technic": "Acrylic on canvas", "year": "2019", "dimensions": "140 x 120 cm" },
    { "id": "painting-1", "image": "assets/paintings/IMG_1034 2.jpg", "technic": "Acrylic on canvas", "year": "2016", "dimensions": "120 x 110 cm" },
    { "id": "painting-14", "image": "assets/paintings/IMG_1572 2.JPG", "technic": "Acrylic on canvas", "year": "2016", "dimensions": "136 x 81 cm" },
    { "id": "painting-23", "image": "assets/paintings/catalogue_p08_x83.jpg", "technic": "Acrylic on canvas", "year": "2020", "dimensions": "100 x 100 cm" },
    { "id": "painting-17", "image": "assets/paintings/IMG_1577 2.jpg", "technic": "Acrylic on canvas", "year": "2022", "dimensions": "93 x 72 cm" },
    { "id": "painting-24", "image": "assets/paintings/catalogue_p09_x87.jpg", "technic": "Acrylic on canvas", "year": "2022", "dimensions": "100 x 100 cm" },
    { "id": "painting-13", "image": "assets/paintings/IMG_1210 2.jpg", "technic": "Acrylic on canvas", "year": "2015", "dimensions": "89 x 59 cm" },
    { "id": "painting-21", "image": "assets/paintings/IMG_1584 2.jpg", "technic": "Acrylic on canvas", "year": "2019", "dimensions": "90 x 61 cm" },
    { "id": "painting-25", "image": "assets/paintings/catalogue_p10_x90.jpg", "technic": "Acrylic on canvas", "year": "2018", "dimensions": "140 x 120 cm" },
    { "id": "painting-11", "image": "assets/paintings/IMG_1198 2.jpg", "technic": "Acrylic on canvas", "year": "2010", "dimensions": "93 x 57 cm" },
    { "id": "painting-26", "image": "assets/paintings/catalogue_p11_x94.jpg", "technic": "Acrylic on canvas", "year": "2018", "dimensions": "140 x 120 cm" },
    { "id": "painting-2", "image": "assets/paintings/IMG_1040 2.jpg", "technic": "Acrylic on canvas", "year": "2014", "dimensions": "120 x 110 cm" },
    { "id": "painting-5", "image": "assets/paintings/IMG_1173 2.jpg", "technic": "Acrylic on canvas", "year": "2012", "dimensions": "92 x 56 cm" },
    { "id": "painting-27", "image": "assets/paintings/catalogue_p12_x97.jpg", "technic": "Acrylic on canvas", "year": "2022", "dimensions": "100 x 100 cm" },
    { "id": "painting-18", "image": "assets/paintings/IMG_1578 2.jpg", "technic": "Acrylic on canvas", "year": "2022", "dimensions": "92 x 72 cm" },
    { "id": "painting-6", "image": "assets/paintings/IMG_1183 2.jpg", "technic": "Acrylic on canvas", "year": "2022", "dimensions": "93 x 73 cm" },
    { "id": "painting-7", "image": "assets/paintings/IMG_1187 2.jpg", "technic": "Acrylic on canvas", "year": "2005", "dimensions": "92 x 54 cm" },
    { "id": "painting-10", "image": "assets/paintings/IMG_1194 2.jpg", "technic": "Acrylic on canvas", "year": "2013", "dimensions": "92 x 56 cm" },
    { "id": "painting-19", "image": "assets/paintings/IMG_1582 2.jpg", "technic": "Acrylic on canvas", "year": "1996", "dimensions": "92 x 57 cm" },
    { "id": "painting-3", "image": "assets/paintings/IMG_1049 2.jpg", "technic": "Acrylic on canvas", "year": "2014", "dimensions": "92 x 72 cm" },
    { "id": "painting-15", "image": "assets/paintings/IMG_1573 2.JPG", "technic": "Acrylic on canvas", "year": "2019", "dimensions": "100 x 100 cm" },
    { "id": "painting-16", "image": "assets/paintings/IMG_1576 2.JPG", "technic": "Acrylic on canvas", "year": "2018", "dimensions": "90 x 71 cm" },
    { "id": "painting-12", "image": "assets/paintings/IMG_1207 2.jpg", "technic": "Acrylic on canvas", "year": "2014", "dimensions": "100 x 120 cm" }
  ],
  "ceramics": [
    { "id": "ceramic-1", "image": "assets/ceramics/cutout/IMG_2811.webp", "year": "1990", "dimensions": "41 x 39 x 12.5 cm" },
    { "id": "ceramic-7", "image": "assets/ceramics/cutout/IMG_2810.webp", "year": "1986", "dimensions": "40 x 26 x 11 cm" },
    { "id": "ceramic-11", "image": "assets/ceramics/cutout/catalogue_p16_x113.webp", "year": "1999", "dimensions": "27 x 15 x 13 cm" },
    { "id": "ceramic-5", "image": "assets/ceramics/cutout/IMG_2822.webp", "year": "1999", "dimensions": "27 x 15 x 13 cm" },
    { "id": "ceramic-10", "image": "assets/ceramics/cutout/IMG_2854.webp", "year": "1995", "dimensions": "29 x 22 x 13 cm" },
    { "id": "ceramic-12", "image": "assets/ceramics/cutout/catalogue_p17_x116.webp", "year": "1995", "dimensions": "33 x 17 x 12 cm" },
    { "id": "ceramic-6", "image": "assets/ceramics/cutout/IMG_2846.webp", "year": "1990", "dimensions": "17.5 x 38 x 15.6 cm" },
    { "id": "ceramic-8", "image": "assets/ceramics/cutout/IMG_2848.webp", "year": "1990", "dimensions": "15.5 x 40 x 14 cm" },
    { "id": "ceramic-3", "image": "assets/ceramics/cutout/IMG_2814.webp", "year": "1985", "dimensions": "40 x 30 x 14.5 cm" },
    { "id": "ceramic-2", "image": "assets/ceramics/cutout/IMG_2812.webp", "year": "1987", "dimensions": "55 x 47 x 20 cm" },
    { "id": "ceramic-13", "image": "assets/ceramics/cutout/catalogue_p19_x126.webp", "year": "1986", "dimensions": "39 x 37 x 8 cm" },
    { "id": "ceramic-14", "image": "assets/ceramics/cutout/catalogue_p19_x127.webp", "year": "1986", "dimensions": "45 x 26 x 22 cm" },
    { "id": "ceramic-4", "image": "assets/ceramics/cutout/IMG_2816.webp", "year": "1987", "dimensions": "54.5 x 33 x 9 cm" },
    { "id": "ceramic-15", "image": "assets/ceramics/cutout/catalogue_p20_x135.webp", "year": "1990", "dimensions": "23.3 x 24 x 15.5 cm" },
    { "id": "ceramic-16", "image": "assets/ceramics/cutout/catalogue_p20_x136.webp", "year": "1989", "dimensions": "24 x 27 x 26 cm" },
    { "id": "ceramic-9", "image": "assets/ceramics/cutout/IMG_2849.webp", "year": "1999", "dimensions": "14 x 20 x 30 cm" }
  ]
};

/* ---------------- Image helpers ---------------- */
// Gallery images are served from web-sized copies built by tools/optimize-images.sh.
// If a copy is missing (e.g. a newly added image), the original file is used instead.
const webPath = (src, size) => src.replace(/^assets\//, `assets/web/${size}/`).replace(/\.png$/i, '.jpg');

function setImage(img, src, size) {
  if (!img || !src) return;
  img.onerror = () => { img.onerror = null; img.src = src; };
  img.src = webPath(src, size);
}

/* ---------------- Navigation ---------------- */
const PAGES = ['home', 'paintings', 'ceramics', 'biography', 'contact'];
// Pages whose top section is dark, so the nav starts transparent over it
const DARK_TOP = ['home', 'paintings', 'ceramics', 'biography'];
let currentPage = 'home';

function showPage(id, { push = true } = {}) {
  if (!PAGES.includes(id)) id = 'home';
  currentPage = id;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a =>
    a.classList.toggle('active', a.dataset.page === id));
  document.body.dataset.current = id;
  if (push && location.hash !== '#' + id) history.pushState(null, '', '#' + id);
  window.scrollTo({ top: 0, behavior: 'instant' });
  updateNav();
  revealOnScroll();
}

function updateNav() {
  const nav = document.getElementById('nav');
  const y = window.scrollY;
  nav.classList.toggle('is-clear', DARK_TOP.includes(currentPage) && y < 60);
  nav.classList.toggle('is-compact', y > 60);
}

function toggleMenu(force) {
  const links = document.getElementById('navLinks');
  const open = typeof force === 'boolean' ? force : !links.classList.contains('open');
  links.classList.toggle('open', open);
  document.querySelector('.hamburger').classList.toggle('open', open);
  document.getElementById('nav').classList.toggle('menu-open', open);
  document.body.classList.toggle('no-scroll', open);
}

function closeMenu() { toggleMenu(false); }

/* ---------------- Contact form (Formspree) ---------------- */
// Paste your Formspree form URL here (e.g. https://formspree.io/f/abcd1234). Safe to be public.
const FORMSPREE_URL = 'https://formspree.io/f/mjyyqnjy';

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  const btn = document.getElementById('cf-submit');
  const say = (msg, kind) => { status.textContent = msg; status.className = 'form-status ' + (kind || ''); };

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (form._gotcha.value) return;                       // honeypot tripped: silently drop
    const f = form.elements;
    if (!f.first_name.value.trim() || !f.message.value.trim()) return say('Please fill in your name and message.', 'error');
    if (!/^\S+@\S+\.\S+$/.test(f.email.value.trim())) return say('Please enter a valid email address.', 'error');
    if (Date.now() - (+localStorage.getItem('lastSend') || 0) < 60000) return say('Please wait a minute before sending another message.', 'error');
    if (FORMSPREE_URL.includes('YOUR_FORM_ID')) return say('The form is not configured yet.', 'error');

    btn.disabled = true; btn.textContent = 'Sending…'; say('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      localStorage.setItem('lastSend', Date.now());
      form.reset();
      say('Thank you — your message has been sent.', 'ok');
    } catch (err) {
      console.error(err);
      say('Sorry, something went wrong. Please try again or email directly.', 'error');
    } finally {
      btn.disabled = false; btn.textContent = 'Send Message';
    }
  });
}

// Any element with data-page="x" navigates to page x
document.addEventListener('click', e => {
  if (e.target.closest('[data-top]')) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const link = e.target.closest('[data-page]');
  if (!link) return;
  e.preventDefault();
  closeMenu();
  showPage(link.dataset.page);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('navLinks').classList.contains('open')) closeMenu();
});

window.addEventListener('popstate', () => showPage(location.hash.slice(1), { push: false }));

// Nav state + gentle hero parallax
let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    updateNav();
    if (currentPage === 'home' && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const y = Math.min(window.scrollY, window.innerHeight);
      document.querySelector('.hero-bg').style.setProperty('--parallax', `${y * 0.22}px`);
    }
    ticking = false;
  });
}, { passive: true });

/* ---------------- Reveal-on-scroll ---------------- */
const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); revealObserver.unobserve(en.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
  : null;

function revealOnScroll() {
  document.querySelectorAll('.page.active .reveal:not(.in)').forEach(el => {
    if (revealObserver) revealObserver.observe(el); else el.classList.add('in');
  });
}

/* ---------------- Galleries ---------------- */
const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Caption lines for an artwork: paintings show technic + year, ceramics show year; both show dimensions
function captionLines(item) {
  const main = [item.technic, item.year].filter(Boolean).join(' · ');
  return { main, dims: item.dimensions || '' };
}

const pad = n => String(n).padStart(2, '0');

function artCard(item, index, kind) {
  const { main, dims } = captionLines(item);
  const alt = `${kind === 'painting' ? 'Painting' : 'Ceramic'} by Mohamed Amine Melehi — ${main}`;
  return `
    <figure class="art-item reveal" id="${esc(item.id)}" style="--d:${(index % 3) * 0.1}s">
      <button class="art-frame" type="button" data-gallery="${kind}" data-index="${index}" aria-label="View full image: ${esc(alt)}">
        <img src="${esc(webPath(item.image, 'thumb'))}" data-fallback="${esc(item.image)}" alt="${esc(alt)}" loading="lazy" decoding="async">
        <span class="art-view" aria-hidden="true">View</span>
      </button>
      <figcaption>
        <span class="art-no">No. ${pad(index + 1)}</span>
        <span class="art-main">${esc(main)}</span>
        ${dims ? `<span class="art-dims">${esc(dims)}</span>` : '<span></span>'}
      </figcaption>
    </figure>`;
}

function renderGallery(gridId, items, kind) {
  const grid = document.getElementById(gridId);
  if (!grid || !items) return;
  grid.innerHTML = items.map((item, i) => artCard(item, i, kind)).join('');
}

function renderFeatured() {
  const grid = document.getElementById('featured-works');
  if (!grid) return;
  const ids = siteData.home.featured || [];
  grid.innerHTML = ids
    .map(id => siteData.paintings.findIndex(p => p.id === id))
    .filter(i => i >= 0)
    .map(i => artCard(siteData.paintings[i], i, 'painting'))
    .join('');
}

// Fall back to the original file if a web-sized copy is missing
document.addEventListener('error', e => {
  const img = e.target;
  if (img.tagName === 'IMG' && img.dataset.fallback && img.src.indexOf(img.dataset.fallback) === -1) {
    img.src = img.dataset.fallback;
    delete img.dataset.fallback;
  }
}, true);

/* ---------------- Lightbox ---------------- */
const lightbox = {
  el: null, img: null, caption: null, counter: null,
  items: [], index: 0, lastFocus: null,

  init() {
    this.el = document.getElementById('lightbox');
    this.img = document.getElementById('lightbox-img');
    this.caption = document.getElementById('lightbox-caption');
    this.counter = document.getElementById('lightbox-counter');

    document.addEventListener('click', e => {
      const trigger = e.target.closest('[data-gallery]');
      if (trigger) {
        const kind = trigger.dataset.gallery;
        this.open(kind === 'painting' ? siteData.paintings : siteData.ceramics, +trigger.dataset.index, trigger);
      }
    });

    this.el.addEventListener('click', e => {
      if (e.target.closest('.lb-close') || e.target === this.el || e.target.classList.contains('lb-stage')) this.close();
      else if (e.target.closest('.lb-prev')) this.step(-1);
      else if (e.target.closest('.lb-next')) this.step(1);
    });

    document.addEventListener('keydown', e => {
      if (!this.el.classList.contains('open')) return;
      if (e.key === 'Escape') this.close();
      else if (e.key === 'ArrowLeft') this.step(-1);
      else if (e.key === 'ArrowRight') this.step(1);
    });

    // Swipe on touch devices
    let x0 = null;
    this.el.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    this.el.addEventListener('touchend', e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) this.step(dx < 0 ? 1 : -1);
      x0 = null;
    });
  },

  open(items, index, trigger) {
    this.items = items;
    this.lastFocus = trigger;
    this.show(index);
    this.el.classList.add('open');
    this.el.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    this.el.querySelector('.lb-close').focus();
  },

  close() {
    this.el.classList.remove('open');
    this.el.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (this.lastFocus) this.lastFocus.focus({ preventScroll: true });
  },

  step(d) {
    this.show((this.index + d + this.items.length) % this.items.length);
  },

  show(index) {
    this.index = index;
    const item = this.items[index];
    const { main, dims } = captionLines(item);
    this.img.classList.remove('loaded');
    this.img.onload = () => this.img.classList.add('loaded');
    setImage(this.img, item.image, 'large');
    this.img.alt = main;
    this.caption.innerHTML = `<span class="art-no">No. ${pad(index + 1)}</span><span class="art-main">${esc(main)}</span>${dims ? `<span class="art-dims">${esc(dims)}</span>` : ''}`;
    this.counter.textContent = `${pad(index + 1)} / ${pad(this.items.length)}`;
    // Preload the neighbours so stepping feels instant
    [1, -1].forEach(d => {
      const n = this.items[(index + d + this.items.length) % this.items.length];
      if (n) new Image().src = webPath(n.image, 'large');
    });
  }
};

/* ---------------- Boot ---------------- */
function markReady() {
  document.documentElement.classList.add('is-ready');
  try { sessionStorage.setItem('melehi-seen', '1'); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  const data = siteData;

  setImage(document.getElementById('home-paintings-card'), data.home.paintingsCard, 'large');
  setImage(document.getElementById('home-ceramics-card'),  data.home.ceramicsCard,  'large');
  setImage(document.getElementById('home-portrait'),       data.home.portrait,      'large');
  setImage(document.getElementById('home-book-poster'),    data.home.bookPoster,    'large');

  renderGallery('paintings-grid', data.paintings, 'painting');
  renderGallery('ceramics-grid',  data.ceramics,  'ceramic');
  renderFeatured();

  const pc = document.getElementById('paintings-count');
  const cc = document.getElementById('ceramics-count');
  if (pc) pc.textContent = `${data.paintings.length} works`;
  if (cc) cc.textContent = `${data.ceramics.length} pieces`;

  lightbox.init();
  initContactForm();
  showPage(location.hash.slice(1) || 'home', { push: false });

  if (document.documentElement.classList.contains('no-loader')) {
    requestAnimationFrame(markReady);
  } else {
    // Hold the intro briefly, but never longer than ~2.2s
    const minDelay = new Promise(r => setTimeout(r, 1300));
    const loaded = new Promise(r => window.addEventListener('load', r, { once: true }));
    const cap = new Promise(r => setTimeout(r, 2200));
    Promise.race([Promise.all([minDelay, loaded]), cap]).then(markReady);
  }
});
