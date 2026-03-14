export function HomePageStyles() {
  return (
    <style>{`
      .f-play { font-family: var(--font-playfair), serif; }
      .f-corm { font-family: var(--font-cormorant), serif; }
      .f-dm { font-family: var(--font-dm-sans), sans-serif; }

      .nav-link { position: relative; }
      .nav-link::after { content:''; position:absolute; bottom:-3px; left:0; width:0; height:1.5px; background:#C9922A; transition:width .3s; }
      .nav-link:hover::after { width:100%; }

      .shimmer-bar {
        background: linear-gradient(90deg, #C9922A 0%, #E8B84B 45%, #C9922A 100%);
        background-size: 400px 100%;
        animation: shimmer 2.8s linear infinite;
      }
      @keyframes shimmer { 0% { background-position:-400px 0; } 100% { background-position:400px 0; } }

      @keyframes float-y { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
      .float-anim { animation: float-y 6s ease-in-out infinite; }

      @keyframes scroll-bounce { 0%,100%{transform:translateX(-50%) translateY(0);opacity:.4} 50%{transform:translateX(-50%) translateY(8px);opacity:.75} }
      .scroll-hint { animation: scroll-bounce 1.7s ease-in-out infinite; }

      @keyframes wa-bounce { 0%{transform:scale(0) rotate(-180deg);opacity:0} 60%{transform:scale(1.15) rotate(8deg);opacity:1} 80%{transform:scale(.93) rotate(-4deg)} 100%{transform:scale(1) rotate(0);opacity:1} }
      @keyframes wa-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.55)} 60%{box-shadow:0 0 0 14px rgba(37,211,102,0)} }
      @keyframes wa-ring { 0%,100%{transform:rotate(0)} 15%{transform:rotate(-12deg)} 30%{transform:rotate(12deg)} 45%{transform:rotate(-6deg)} 60%{transform:rotate(0)} }
      .wa-fab { animation: wa-bounce .7s cubic-bezier(.34,1.56,.64,1) 1.2s both, wa-pulse 2.4s ease-in-out 2s infinite; transition:transform .2s; }
      .wa-fab:hover { transform:scale(1.1); }
      .wa-fab:hover svg { animation: wa-ring .65s ease; }
      .wa-wrap:hover .wa-tip { opacity:1; transform:translateX(0); }

      .vision-card { position:relative; }
      .vision-card::before { content:''; position:absolute; top:0; right:0; width:90px; height:90px; border-bottom:1px solid rgba(201,146,42,.3); border-left:1px solid rgba(201,146,42,.3); }
      .vision-card::after { content:''; position:absolute; bottom:0; left:0; width:64px; height:64px; border-top:1px solid rgba(201,146,42,.2); border-right:1px solid rgba(201,146,42,.2); }

      .course-card { overflow:hidden; position:relative; }
      .course-card::after { content:''; position:absolute; inset:0; background:linear-gradient(120deg,transparent 35%,rgba(255,255,255,.07) 50%,transparent 65%); transform:translateX(-100%); transition:transform .55s; pointer-events:none; }
      .course-card:hover::after { transform:translateX(100%); }

      .prob-card { transition:border-color .3s,transform .3s,box-shadow .3s; }
      .prob-card:hover { box-shadow:-4px 0 18px rgba(201,146,42,.22); transform:translateX(4px); border-color:#6B1A1A; }

      .sol-row { transition:background .2s; }
      .sol-row:hover { background:#FDFAF6; }
      .sol-icon { transition:transform .25s; }
      .sol-row:hover .sol-icon { transform:scale(1.18); }

      .t-card::before { content:'"'; font-family:var(--font-cormorant), serif; font-size:6rem; color:#C9922A; opacity:.22; position:absolute; top:0; left:14px; line-height:1; pointer-events:none; }

      .ft-link { display:flex; align-items:center; gap:8px; }
      .ft-link::before { content:''; width:4px; height:4px; border-radius:50%; background:#C9922A; opacity:.6; flex-shrink:0; transition:opacity .2s; }
      .ft-link:hover::before { opacity:1; }

      .letter-rule { border:none; border-top:1.5px solid #C9922A; opacity:.35; }

      .contact-panel {
        border-left: 3px solid #C9922A;
        background: linear-gradient(180deg, #FFFCF8 0%, #FDF6EC 100%);
        box-shadow: 0 8px 24px rgba(74, 14, 14, 0.08);
      }
      .contact-row { display:flex; align-items:flex-start; gap:12px; padding:8px 0; }
      .contact-row + .contact-row { border-top:1px dashed rgba(201, 146, 42, 0.28); }
      .contact-ic {
        width:26px; height:26px; border-radius:999px; display:inline-flex;
        align-items:center; justify-content:center; background:#fff;
        border:1px solid rgba(201, 146, 42, 0.45); color:#6B1A1A;
        font-size:.82rem; line-height:1; flex-shrink:0; margin-top:1px;
      }
      .contact-link { color:#6B1A1A; font-weight:600; text-decoration:none; transition:color .2s ease, text-decoration-color .2s ease; }
      .contact-link:hover { color:#4A0E0E; text-decoration:underline; text-underline-offset:3px; }

      .team-card { transition:transform .3s, box-shadow .3s; }
      .team-card:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(74,14,14,.14); }
      .team-avatar { background: linear-gradient(135deg, #FDF6EC 0%, #f5e6d0 100%); }

      .vm-card { position:relative; overflow:hidden; }
      .vm-card::before { content:''; position:absolute; top:-30px; right:-30px; width:120px; height:120px; border-radius:50%; background:rgba(201,146,42,.08); pointer-events:none; }

      .cat-card { transition:transform .3s, box-shadow .3s, border-color .3s; }
      .cat-card:hover { transform:translateY(-4px); box-shadow:0 16px 48px rgba(74,14,14,.12); border-color:#C9922A; }

      .exam-pill { transition:background .25s, color .25s, transform .2s; cursor:default; }
      .exam-pill:hover { background:#6B1A1A; color:#E8B84B; transform:translateY(-2px); }

      .diff-badge { background: linear-gradient(135deg,#4A0E0E,#6B1A1A); }
    `}</style>
  );
}
