/* =========================================================
   Melehi Art — site script
   ========================================================= */

// Inlined gallery data (kept in sync with data.json so the site also works when opened as a static file)
//
// Painting: { id, image, technic, year, dimensions }   e.g. dimensions: "100 x 120 cm"
// Ceramic:  { id, image, year, dimensions }            e.g. dimensions: "14 x 20 x 30 cm"
const siteData = {
  "home": {
    "paintingsCard": "assets/home/painting_overview.jpg",
    "ceramicsCard": "assets/home/ceramic_overview.JPG",
    "portrait": "assets/home/portrait_picture.png",
    "bookPoster": "assets/home/book_poster.png"
  },
  "paintings": [
    { "id": "painting-1",  "image": "assets/paintings/IMG_1034 2.jpg", "technic": "Acrylic on canvas", "year": "2014", "dimensions": "100 x 120 cm" },
    { "id": "painting-2",  "image": "assets/paintings/IMG_1040 2.jpg", "technic": "Acrylic on canvas", "year": "2015", "dimensions": "100 x 120 cm" },
    { "id": "painting-3",  "image": "assets/paintings/IMG_1049 2.jpg", "technic": "Acrylic on canvas", "year": "2016", "dimensions": "100 x 120 cm" },
    { "id": "painting-4",  "image": "assets/paintings/IMG_1172 2.jpg", "technic": "Acrylic on canvas", "year": "2014", "dimensions": "100 x 120 cm" },
    { "id": "painting-5",  "image": "assets/paintings/IMG_1173 2.jpg", "technic": "Acrylic on canvas", "year": "2012", "dimensions": "100 x 120 cm" },
    { "id": "painting-6",  "image": "assets/paintings/IMG_1183 2.jpg", "technic": "Acrylic on paper",  "year": "2010", "dimensions": "100 x 120 cm" },
    { "id": "painting-7",  "image": "assets/paintings/IMG_1187 2.jpg", "technic": "Acrylic on canvas", "year": "2013", "dimensions": "100 x 120 cm" },
    { "id": "painting-8",  "image": "assets/paintings/IMG_1189 2.jpg", "technic": "Acrylic on canvas", "year": "2011", "dimensions": "100 x 120 cm" },
    { "id": "painting-9",  "image": "assets/paintings/IMG_1191 2.jpg", "technic": "Acrylic on canvas", "year": "2010", "dimensions": "100 x 120 cm" },
    { "id": "painting-10", "image": "assets/paintings/IMG_1194 2.jpg", "technic": "Acrylic on canvas", "year": "2016", "dimensions": "100 x 120 cm" },
    { "id": "painting-11", "image": "assets/paintings/IMG_1198 2.jpg", "technic": "Acrylic on canvas", "year": "2015", "dimensions": "100 x 120 cm" },
    { "id": "painting-12", "image": "assets/paintings/IMG_1207 2.jpg", "technic": "Acrylic on canvas", "year": "2014", "dimensions": "100 x 120 cm" },
    { "id": "painting-13", "image": "assets/paintings/IMG_1210 2.jpg", "technic": "Acrylic on canvas", "year": "2013", "dimensions": "100 x 120 cm" },
    { "id": "painting-14", "image": "assets/paintings/IMG_1572 2.JPG", "technic": "Acrylic on canvas", "year": "2012", "dimensions": "100 x 120 cm" },
    { "id": "painting-15", "image": "assets/paintings/IMG_1573 2.JPG", "technic": "Acrylic on paper",  "year": "2011", "dimensions": "100 x 120 cm" },
    { "id": "painting-16", "image": "assets/paintings/IMG_1576 2.JPG", "technic": "Acrylic on canvas", "year": "2010", "dimensions": "100 x 120 cm" },
    { "id": "painting-17", "image": "assets/paintings/IMG_1577 2.jpg", "technic": "Acrylic on canvas", "year": "2015", "dimensions": "100 x 120 cm" },
    { "id": "painting-18", "image": "assets/paintings/IMG_1578 2.jpg", "technic": "Acrylic on canvas", "year": "2016", "dimensions": "100 x 120 cm" },
    { "id": "painting-19", "image": "assets/paintings/IMG_1582 2.jpg", "technic": "Acrylic on canvas", "year": "2013", "dimensions": "100 x 120 cm" },
    { "id": "painting-20", "image": "assets/paintings/IMG_1583 2.jpg", "technic": "Acrylic on canvas", "year": "2014", "dimensions": "100 x 120 cm" },
    { "id": "painting-21", "image": "assets/paintings/IMG_1584 2.jpg", "technic": "Acrylic on canvas", "year": "2012", "dimensions": "100 x 120 cm" }
  ],
  "ceramics": [
    { "id": "ceramic-1",  "image": "assets/ceramics/IMG_2811.jpg", "year": "2002",      "dimensions": "14 x 20 x 30 cm" },
    { "id": "ceramic-2",  "image": "assets/ceramics/IMG_2812.jpg", "year": "1998",      "dimensions": "14 x 20 x 30 cm" },
    { "id": "ceramic-3",  "image": "assets/ceramics/IMG_2814.jpg", "year": "1981–1999", "dimensions": "14 x 20 x 30 cm" },
    { "id": "ceramic-4",  "image": "assets/ceramics/IMG_2816.jpg", "year": "2002",      "dimensions": "14 x 20 x 30 cm" },
    { "id": "ceramic-5",  "image": "assets/ceramics/IMG_2822.jpg", "year": "1996",      "dimensions": "14 x 20 x 30 cm" },
    { "id": "ceramic-6",  "image": "assets/ceramics/IMG_2846.jpg", "year": "2000",      "dimensions": "14 x 20 x 30 cm" },
    { "id": "ceramic-7",  "image": "assets/ceramics/IMG_2810.jpg", "year": "1999",      "dimensions": "14 x 20 x 30 cm" },
    { "id": "ceramic-8",  "image": "assets/ceramics/IMG_2848.jpg", "year": "1999",      "dimensions": "14 x 20 x 30 cm" },
    { "id": "ceramic-9",  "image": "assets/ceramics/IMG_2849.jpg", "year": "1999",      "dimensions": "14 x 20 x 30 cm" },
    { "id": "ceramic-10", "image": "assets/ceramics/IMG_2854.jpg", "year": "1999",      "dimensions": "14 x 20 x 30 cm" }
  ]
};

