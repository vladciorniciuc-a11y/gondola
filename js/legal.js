(function(){
  const STORAGE_KEY = 'gondolaCookieConsentV1';
  const COOKIE_KEY = 'gondola_cookie_consent_v1';
  const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 zile

  function readCookie(name){
    const prefix = encodeURIComponent(name) + '=';
    const row = document.cookie.split('; ').find(item => item.startsWith(prefix));
    if (!row) return null;
    try { return JSON.parse(decodeURIComponent(row.slice(prefix.length))); } catch(_) { return null; }
  }

  function writeCookie(value){
    try {
      const secure = location.protocol === 'https:' ? '; Secure' : '';
      document.cookie = `${encodeURIComponent(COOKIE_KEY)}=${encodeURIComponent(JSON.stringify(value))}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
    } catch(_) {}
  }

  function readConsent(){
    let consent = null;
    try { consent = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); } catch(_) {}
    if (!consent) consent = readCookie(COOKIE_KEY);
    // Migrare/fallback: dacă alegerea există într-un singur loc, o păstrăm și în celălalt.
    if (consent) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(consent)); } catch(_) {}
      writeCookie(consent);
    }
    return consent;
  }

  function writeConsent(externalMedia){
    const value = {
      necessary: true,
      externalMedia: !!externalMedia,
      savedAt: new Date().toISOString()
    };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); } catch(_) {}
    writeCookie(value);
    applyConsent(value);
    hideBanner();
    hidePreferences();
  }

  function applyConsent(consent){
    const allowExternal = !!(consent && consent.externalMedia);
    document.querySelectorAll('iframe[data-consent-src]').forEach(frame => {
      const placeholder = frame.parentElement && frame.parentElement.querySelector('.external-media-placeholder');
      if (allowExternal) {
        if (!frame.getAttribute('src')) frame.setAttribute('src', frame.dataset.consentSrc);
        if (placeholder) placeholder.classList.add('is-hidden');
      } else {
        frame.removeAttribute('src');
        if (placeholder) placeholder.classList.remove('is-hidden');
      }
    });
  }

  function hideBanner(){ document.getElementById('cookie-banner')?.classList.remove('is-visible'); }
  function showBanner(){ document.getElementById('cookie-banner')?.classList.add('is-visible'); }
  function hidePreferences(){ document.getElementById('cookie-modal')?.classList.remove('is-visible'); }

  window.openCookiePreferences = function(){
    const consent = readConsent();
    const toggle = document.getElementById('cookie-external-toggle');
    if (toggle) toggle.checked = !!(consent && consent.externalMedia);
    document.getElementById('cookie-modal')?.classList.add('is-visible');
  };
  window.acceptExternalMediaAndLoad = function(){ writeConsent(true); };

  function injectCookieUI(){
    if (document.getElementById('cookie-banner')) return;
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.className = 'cookie-banner';
    banner.setAttribute('role','dialog');
    banner.setAttribute('aria-label','Preferințe de confidențialitate');
    banner.innerHTML = `
      <div class="cookie-banner-inner">
        <div class="cookie-copy">
          <strong>Confidențialitatea ta contează</strong>
          Site-ul nu folosește cookie-uri de analiză sau marketing. Reținem alegerea ta în browser, astfel încât mesajul să nu reapară la fiecare vizită, iar conținutul extern (de ex. Google Maps) se încarcă numai dacă îl accepți. <a href="politica-cookies.html">Detalii</a>.
        </div>
        <div class="cookie-actions">
          <button type="button" class="cookie-btn" id="cookie-necessary">Doar necesare</button>
          <button type="button" class="cookie-btn" id="cookie-settings">Preferințe</button>
          <button type="button" class="cookie-btn primary" id="cookie-accept">Acceptă toate</button>
        </div>
      </div>`;
    document.body.appendChild(banner);

    const modal = document.createElement('div');
    modal.id = 'cookie-modal';
    modal.className = 'cookie-modal';
    modal.setAttribute('role','dialog');
    modal.setAttribute('aria-modal','true');
    modal.setAttribute('aria-labelledby','cookie-modal-title');
    modal.innerHTML = `
      <div class="cookie-panel">
        <h2 id="cookie-modal-title">Preferințe cookies & conținut extern</h2>
        <p style="font-size:13px;color:#6b625b;margin-top:-4px">Poți modifica alegerea oricând din linkul „Setări cookies” din footer.</p>
        <div class="cookie-setting">
          <div><strong>Necesare</strong><p>Stocare locală și cookie propriu pentru reținerea preferinței de confidențialitate. Mereu active.</p></div>
          <input class="cookie-switch" type="checkbox" checked disabled aria-label="Necesare, mereu active">
        </div>
        <div class="cookie-setting">
          <div><strong>Conținut extern</strong><p>Permite încărcarea serviciilor integrate de la terți, în special Google Maps. Terții pot primi date tehnice precum adresa IP.</p></div>
          <input id="cookie-external-toggle" class="cookie-switch" type="checkbox" aria-label="Permite conținut extern">
        </div>
        <div class="cookie-panel-actions">
          <button type="button" class="cookie-btn" id="cookie-close">Anulează</button>
          <button type="button" class="cookie-btn primary" id="cookie-save">Salvează preferințele</button>
        </div>
      </div>`;
    document.body.appendChild(modal);

    document.getElementById('cookie-necessary').addEventListener('click',()=>writeConsent(false));
    document.getElementById('cookie-accept').addEventListener('click',()=>writeConsent(true));
    document.getElementById('cookie-settings').addEventListener('click',window.openCookiePreferences);
    document.getElementById('cookie-close').addEventListener('click',hidePreferences);
    document.getElementById('cookie-save').addEventListener('click',()=>writeConsent(document.getElementById('cookie-external-toggle').checked));
    modal.addEventListener('click',e=>{ if(e.target===modal) hidePreferences(); });
  }

  document.addEventListener('DOMContentLoaded', function(){
    injectCookieUI();
    const consent = readConsent();
    applyConsent(consent);
    if (!consent) showBanner();
  });
})();
