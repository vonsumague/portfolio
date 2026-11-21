/* Renders the page from window.PORTFOLIO (assets/js/content.js) and wires up
   navigation, theme switching and small interactions. You normally don't need
   to edit this file — change content.js instead. */
(function () {
  'use strict';

  var data = window.PORTFOLIO;
  var main = document.getElementById('main');

  if (!data) {
    main.insertAdjacentHTML('beforeend',
      '<section class="section"><div class="container"><p class="load-error">The content file could not be loaded. ' +
      'Check <code>assets/js/content.js</code> for a missing comma or quote (open the browser console with F12 to see the exact line).</p></div></section>');
    return;
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  // *text* -> <em>text</em> (after escaping)
  function rich(s) { return esc(s).replace(/\*([^*]+)\*/g, '<em>$1</em>'); }
  function has(v) { return Array.isArray(v) ? v.length > 0 : !!(v && String(v).trim()); }
  function list(arr, fn) { return (arr || []).map(fn).join(''); }
  function chips(items, label) {
    if (!has(items)) return '';
    return '<ul class="chips"' + (label ? ' aria-label="' + esc(label) + '"' : '') + '>' +
      list(items, function (i) { return '<li>' + esc(i) + '</li>'; }) + '</ul>';
  }
  function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function ext(url) { return /^https?:\/\//i.test(url) ? ' target="_blank" rel="noopener"' : ''; }

  var p = data.profile || {};
  var sections = []; // { id, nav, html }
  var n = 0;
  function num() { n += 1; return (n < 10 ? '0' : '') + n; }

  function sectionShell(id, label, titleId, title, inner, extraClass) {
    return '<section class="section ' + (extraClass || '') + '" id="' + id + '" aria-labelledby="' + titleId + '">' +
      '<div class="container section-grid">' +
      '<div class="section-label reveal"><span class="mono">' + num() + ' / ' + esc(label) + '</span></div>' +
      '<div class="section-body">' +
      '<h2 id="' + titleId + '" class="section-title reveal">' + rich(title) + '</h2>' + inner +
      '</div></div></section>';
  }

  /* ---------- hero ---------- */
  var h = data.hero || {};
  var heroHTML =
    '<section class="hero" aria-labelledby="hero-title"><div class="container hero-grid">' +
      '<div class="hero-copy">' +
        (has(h.eyebrow) ? '<p class="eyebrow"><span class="dot" aria-hidden="true"></span>' + esc(h.eyebrow) + '</p>' : '') +
        '<h1 id="hero-title" class="hero-title"><span class="hero-name">' + esc(p.name) + '</span>' +
          '<span class="hero-line">' + rich(h.headline) + '</span></h1>' +
        (has(h.lede) ? '<p class="hero-lede">' + esc(h.lede) + '</p>' : '') +
        '<div class="hero-cta">' +
          (has(data.work && data.work.items) ? '<a class="btn btn-primary" href="#work">View my work</a>' : '') +
          (has(p.resume) ? '<a class="btn" href="' + esc(p.resume) + '" download>Download résumé</a>' : '') +
          '<a class="btn btn-ghost" href="#contact">Contact me</a>' +
        '</div>' +
      '</div>' +
      (has(data.record) ?
        '<aside class="record" aria-label="Profile summary">' +
          '<div class="record-head"><span class="mono">Profile record</span><span class="mono record-id">USR-0001</span></div>' +
          '<dl class="record-fields">' +
            list(data.record, function (r) { return '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }) +
          '</dl>' +
        '</aside>' : '') +
    '</div></section>';

  /* ---------- about ---------- */
  var a = data.about;
  if (a && (has(a.paragraphs) || has(a.facts))) {
    sections.push({ id: 'about', nav: 'About', html: sectionShell('about', 'About', 'about-title', a.title,
      '<div class="about-grid">' +
        '<div class="prose reveal">' + list(a.paragraphs, function (t) { return '<p>' + esc(t) + '</p>'; }) + '</div>' +
        (has(a.facts) ? '<ul class="facts reveal" aria-label="Quick facts">' +
          list(a.facts, function (f) {
            return '<li><span class="fact-num">' + esc(f.value) + '</span><span class="fact-text">' + esc(f.label) + '</span></li>';
          }) + '</ul>' : '') +
      '</div>') });
  }

  /* ---------- work ---------- */
  var w = data.work;
  if (w && has(w.items)) {
    var linkNames = { github: 'GitHub', demo: 'Live demo', caseStudy: 'Case study' };
    var cases = list(w.items, function (c, i) {
      var id = 'case-' + (i + 1);
      var links = c.links || {};
      var linkHTML = Object.keys(links).filter(function (k) { return has(links[k]); }).map(function (k) {
        return '<a class="case-link" href="' + esc(links[k]) + '"' + ext(links[k]) + '>' + esc(linkNames[k] || k) + ' <span aria-hidden="true">↗</span></a>';
      }).join('');
      return '<article class="case reveal" aria-labelledby="' + id + '-title">' +
        '<header class="case-head">' +
          '<span class="case-num" aria-hidden="true">' + (i < 9 ? '0' : '') + (i + 1) + '</span>' +
          '<div>' + (has(c.meta) ? '<p class="mono case-meta">' + esc(c.meta) + '</p>' : '') +
          '<h3 id="' + id + '-title" class="case-title">' + esc(c.title) + '</h3></div>' +
        '</header>' +
        (has(c.deliverables) ?
          '<div class="deliverables"><h4 class="case-sub">' + esc(c.deliverablesLabel || 'Delivered') + '</h4><ol>' +
          list(c.deliverables, function (d, k) {
            return '<li><span class="mono">SYS-' + (k < 9 ? '0' : '') + (k + 1) + '</span>' + esc(d) + '</li>';
          }) + '</ol></div>' : '') +
        (has(c.image) ? '<figure class="case-figure"><img src="' + esc(c.image) + '" alt="' + esc(c.imageAlt || '') + '" loading="lazy" decoding="async"></figure>' : '') +
        '<div class="case-body">' +
          '<div class="case-col">' +
            (has(c.context) ? '<h4 class="case-sub">Context</h4><p>' + esc(c.context) + '</p>' : '') +
            (has(c.role) ? '<h4 class="case-sub">My role</h4><p>' + esc(c.role) + '</p>' : '') +
          '</div>' +
          (has(c.points) ? '<div class="case-col"><h4 class="case-sub">' + esc(c.pointsLabel || 'What I did') + '</h4>' +
            '<ul class="ticks">' + list(c.points, function (t) { return '<li>' + esc(t) + '</li>'; }) + '</ul></div>' : '') +
        '</div>' +
        '<div class="case-foot">' + chips(c.stack, 'Technologies') +
          (linkHTML ? '<div class="case-links">' + linkHTML + '</div>' : '') + '</div>' +
      '</article>';
    });
    sections.push({ id: 'work', nav: 'Work', html: sectionShell('work', 'Selected work', 'work-title', w.title,
      (has(w.intro) ? '<p class="section-intro reveal">' + esc(w.intro) + '</p>' : '') +
      '<div class="cases">' + cases + '</div>') });
  }

  /* ---------- skills ---------- */
  var s = data.skills;
  if (s && has(s.groups)) {
    sections.push({ id: 'skills', nav: 'Skills', html: sectionShell('skills', 'Skills', 'skills-title', s.title,
      '<div class="skills-grid">' + list(s.groups, function (g) {
        return '<div class="skill-group' + (g.primary ? ' skill-group--primary' : '') + ' reveal">' +
          '<h3 class="skill-title">' + esc(g.name) + '</h3>' + chips(g.items) + '</div>';
      }) + '</div>') });
  }

  /* ---------- experience ---------- */
  var x = data.experience;
  if (x && has(x.jobs)) {
    sections.push({ id: 'experience', nav: 'Experience', html: sectionShell('experience', 'Experience', 'experience-title', x.title,
      '<ol class="timeline">' + list(x.jobs, function (j) {
        return '<li class="job reveal">' +
          '<div class="job-when mono">' + esc(j.when) + '</div>' +
          '<div class="job-main">' +
            '<h3 class="job-title">' + esc(j.title) + (has(j.tag) ? ' <span class="job-tag">' + esc(j.tag) + '</span>' : '') + '</h3>' +
            '<p class="job-org">' + esc(j.org) + (has(j.place) ? ' <span class="job-place">· ' + esc(j.place) + '</span>' : '') + '</p>' +
            (has(j.roles) ? '<ul class="job-roles">' + list(j.roles, function (r) {
              return '<li><strong>' + esc(r.title) + '</strong> <span class="mono">' + esc(r.when) + '</span></li>';
            }) + '</ul>' : '') +
            (has(j.points) ? '<ul class="job-points">' + list(j.points, function (t) { return '<li>' + esc(t) + '</li>'; }) + '</ul>' : '') +
          '</div></li>';
      }) + '</ol>') });
  }

  /* ---------- certifications + education ---------- */
  var c = data.certifications;
  var edu = data.education;
  if ((c && has(c.items)) || has(edu)) {
    var total = c && c.items ? c.items.length : 0;
    var certHTML = c && has(c.items) ? '<ol class="certs">' + list(c.items, function (it, i) {
      var idx = total - i;
      return '<li class="cert reveal">' +
        '<div class="cert-top">' +
          '<span class="mono cert-id">CERT-' + (idx < 10 ? '0' : '') + idx + (has(it.date) ? ' · ' + esc(it.date) : '') + '</span>' +
          (has(it.badge) ? '<img class="cert-badge" src="' + esc(it.badge) + '" alt="" width="64" height="64" loading="lazy" decoding="async">' : '') +
        '</div>' +
        '<h3 class="cert-name">' + esc(it.name) + '</h3>' +
        '<div class="cert-foot">' +
          (has(it.issuer) ? '<span class="cert-issuer">' + esc(it.issuer) + '</span>' : '') +
          (has(it.url) ? '<a class="cert-verify" href="' + esc(it.url) + '"' + ext(it.url) + '>Verify<span class="visually-hidden"> ' + esc(it.name) + '</span> <span aria-hidden="true">↗</span></a>' : '') +
        '</div>' +
      '</li>';
    }) + '</ol>' : '';
    if (c && has(c.more)) {
      certHTML += '<h3 class="sub-title reveal">' + esc(c.moreTitle || 'More credentials') + '</h3>' +
        '<ul class="badges">' + list(c.more, function (it) {
          var inner =
            (has(it.badge) ? '<img src="' + esc(it.badge) + '" alt="" width="44" height="44" loading="lazy" decoding="async">' : '') +
            '<span class="badge-text"><span class="badge-name">' + esc(it.name) + '</span>' +
            '<span class="badge-meta">' + esc([it.issuer, it.date].filter(has).join(' · ')) + '</span></span>' +
            (has(it.url) ? '<span class="badge-arrow" aria-hidden="true">↗</span>' : '');
          return '<li class="reveal">' + (has(it.url)
            ? '<a class="badge-item" href="' + esc(it.url) + '"' + ext(it.url) + '>' + inner + '</a>'
            : '<span class="badge-item">' + inner + '</span>') + '</li>';
        }) + '</ul>';
    }
    if (c && has(c.profileUrl)) {
      certHTML += '<p class="cert-profile reveal"><a href="' + esc(c.profileUrl) + '"' + ext(c.profileUrl) + '>See all badges on Credly <span aria-hidden="true">↗</span></a></p>';
    }
    var eduHTML = has(edu) ? '<h3 class="sub-title reveal" id="education">Education</h3><ul class="edu">' + list(edu, function (e) {
      return '<li class="edu-item reveal"><div class="edu-when mono">' + esc(e.when) + '</div><div>' +
        '<p class="edu-degree">' + esc(e.degree) + '</p>' +
        '<p class="edu-school">' + esc(e.school) + '</p>' +
        (has(e.honor) ? '<p class="edu-honor">' + esc(e.honor) + '</p>' : '') +
      '</div></li>';
    }) + '</ul>' : '';
    sections.push({ id: 'certifications', nav: 'Certifications', html: sectionShell('certifications', 'Credentials', 'cert-title',
      (c && c.title) || 'Credentials', certHTML + eduHTML) });
  }

  /* ---------- contact ---------- */
  var links = p.links || {};
  var contactItems = [];
  if (has(p.phone)) contactItems.push('<li><a href="tel:' + esc(p.phone) + '"><span class="mono">Phone</span>' + esc(p.phoneDisplay || p.phone) + '</a></li>');
  if (has(p.resume)) contactItems.push('<li><a href="' + esc(p.resume) + '" download><span class="mono">Résumé</span>Download PDF</a></li>');
  function social(url, label, name) {
    return '<li><a href="' + esc(url) + '" target="_blank" rel="noopener"><span class="mono">' + label + '</span><span>' + name + ' <span aria-hidden="true">↗</span></span></a></li>';
  }
  if (has(links.linkedin)) contactItems.push(social(links.linkedin, 'Connect', 'LinkedIn'));
  if (has(links.github)) contactItems.push(social(links.github, 'Code', 'GitHub'));
  if (has(links.credly)) contactItems.push(social(links.credly, 'Badges', 'Credly'));
  if (has(p.location)) contactItems.push('<li><span class="contact-static"><span class="mono">Based in</span>' + esc(p.location) + '</span></li>');

  var contactHTML =
    '<section class="section contact" id="contact" aria-labelledby="contact-title"><div class="container">' +
      '<p class="mono contact-label reveal">' + num() + ' / Contact</p>' +
      '<h2 id="contact-title" class="contact-title reveal">' + rich((data.contact && data.contact.title) || 'Get in touch.') + '</h2>' +
      (has(p.email) ?
        '<div class="contact-main reveal">' +
          '<a class="contact-email" href="mailto:' + esc(p.email) + '">' + esc(p.email) + '</a>' +
          '<button class="btn btn-small copy-btn" type="button" data-copy="' + esc(p.email) + '">Copy email</button>' +
          '<span class="copy-status" role="status" aria-live="polite"></span>' +
        '</div>' : '') +
      '<ul class="contact-links reveal">' + contactItems.join('') + '</ul>' +
    '</div></section>';
  sections.push({ id: 'contact', nav: 'Contact', html: '' });

  /* ---------- mount ---------- */
  main.insertAdjacentHTML('beforeend', heroHTML + sections.map(function (x) { return x.html; }).join('') + contactHTML);

  var navList = document.getElementById('nav-list');
  navList.innerHTML = list(sections, function (x) { return '<li><a href="#' + x.id + '">' + esc(x.nav) + '</a></li>'; });

  document.querySelectorAll('[data-name]').forEach(function (el) { el.textContent = p.name; });
  document.querySelectorAll('[data-initials]').forEach(function (el) { el.textContent = p.initials || ''; });
  document.querySelectorAll('[data-resume]').forEach(function (el) {
    if (has(p.resume)) el.setAttribute('href', p.resume); else el.hidden = true;
  });
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Honor a #hash in the URL now that the sections exist
  if (location.hash.length > 1) {
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView();
  }

  /* ---------- theme toggle ---------- */
  var root = document.documentElement;
  var themeBtn = document.querySelector('.theme-toggle');
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  function currentTheme() { return root.getAttribute('data-theme') || (mq.matches ? 'dark' : 'light'); }
  function syncThemeUI() {
    var t = currentTheme();
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    themeBtn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
    var meta = document.querySelectorAll('meta[name="theme-color"]');
    meta.forEach(function (m) { m.setAttribute('content', t === 'dark' ? '#0F1211' : '#F6F3EC'); });
  }
  themeBtn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncThemeUI();
  });
  if (mq.addEventListener) mq.addEventListener('change', syncThemeUI);
  syncThemeUI();

  /* ---------- mobile nav ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');
  function closeNav() {
    header.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
  navToggle.addEventListener('click', function () {
    var open = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navList.addEventListener('click', function (e) { if (e.target.closest('a')) closeNav(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('nav-open')) { closeNav(); navToggle.focus(); }
  });

  /* ---------- header border on scroll ---------- */
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
    // The last section is too short to reach the middle of the screen, so mark it at page end
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      var last = navList.querySelector('a[href="#contact"]');
      if (last) {
        navList.querySelectorAll('a').forEach(function (l) { l.removeAttribute('aria-current'); });
        last.setAttribute('aria-current', 'true');
      }
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- active nav link ---------- */
  if ('IntersectionObserver' in window) {
    var navLinks = {};
    navList.querySelectorAll('a').forEach(function (l) { navLinks[l.getAttribute('href').slice(1)] = l; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && navLinks[en.target.id]) {
          Object.keys(navLinks).forEach(function (k) { navLinks[k].removeAttribute('aria-current'); });
          navLinks[en.target.id].setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (x) { var el = document.getElementById(x.id); if (el) spy.observe(el); });

    /* ---------- reveal on scroll ---------- */
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      root.classList.add('reveal-ready');
      var rev = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-visible'); rev.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
      document.querySelectorAll('.reveal').forEach(function (el) { rev.observe(el); });
    }
  }

  /* ---------- copy email ---------- */
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    var status = btn.parentNode.querySelector('.copy-status');
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      function done(ok) {
        if (status) status.textContent = ok ? 'Copied to clipboard' : 'Press Ctrl+C to copy';
        btn.textContent = ok ? 'Copied ✓' : 'Copy email';
        setTimeout(function () { btn.textContent = 'Copy email'; if (status) status.textContent = ''; }, 2200);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      } else { done(false); }
    });
  });
})();