/* ---------------- Navigation ---------------- */
const PAGES = ['home', 'paintings', 'ceramics', 'biography', 'contact'];

function showPage(id, { push = true } = {}) {
  if (!PAGES.includes(id)) id = 'home';
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a =>
    a.classList.toggle('active', a.dataset.page === id));
  if (push && location.hash !== '#' + id) history.pushState(null, '', '#' + id);
  window.scrollTo({ top: 0, behavior: 'instant' });
  revealOnScroll();
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
  document.querySelector('.hamburger').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
  document.querySelector('.hamburger').classList.remove('open');
}

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

/* ---------------- Reveal-on-scroll ---------------- */
const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); revealObserver.unobserve(en.target); }
      });
    }, { threshold: 0.08 })
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

function renderGallery(gridId, items, kind) {
  const grid = document.getElementById(gridId);
  if (!grid || !items) return;
  grid.innerHTML = items.map((item, i) => {
    const { main, dims } = captionLines(item);
    const alt = kind === 'painting'
      ? `Painting by Mohamed Amine Melehi — ${main}`
      : `Ceramic by Mohamed Amine Melehi — ${main}`;
    return `
      <figure class="art-item reveal" id="${esc(item.id)}">
        <button class="art-frame" type="button" data-gallery="${kind}" data-index="${i}" aria-label="View full image: ${esc(alt)}">
          <img src="${esc(item.image)}" alt="${esc(alt)}" loading="lazy">
          <span class="art-zoom" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>
          </span>
        </button>
        <figcaption>
          <span class="art-main">${esc(main)}</span>
          ${dims ? `<span class="art-dims">${esc(dims)}</span>` : ''}
        </figcaption>
      </figure>`;
  }).join('');
}

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
    if (this.lastFocus) this.lastFocus.focus();
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
    this.img.src = item.image;
    this.img.alt = main;
    this.caption.innerHTML = `<span class="art-main">${esc(main)}</span>${dims ? `<span class="art-dims">${esc(dims)}</span>` : ''}`;
    this.counter.textContent = `${index + 1} / ${this.items.length}`;
  }
};

/* ---------------- Boot ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  const data = siteData;

  const set = (id, src) => { const el = document.getElementById(id); if (el) el.src = src; };
  set('home-paintings-card', data.home.paintingsCard);
  set('home-ceramics-card',  data.home.ceramicsCard);
  set('home-portrait',       data.home.portrait);
  set('home-book-poster',    data.home.bookPoster);

  renderGallery('paintings-grid', data.paintings, 'painting');
  renderGallery('ceramics-grid',  data.ceramics,  'ceramic');

  const pc = document.getElementById('paintings-count');
  const cc = document.getElementById('ceramics-count');
  if (pc) pc.textContent = `${data.paintings.length} works`;
  if (cc) cc.textContent = `${data.ceramics.length} pieces`;

  lightbox.init();
  initContactForm();
  showPage(location.hash.slice(1) || 'home', { push: false });
});
