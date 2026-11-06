/* Footer easter egg — deliberately independent of the voicebank interface. */
(() => {
  'use strict';
  const device = document.getElementById('friendlinksDevice');
  const trigger = document.getElementById('friendlinksTrigger');
  const magazine = document.getElementById('friendlinksMagazine');
  const rounds = document.getElementById('friendlinksRounds');
  if (!device || !trigger || !magazine || !rounds || typeof friendLinks === 'undefined') return;

  let open = false;
  let closeTimer = null;
  let lastPointerType = 'mouse';
  let suppressFocusOpen = false;
  const CLOSE_DELAY = 200;
  const webURL = value => {
    try {
      const url = new URL(value, document.baseURI);
      return ['https:', 'http:'].includes(url.protocol) ? url.href : null;
    } catch { return null; }
  };

  function show(next) {
    clearTimeout(closeTimer);
    open = next;
    device.classList.toggle('is-open', next);
    trigger.setAttribute('aria-expanded', String(next));
    trigger.setAttribute('aria-label', next ? '隠れたリンクを閉じる' : '隠れたリンクを開く');
    magazine.setAttribute('aria-hidden', String(!next));
    rounds.querySelectorAll('.friendlinks-bullet').forEach(button => {
      button.tabIndex = next ? 0 : -1;
      if (!next) {
        button.classList.remove('is-selected');
        button.setAttribute('aria-pressed', 'false');
      }
    });
  }
  function scheduleClose() {
    clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      if (lastPointerType !== 'keyboard' || !device.contains(document.activeElement)) show(false);
    }, CLOSE_DELAY);
  }
  function openLink(url) {
    const safe = webURL(url);
    if (safe) window.open(safe, '_blank', 'noopener,noreferrer');
  }

  // All external sites are generated from the sole editable data list.
  const seen = new Set();
  (Array.isArray(friendLinks) ? friendLinks : []).forEach(item => {
    if (!item || !item.id || !item.name || !webURL(item.url) || seen.has(item.id)) return;
    seen.add(item.id);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'friendlinks-bullet';
    button.dataset.linkId = item.id;
    button.tabIndex = -1;
    button.setAttribute('aria-label', `${item.name} — キーボード・タッチ操作は1回、マウス操作はダブルクリックで開く`);
    button.setAttribute('aria-pressed', 'false');
    const image = document.createElement('img');
    image.src = item.icon || 'images/links/bullet.png';
    image.alt = '';
    image.draggable = false;
    const label = document.createElement('span');
    label.className = 'friendlinks-bullet-name';
    label.textContent = item.name;
    label.setAttribute('aria-hidden', 'true');
    button.append(image,label);
    rounds.appendChild(button);
    button.addEventListener('click', event => {
      event.stopPropagation();
      if (lastPointerType === 'touch' || lastPointerType === 'pen' || event.detail === 0) {
        openLink(item.url);
        return;
      }
      rounds.querySelectorAll('.friendlinks-bullet').forEach(el => {
        const selected = el === button;
        el.classList.toggle('is-selected', selected);
        el.setAttribute('aria-pressed', String(selected));
      });
    });
    button.addEventListener('dblclick', event => {
      event.stopPropagation();
      if (lastPointerType === 'mouse') openLink(item.url);
    });
  });

  // Pointer events allow a single hover zone; transition is handled by CSS.
  trigger.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse' || event.pointerType === 'pen') show(true);
  });
  device.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse' || event.pointerType === 'pen') scheduleClose();
  });
  device.addEventListener('pointerdown', event => { lastPointerType = event.pointerType; });
  trigger.addEventListener('click', event => {
    if (lastPointerType === 'mouse' && event.detail > 0) {
      show(true); // Mouse clicks do not close while pointer remains over the gun.
    } else {
      show(!open); // Touch and keyboard can toggle the device.
    }
  });
  device.addEventListener('focusin', event => {
    if (suppressFocusOpen) return;
    if (event.target.matches(':focus-visible')) {
      lastPointerType = 'keyboard';
      show(true);
    } else clearTimeout(closeTimer);
  });
  device.addEventListener('focusout', event => {
    if (!device.contains(event.relatedTarget)) scheduleClose();
  });
  device.addEventListener('keydown', event => {
    lastPointerType = 'keyboard';
    if (event.key === 'Escape' && open) {
      suppressFocusOpen = true;
      show(false);
      trigger.focus();
      suppressFocusOpen = false;
      event.stopPropagation();
    }
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { clearTimeout(closeTimer); show(false); }
  });
  show(false);
})();
