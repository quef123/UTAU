/* HerdMentality content advisory. Consent is remembered only for the current tab session. */
(() => {
  "use strict";
  const key = "herdmentality-content-warning-v1";
  const gate = document.getElementById("contentWarning");
  const accept = document.getElementById("contentWarningAccept");
  const shell = document.querySelector(".site-shell");
  const detail = document.getElementById("voiceModal");
  if (!gate || !accept) return;

  function unlock() {
    gate.hidden = true;
    gate.setAttribute("aria-hidden", "true");
    document.body.classList.remove("content-warning-pending");
    shell?.removeAttribute("inert");
    detail?.removeAttribute("inert");
    document.querySelector(".brand")?.focus({preventScroll:true});
  }

  let alreadyAccepted = false;
  try { alreadyAccepted = sessionStorage.getItem(key) === "accepted"; } catch (_) {}
  if (alreadyAccepted) { unlock(); return; }

  shell?.setAttribute("inert", "");
  detail?.setAttribute("inert", "");

  // The visible warning is the only available keyboard destination until OK.
  gate.addEventListener("keydown", event => {
    if (event.key === "Tab") {
      event.preventDefault();
      accept.focus();
    }
    if (event.key === "Escape") event.preventDefault();
  });
  document.addEventListener("focusin", event => {
    if (!gate.hidden && !gate.contains(event.target)) accept.focus();
  });

  accept.addEventListener("click", () => {
    try { sessionStorage.setItem(key, "accepted"); } catch (_) {}
    unlock();
  });
  accept.focus({preventScroll:true});
})();
