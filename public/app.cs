*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: #07080F; --surface: #0E0F1A; --surface2: #141528;
  --border: #1E2038; --border2: #252742; --text: #EEF0FF;
  --muted: #6B7099; --muted2: #9094B8; --accent: #4F8EF7;
  --green: #22C55E; --red: #EF4444; --yellow: #F59E0B;
  --radius: 14px; --radius-sm: 8px;
}
html { scroll-behavior: smooth; }
body { background: var(--bg); color: var(--text); font-family: 'Instrument Sans', system-ui, sans-serif; min-height: 100vh; overflow-x: hidden; }
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--surface); }
::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 10px; }
header { position: sticky; top: 0; z-index: 200; background: rgba(7,8,15,0.92); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); padding: 0 20px; }
.header-inner { max-width: 1240px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 58px; gap: 12px; }
.logo { display: flex; align-items: center; gap: 9px; font-family: 'Syne', sans-serif; font-weight: 800; font-size: 18px; color: var(--text); text-decoration: none; flex-shrink: 0; }
.logo-icon { width: 34px; height: 34px; border-radius: 9px; background: linear-gradient(135deg, #4F8EF7, #7C3AED); display: flex; align-items: center; justify-content: center; font-size: 16px; }
.logo span { color: #4F8EF7; }
.location-pill { display: flex; align-items: center; gap: 6px; background: var(--surface); border: 1px solid var(--border); border-radius: 40px; padding: 6px 13px; font-size: 12px; color: var(--muted2); cursor: pointer; transition: all 0.2s; white-space: nowrap; }
.location-pill:hover { border-color: var(--accent); color: var(--text); }
.location-pill .dot { width: 7px; height: 7px; background: var(--green); border-radius: 50%; }
.nav-tabs { display: flex; gap: 2px; }
.nav-tab { background: transparent; border: none; cursor: pointer; padding: 7px 12px; border-radius: var(--radius-sm); font-family: 'Instrument Sans', sans-serif; font-size: 12px; font-weight: 500; color: var(--muted); transition: all 0.2s; white-space: nowrap; }
.nav-tab:hover { background: var(--surface); color: var(--muted2); }
.nav-tab.active { background: var(--surface2); color: var(--text); }
.container { max-width: 1240px; margin: 0 auto; padding: 24px 20px; }
.page { display: none; }
.page.active { display: block; }
.card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
.card-header { padding: 14px 18px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
.card-title { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: var(--muted2); text-transform: uppercase; letter-spacing: 0.8px; }
.btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; border-radius: var(--radius-sm); font-family: 'Instrument Sans', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; border: none; transition: all 0.2s; white-space: nowrap; }
.btn-primary { background: linear-gradient(135deg, #4F8EF7, #7C3AED); color: #fff; box-shadow: 0 4px 20px rgba(79,142,247,0.3); }
.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 28px rgba(79,142,247,0.4); }
.btn-ghost { background: var(--surface2); border: 1px solid var(--border2); color: var(--muted2); }
.btn-ghost:hover { border-color: var(--accent); color: var(--text); }
.btn-sm { padding: 5px 11px; font-size: 12px; }
.badge { display: inline-flex; align-items: center; padding: 2px 8px; border-radius: 20px; font-size: 10px; font-weight: 700; letter-spacing: 0.4px; text-transform: uppercase; }
.badge-green { background: rgba(34,197,94,0.12); color: #22C55E; border: 1px solid rgba(34,197,94,0.25); }
.badge-blue { background: rgba(79,142,247,0.12); color: #4F8EF7; border: 1px solid rgba(79,142,247,0.25); }
.badge-purple { background: rgba(124,58,237,0.12); color: #A78BFA; border: 1px solid rgba(124,58,237,0.25); }
.input { background: var(--surface2); border: 1px solid var(--border2); border-radius: var(--radius-sm); padding: 10px 14px; color: var(--text); font-family: 'Instrument Sans', sans-serif; font-size: 14px; width: 100%; outline: none; transition: border-color 0.2s; }
.input:focus { border-color: var(--accent); }
.input::placeholder { color: var(--muted); }
.search-wrap { position: relative; }
.search-icon { position: absolute; left: 13px; top: 50%; transform: translateY(-50%); color: var(--muted); font-size: 14px; pointer-events: none; }
.search-wrap .input { padding-left: 38px; }
.suggestions { position: absolute; top: calc(100% + 5px); left: 0; right: 0; background: var(--surface2); border: 1px solid var(--border2); border-radius: var(--radius-sm); z-index: 100; max-height: 240px; overflow-y: auto; box-shadow: 0 12px 40px rgba(0,0,0,0.5); display: none; }
.suggestions.open { display: block; }
.suggestion-item { padding: 10px 14px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; transition: background 0.15s; font-size: 13px; }
.suggestion-item:hover { background: rgba(79,142,247,0.08); }
.canasta-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 10px; padding: 14px 18px; }
.canasta-item { display: flex; align-items: center; justify-content: space-between; background: var(--surface2); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 11px 13px; gap: 9px; }
.canasta-item-info { flex: 1; min-width: 0; }
.canasta-item-name { font-size: 13px; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.qty-ctrl { display: flex; align-items: center; gap: 7px; flex-shrink: 0; }
.qty-btn { width: 26px; height: 26px; border-radius: 6px; background: var(--surface); border: 1px solid var(--border2); color: var(--text); font-size: 15px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
.qty-btn:hover { background: var(--accent); border-color: var(--accent); }
.qty-val { font-size: 14px; font-weight: 700; width: 20px; text-align: center; }
.remove-btn { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 15px; transition: color 0.15s; }
.remove-btn:hover { color: var(--red); }
.alert { border-radius: var(--radius); padding: 14px 18px; display: flex; align-items: flex-start; gap: 12px; }
.alert-blue { background: rgba(79,142,247,0.07); border: 1px solid rgba(79,142,247,0.2); }
.alert-green { background: rgba(34,197,94,0.06); border: 1px solid rgba(34,197,94,0.2); }
.alert-icon { font-size: 20px; flex-shrink: 0; }
.alert-title { font-size: 13px; font-weight: 700; margin-bottom: 3px; }
.alert-body { font-size: 12px; color: var(--muted2); line-height: 1.6; }
.loading-overlay { position: fixed; inset: 0; background: rgba(7,8,15,0.88); backdrop-filter: blur(10px); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1000; gap: 14px; }
.loading-overlay.hidden { display: none; }
.loading-title { font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; }
.loading-steps { display: flex; flex-direction: column; gap: 7px; margin-top: 6px; width: 300px; }
.loading-step { display: flex; align-items: center; gap: 9px; font-size: 12px; color: var(--muted); padding: 7px 13px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); transition: all 0.3s; }
.loading-step.done { color: var(--green); border-color: rgba(34,197,94,0.3); background: rgba(34,197,94,0.05); }
.loading-step.active { color: var(--text); border-color: var(--accent); }
.step-icon { font-size: 13px; }
.empty-state { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 50px 20px; gap: 10px; text-align: center; }
.empty-icon { font-size: 44px; opacity: 0.5; }
.empty-title { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700; color: var(--muted2); }
.empty-sub { font-size: 13px; color: var(--muted); max-width: 280px; line-height: 1.6; }
.modal-bg { position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); z-index: 500; display: flex; align-items: center; justify-content: center; padding: 20px; }
.modal-bg.hidden { display: none; }
.modal { background: var(--surface); border: 1px solid var(--border2); border-radius: var(--radius); width: 100%; max-width: 420px; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,0.6); }
.modal-header { padding: 16px 18px; border-bottom: 1px solid var(--border); }
.modal-title { font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; }
.modal-body { padding: 18px; display: flex; flex-direction: column; gap: 13px; }
.modal-footer { padding: 13px 18px; border-top: 1px solid var(--border); display: flex; gap: 8px; justify-content: flex-end; }
.form-label { font-size: 11px; font-weight: 600; color: var(--muted2); margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px; }
.ai-panel { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
.ai-panel-header { background: linear-gradient(135deg, rgba(79,142,247,0.08), rgba(124,58,237,0.06)); padding: 13px 18px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 9px; }
.ai-thinking { display: flex; align-items: center; gap: 9px; padding: 18px; color: var(--muted2); font-size: 13px; }
.spinner { width: 17px; height: 17px; border: 2px solid var(--border2); border-top-color: var(--accent); border-radius: 50%; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.ai-content { padding: 16px 18px; font-size: 13px; line-height: 1.8; color: var(--muted2); }
.ai-content p { margin-bottom: 7px; }
.ai-content strong { color: var(--text); }
.section-title { font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
.product-result-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); margin-bottom: 14px; overflow: hidden; }
.product-result-header { padding: 13px 17px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 10px; background: var(--surface2); }
.product-result-name { font-size: 14px; font-weight: 700; color: var(--text); }
.product-result-qty { font-size: 11px; color: var(--muted); margin-top: 2px; }
.super-options { display: flex; flex-direction: column; }
.super-option { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 11px 17px; border-bottom: 1px solid var(--border); transition: background 0.15s; }
.super-option:last-child { border-bottom: none; }
.super-option:hover { background: rgba(255,255,255,0.02); }
.super-option.selected { background: rgba(34,197,94,0.05); border-left: 3px solid var(--green); }
.super-option-left { display: flex; align-items: flex-start; gap: 9px; flex: 1; min-width: 0; }
.super-badge { width: 28px; height: 28px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-weight: 800; font-size: 9px; color: #fff; flex-shrink: 0; }
.super-option-name { font-size: 13px; font-weight: 600; color: var(--text); }
.super-option-found { font-size: 10px; color: var(--muted); margin-top: 2px; font-style: italic; }
.super-option-link { font-size: 10px; color: var(--accent); text-decoration: none; display: block; margin-top: 2px; }
.super-option-right { text-align: right; flex-shrink: 0; }
.price-main { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 800; color: var(--text); }
.price-main.best-price { color: var(--green); }
.price-main.worst-price { color: var(--red); }
.price-regular { font-size: 10px; color: var(--muted); text-decoration: line-through; }
.days-row { display: grid; grid-template-columns: repeat(7, 1fr); gap: 7px; margin-bottom: 20px; }
.day-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 10px 6px; text-align: center; cursor: pointer; transition: all 0.2s; }
.day-card:hover { border-color: var(--border2); }
.day-card.today { border-color: rgba(79,142,247,0.5); background: rgba(79,142,247,0.05); }
.day-card.selected { border-color: var(--accent); background: rgba(79,142,247,0.1); }
.day-name { font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700; color: var(--muted2); }
.day-today-label { font-size: 8px; color: var(--accent); font-weight: 700; margin-top: 1px; }
.day-emoji { font-size: 18px; margin: 6px 0; }
.day-bank { font-size: 8px; color: var(--muted); line-height: 1.5; }
.promo-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 9px; }
.promo-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 13px 15px; display: flex; align-items: center; gap: 11px; }
.promo-logo { width: 40px; height: 40px; border-radius: 9px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 19px; }
.promo-super { font-size: 11px; color: var(--muted); }
.promo-desc { font-size: 14px; font-weight: 600; }
.promo-detail { font-size: 11px; color: var(--muted2); margin-top: 2px; }
.hist-list { display: flex; flex-direction: column; gap: 9px; padding: 14px 18px; }
.hist-item { background: var(--surface2); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 13px 15px; display: flex; align-items: center; justify-content: space-between; gap: 14px; }
.hist-date { font-size: 11px; color: var(--muted); margin-bottom: 3px; }
.hist-summary { font-size: 13px; font-weight: 600; }
.hist-detail { font-size: 11px; color: var(--muted2); margin-top: 2px; }
.flex { display: flex; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-8 { gap: 8px; }
.gap-12 { gap: 12px; }
.flex-wrap { flex-wrap: wrap; }
.mt-20 { margin-top: 20px; }
.mb-12 { margin-bottom: 12px; }
.mb-16 { margin-bottom: 16px; }
.mb-20 { margin-bottom: 20px; }
.mobile-tabs { display: none; }
@media (max-width: 768px) {
  .nav-tabs { display: none; }
  .mobile-tabs { position: fixed; bottom: 0; left: 0; right: 0; background: rgba(7,8,15,0.96); backdrop-filter: blur(20px); border-top: 1px solid var(--border); display: flex; z-index: 200; }
  .mobile-tab { flex: 1; display: flex; flex-direction: column; align-items: center; padding: 9px 3px; gap: 2px; cursor: pointer; font-size: 9px; color: var(--muted); background: none; border: none; font-family: 'Instrument Sans', sans-serif; transition: color 0.2s; }
  .mobile-tab.active { color: var(--accent); }
  .tab-icon { font-size: 17px; }
  .container { padding-bottom: 75px; }
  .days-row { grid-template-columns: repeat(4, 1fr); }
}