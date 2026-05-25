// ============================================================
// MANUEL BIBLIQUE CHRONOLOGIQUE - Logique de l'application
// ============================================================

(function () {
  'use strict';

  const D = window.BIBLE_DATA;

  // ============ HELPERS ============
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  function formatYear(y) {
    if (y < 0) return Math.abs(y) + ' av. J.-C.';
    if (y === 0) return '1 ap. J.-C.';
    return y + ' ap. J.-C.';
  }

  function allPeriods() {
    return [...D.periodes.AT, ...D.periodes.INTER, ...D.periodes.NT];
  }

  function getPeriod(id) {
    return allPeriods().find(p => p.id === id);
  }

  function getBook(id) {
    return D.livres[id];
  }

  function escapeHtml(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ============ THEME ============
  const themeToggle = $('#themeToggle');
  const initialTheme = localStorage.getItem('bible-theme') || 'light';
  document.documentElement.setAttribute('data-theme', initialTheme);
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('bible-theme', next);
  });

  // ============ NAVIGATION ============
  function setView(viewName) {
    $$('.view').forEach(v => v.classList.remove('active'));
    $$('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === viewName));
    const target = $('#view-' + viewName);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-view]');
    if (trigger) {
      setView(trigger.dataset.view);
    }
  });

  // ============ ACCUEIL ============
  function renderAccueil() {
    $('#statBooks').textContent = Object.keys(D.livres).length;
    $('#statPeriods').textContent = allPeriods().length;
    $('#statEvents').textContent = D.timeline.length;

    // Period cards (highlights)
    const container = $('#periodCards');
    container.innerHTML = '';
    allPeriods().forEach(p => {
      const card = document.createElement('div');
      card.className = 'period-card';
      card.style.setProperty('--period-color', p.couleur);
      const testament = p.testament === 'AT' ? 'Ancien Testament' : p.testament === 'NT' ? 'Nouveau Testament' : 'Intertestament';
      card.innerHTML = `
        <div class="period-tag">${escapeHtml(testament)}</div>
        <h3>${escapeHtml(p.nom)}</h3>
        <p>${escapeHtml(p.description)}</p>
        <span class="period-years">${formatYear(p.debut)} → ${formatYear(p.fin)}</span>
      `;
      card.addEventListener('click', () => {
        setView('periodes');
        setTimeout(() => {
          const block = document.getElementById('period-' + p.id);
          if (block) block.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      });
      container.appendChild(card);
    });
  }

  // ============ TIMELINE ============
  let currentTimelineFilter = 'tous';

  function renderTimeline() {
    const container = $('#timeline');
    container.innerHTML = '';

    let events = D.timeline.slice().sort((a, b) => a.annee - b.annee);

    if (currentTimelineFilter !== 'tous') {
      events = events.filter(e => {
        const p = getPeriod(e.periodeId);
        if (currentTimelineFilter === 'AT') return p && p.testament === 'AT';
        if (currentTimelineFilter === 'NT') return p && p.testament === 'NT';
        return e.type === currentTimelineFilter;
      });
    }

    events.forEach(e => {
      const p = getPeriod(e.periodeId);
      const item = document.createElement('div');
      item.className = 'timeline-item ' + (e.type || '');
      if (p) item.style.setProperty('--period-color', p.couleur);
      item.innerHTML = `
        <div class="timeline-year">${formatYear(e.annee)}</div>
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-title">${escapeHtml(e.titre)}</div>
          <div class="timeline-desc">${escapeHtml(e.description)}</div>
          ${p ? `<div class="timeline-period">${escapeHtml(p.nom)}</div>` : ''}
        </div>
      `;
      item.addEventListener('click', () => {
        if (p) {
          setView('periodes');
          setTimeout(() => {
            const block = document.getElementById('period-' + p.id);
            if (block) block.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 200);
        }
      });
      container.appendChild(item);
    });
  }

  $$('.timeline-filters .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      $$('.timeline-filters .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentTimelineFilter = chip.dataset.filter;
      renderTimeline();
    });
  });

  // ============ PERIODES ============
  function renderPeriodes() {
    const container = $('#periodList');
    container.innerHTML = '';

    const testaments = [
      { key: 'AT', label: 'Ancien Testament' },
      { key: 'INTER', label: 'Intertestamentaire' },
      { key: 'NT', label: 'Nouveau Testament' }
    ];

    testaments.forEach(t => {
      const divider = document.createElement('div');
      divider.className = 'testament-divider';
      divider.textContent = t.label;
      container.appendChild(divider);

      D.periodes[t.key].forEach(p => {
        const block = document.createElement('div');
        block.className = 'period-block';
        block.id = 'period-' + p.id;
        block.style.setProperty('--period-color', p.couleur);

        const booksHtml = (p.livres || []).map(bId => {
          const b = getBook(bId);
          if (!b) return '';
          return `<button class="book-pill" data-book="${bId}">${escapeHtml(b.nom)}</button>`;
        }).join('');

        block.innerHTML = `
          <h3>${escapeHtml(p.nom)}</h3>
          <div class="period-years">${formatYear(p.debut)} → ${formatYear(p.fin)}</div>
          <p class="period-desc">${escapeHtml(p.description)}</p>
          ${booksHtml ? `<div class="period-books">${booksHtml}</div>` : ''}
        `;

        block.querySelectorAll('.book-pill').forEach(pill => {
          pill.addEventListener('click', (e) => {
            e.stopPropagation();
            openBookDrawer(pill.dataset.book);
          });
        });

        container.appendChild(block);
      });
    });
  }

  // ============ LIVRES ============
  let currentBookFilter = 'tous';

  function renderLivres() {
    const container = $('#bookList');
    container.innerHTML = '';

    let books = Object.entries(D.livres).map(([id, b]) => ({ id, ...b }));

    if (currentBookFilter !== 'tous') {
      books = books.filter(b => {
        const p = getPeriod(b.periodeId);
        if (currentBookFilter === 'AT') return p && p.testament === 'AT';
        if (currentBookFilter === 'NT') return p && p.testament === 'NT';
        return b.categorie === currentBookFilter;
      });
    }

    books.sort((a, b) => (a.ordre || 0) - (b.ordre || 0));

    books.forEach(b => {
      const p = getPeriod(b.periodeId);
      const card = document.createElement('div');
      card.className = 'book-card';
      card.innerHTML = `
        <div class="book-card-header">
          <h4>${escapeHtml(b.nom)}</h4>
          <span class="book-card-cat">${escapeHtml(b.categorie || '')}</span>
        </div>
        <div class="book-card-period">${escapeHtml(b.periode)}</div>
        <p class="book-card-theme">${escapeHtml(b.theme)}</p>
        <div class="book-card-footer">
          <span>${p ? escapeHtml(p.nom) : ''}</span>
          ${b.nonHistorique ? '<span class="non-historique">non historique</span>' : ''}
        </div>
      `;
      card.addEventListener('click', () => openBookDrawer(b.id));
      container.appendChild(card);
    });
  }

  $$('.book-filters .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      $$('.book-filters .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentBookFilter = chip.dataset.bookfilter;
      renderLivres();
    });
  });

  // ============ DRAWER (BOOK DETAIL) ============
  const drawer = $('#bookDrawer');
  const drawerBackdrop = $('#drawerBackdrop');
  const drawerBody = $('#drawerBody');

  function openBookDrawer(bookId) {
    const b = getBook(bookId);
    if (!b) return;
    const p = getPeriod(b.periodeId);

    const sectionsHtml = (b.sections || []).map(s => `
      <div class="section-item">
        <div class="section-ref">${escapeHtml(s.ref || '')}</div>
        <h4>${escapeHtml(s.titre)}</h4>
        <p>${escapeHtml(s.contenu)}</p>
        ${s.verset ? `
          <blockquote class="verset">
            « ${escapeHtml(s.verset.texte)} »
            <cite>— ${escapeHtml(s.verset.ref)}</cite>
          </blockquote>
        ` : ''}
        ${s.saviezVous ? `<div class="section-saviez">${escapeHtml(s.saviezVous)}</div>` : ''}
      </div>
    `).join('');

    drawerBody.innerHTML = `
      <div class="book-detail">
        <div class="book-detail-cat">${escapeHtml(b.categorie || '')}</div>
        <h2>${escapeHtml(b.nom)}</h2>
        ${b.sens ? `<div class="sens">« ${escapeHtml(b.sens)} »</div>` : ''}

        <div class="book-meta">
          <div class="book-meta-item"><label>Auteur</label><span>${escapeHtml(b.auteur)}</span></div>
          <div class="book-meta-item"><label>Période</label><span>${escapeHtml(b.periode)}</span></div>
          <div class="book-meta-item"><label>Rédaction</label><span>${escapeHtml(b.redaction)}</span></div>
          ${p ? `<div class="book-meta-item"><label>Époque</label><span>${escapeHtml(p.nom)}</span></div>` : ''}
        </div>

        <div class="book-theme">${escapeHtml(b.theme)}</div>

        ${b.contexte ? `<div class="book-contexte"><strong>Contexte :</strong> ${escapeHtml(b.contexte)}</div>` : ''}

        ${b.nonHistorique ? '<p class="muted" style="margin-bottom:18px;font-style:italic;">⚠ Livre non strictement historique — la période indiquée est celle de l\'arrière-plan narratif.</p>' : ''}

        ${b.pdfPage ? `<button class="btn-view-page" data-pdf-page="${b.pdfPage}">📖 Voir la page ${b.pdfPage} du manuel</button>` : ''}

        <h3 class="section-title" style="margin:24px 0 16px;">Sections principales</h3>
        <div class="sections-list">${sectionsHtml}</div>
      </div>
    `;

    drawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    // bind "Voir la page" button
    const btn = drawerBody.querySelector('.btn-view-page');
    if (btn) {
      btn.addEventListener('click', () => {
        const pg = parseInt(btn.dataset.pdfPage, 10);
        openLightbox(pg);
      });
    }
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  $('#drawerClose').addEventListener('click', closeDrawer);
  drawerBackdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      const sr = $('#searchResults');
      if (sr) sr.classList.add('hidden');
    }
  });

  // ============ SEARCH ============
  const searchInput = $('#searchInput');
  const searchResults = $('#searchResults');

  function normalize(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  function buildSearchIndex() {
    const idx = [];
    // Livres
    Object.entries(D.livres).forEach(([id, b]) => {
      const text = normalize([b.nom, b.theme, b.auteur, b.categorie, b.contexte || '',
        ...(b.sections || []).flatMap(s => [s.titre, s.contenu, s.ref, s.saviezVous || '', s.verset ? s.verset.texte : ''])].join(' '));
      idx.push({ type: 'livre', id, text, label: b.nom, meta: b.categorie + ' • ' + b.periode, action: () => openBookDrawer(id) });
    });
    // Périodes
    allPeriods().forEach(p => {
      const text = normalize([p.nom, p.description].join(' '));
      idx.push({
        type: 'periode', id: p.id, text, label: p.nom,
        meta: 'Période • ' + formatYear(p.debut) + ' → ' + formatYear(p.fin),
        action: () => {
          setView('periodes');
          setTimeout(() => {
            const block = document.getElementById('period-' + p.id);
            if (block) block.scrollIntoView({ behavior: 'smooth' });
          }, 200);
        }
      });
    });
    // Timeline events
    D.timeline.forEach((e, i) => {
      const text = normalize([e.titre, e.description].join(' '));
      idx.push({
        type: 'evenement', id: 'tl-' + i, text, label: e.titre,
        meta: 'Événement • ' + formatYear(e.annee),
        action: () => {
          setView('timeline');
        }
      });
    });
    return idx;
  }

  const SEARCH_INDEX = buildSearchIndex();

  searchInput.addEventListener('input', (e) => {
    const q = normalize(e.target.value.trim());
    if (!q || q.length < 2) {
      searchResults.classList.add('hidden');
      return;
    }
    const matches = SEARCH_INDEX
      .filter(it => it.text.includes(q))
      .slice(0, 12);

    if (matches.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item"><div class="search-result-title">Aucun résultat</div></div>';
      searchResults.classList.remove('hidden');
      return;
    }

    searchResults.innerHTML = matches.map(m => `
      <div class="search-result-item" data-action="${m.type}-${m.id}">
        <div class="search-result-title">${escapeHtml(m.label)}</div>
        <div class="search-result-meta">${escapeHtml(m.meta)}</div>
      </div>
    `).join('');
    searchResults.classList.remove('hidden');

    $$('.search-result-item', searchResults).forEach((el, i) => {
      el.addEventListener('click', () => {
        matches[i].action();
        searchResults.classList.add('hidden');
        searchInput.value = '';
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
      searchResults.classList.add('hidden');
    }
  });

  // ============ PAGES (galerie + lightbox) ============
  const TOTAL_PAGES = 106;

  function pad3(n) { return String(n).padStart(3, '0'); }
  function thumbUrl(n) { return `assets/thumbs/thumb-${pad3(n)}.jpg`; }
  function pageUrl(n) { return `assets/pages/page-${pad3(n)}.jpg`; }

  function renderPagesGrid() {
    const grid = $('#pageGrid');
    grid.innerHTML = '';
    for (let i = 1; i <= TOTAL_PAGES; i++) {
      const el = document.createElement('div');
      el.className = 'page-thumb';
      el.innerHTML = `
        <img loading="lazy" src="${thumbUrl(i)}" alt="Page ${i}" />
        <div class="page-thumb-num">Page ${i}</div>
      `;
      el.addEventListener('click', () => openLightbox(i));
      grid.appendChild(el);
    }
  }

  let currentLightboxPage = 1;
  const lightbox = $('#pageLightbox');
  const lightboxImg = $('#lightboxImg');
  const lightboxCaption = $('#lightboxCaption');

  function openLightbox(pageNum) {
    currentLightboxPage = Math.max(1, Math.min(TOTAL_PAGES, pageNum));
    lightboxImg.src = pageUrl(currentLightboxPage);
    lightboxCaption.textContent = `Page ${currentLightboxPage} / ${TOTAL_PAGES}`;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navLightbox(delta) {
    const next = currentLightboxPage + delta;
    if (next < 1 || next > TOTAL_PAGES) return;
    openLightbox(next);
  }

  $('#lightboxClose').addEventListener('click', closeLightbox);
  $('#lightboxPrev').addEventListener('click', () => navLightbox(-1));
  $('#lightboxNext').addEventListener('click', () => navLightbox(1));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navLightbox(-1);
    if (e.key === 'ArrowRight') navLightbox(1);
  });

  $('#pageJumpBtn').addEventListener('click', () => {
    const v = parseInt($('#pageJump').value, 10);
    if (v >= 1 && v <= TOTAL_PAGES) openLightbox(v);
  });
  $('#pageJump').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') $('#pageJumpBtn').click();
  });

  // ============ SAVIEZ-VOUS ============
  function renderSaviez() {
    const container = $('#saviezList');
    container.innerHTML = '';

    // Collect all "saviez vous" from sections + main collection
    const all = [...(D.saviezVous || [])];

    Object.entries(D.livres).forEach(([id, b]) => {
      (b.sections || []).forEach(s => {
        if (s.saviezVous) {
          all.push({ sujet: b.nom + ' — ' + s.titre, texte: s.saviezVous, bookId: id });
        }
      });
    });

    all.forEach((sv, i) => {
      const card = document.createElement('div');
      card.className = 'saviez-card';
      card.innerHTML = `
        <div class="saviez-icon">✦</div>
        <h4>${escapeHtml(sv.sujet)}</h4>
        <p>${escapeHtml(sv.texte)}</p>
      `;
      if (sv.bookId) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => openBookDrawer(sv.bookId));
      }
      container.appendChild(card);
    });
  }

  // ============ INIT ============
  renderAccueil();
  renderTimeline();
  renderPeriodes();
  renderLivres();
  renderPagesGrid();
  renderSaviez();

  console.log('✦ Manuel Biblique Chronologique — application chargée.');
  console.log(`   ${Object.keys(D.livres).length} livres, ${allPeriods().length} périodes, ${D.timeline.length} événements.`);

})();
