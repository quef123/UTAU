/* HerdMentality content advisory; consent lasts for the current tab session. */
(() => {
  'use strict';
  const key='herdmentality-content-warning-v1';
  const gate=document.getElementById('contentWarning');
  const accept=document.getElementById('contentWarningAccept');
  if(!gate||!accept)return;
  const other=[...document.body.children].filter(el=>el!==gate&&el.tagName!=='SCRIPT');
  let accepted=false;
  try{accepted=sessionStorage.getItem(key)==='accepted';}catch{}
  function unlock(){
    gate.hidden=true;gate.setAttribute('aria-hidden','true');
    document.body.classList.remove('content-warning-pending');
    other.forEach(el=>{el.inert=false;});
  }
  if(accepted){unlock();return;}
  other.forEach(el=>{el.inert=true;});
  const keepFocus=e=>{if(!gate.hidden&&!gate.contains(e.target))accept.focus({preventScroll:true});};
  document.addEventListener('focusin',keepFocus);
  gate.addEventListener('keydown',e=>{
    if(e.key==='Tab'){e.preventDefault();accept.focus();}
    if(e.key==='Escape')e.preventDefault();
  });
  accept.addEventListener('click',()=>{
    try{sessionStorage.setItem(key,'accepted');}catch{}
    document.removeEventListener('focusin',keepFocus);
    unlock();
    document.querySelector('.brand')?.focus({preventScroll:true});
  });
  accept.focus({preventScroll:true});
})();
