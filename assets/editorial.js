(() => {
  'use strict';
  // Manual stories: no automatic rotation, and all quotes remain readable without JS.
  document.querySelectorAll('.client-results').forEach(section => {
    const quotes = [...section.querySelectorAll('[data-result]')];
    const controls = section.querySelector('.result-controls');
    if (quotes.length < 2 || !controls) return;
    let current = 0;
    const show = () => {
      quotes.forEach((quote, index) => { quote.hidden = index !== current; });
      section.querySelector('[data-result-count]').textContent =
        String(current + 1).padStart(2, '0') + ' / ' + String(quotes.length).padStart(2, '0');
    };
    section.classList.add('results-enhanced');
    controls.hidden = false;
    section.querySelector('[data-result-prev]').addEventListener('click', () => {
      current = (current + quotes.length - 1) % quotes.length; show();
    });
    section.querySelector('[data-result-next]').addEventListener('click', () => {
      current = (current + 1) % quotes.length; show();
    });
    show();
  });

  // Load the third-party player only after an explicit play request.
  document.querySelectorAll('[data-youtube]').forEach(button => {
    const image = button.querySelector('img');
    if (image) image.addEventListener('error', () => { image.hidden = true; });
    button.addEventListener('click', () => {
      if (!/^[a-zA-Z0-9_-]{11}$/.test(button.dataset.youtube)) return;
      const iframe = document.createElement('iframe');
      iframe.title = button.dataset.filmTitle + ' — YouTube player';
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + button.dataset.youtube + '?autoplay=1&rel=0';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      button.replaceWith(iframe);
      iframe.focus();
    });
  });

  const filters = document.querySelector('.film-filters');
  if (filters) {
    const cards = [...document.querySelectorAll('[data-film-category]')];
    filters.hidden = new Set(cards.map(card => card.dataset.filmCategory)).size < 2;
    filters.querySelectorAll('[data-film-filter]').forEach(button => {
      button.addEventListener('click', () => {
        filters.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
        let count = 0;
        cards.forEach(card => {
          const show = button.dataset.filmFilter === 'all' || card.dataset.filmCategory === button.dataset.filmFilter;
          card.hidden = !show;
          if (show) count++;
          card.querySelectorAll('iframe').forEach(frame => {
            // Stop hidden players; returning to a category never starts audio.
            if (!show && !frame.dataset.stoppedSrc) {
              frame.dataset.stoppedSrc = frame.src.replace('autoplay=1', 'autoplay=0');
              frame.src = 'about:blank';
            } else if (show && frame.dataset.stoppedSrc) {
              frame.src = frame.dataset.stoppedSrc;
              delete frame.dataset.stoppedSrc;
            }
          });
        });
        document.querySelector('#film-count').textContent = count + (count === 1 ? ' film' : ' films');
      });
    });
  }

  // Optional future native opening film. The still is the default until supplied.
  const opening = document.querySelector('#opening-film');
  const toggle = document.querySelector('.film-toggle');
  if (opening && toggle) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let manuallyPaused = false;
    const load = () => {
      const sources = [...opening.querySelectorAll('source[data-src]')];
      if (sources.length) { sources.forEach(source => { source.src = source.dataset.src; source.removeAttribute('data-src'); }); opening.load(); }
    };
    const play = async () => {
      load();
      try { await opening.play(); } catch { toggle.textContent = 'Play background film'; }
    };
    opening.addEventListener('play', () => { toggle.textContent = 'Pause background film'; });
    opening.addEventListener('loadeddata', () => { opening.classList.add('is-ready'); });
    opening.addEventListener('pause', () => { toggle.textContent = 'Play background film'; });
    opening.addEventListener('error', () => { opening.hidden = true; toggle.hidden = true; });
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      if (opening.paused) { manuallyPaused = false; play(); }
      else { manuallyPaused = true; opening.pause(); }
    });
    reduceMotion.addEventListener('change', () => { if (reduceMotion.matches) opening.pause(); });
    document.addEventListener('visibilitychange', () => { if (document.hidden) opening.pause(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        if (!entries[0].isIntersecting) opening.pause();
        else if (!manuallyPaused && !reduceMotion.matches && !navigator.connection?.saveData) play();
      }).observe(opening);
    }
  }
})();
