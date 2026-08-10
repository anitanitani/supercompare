
/* ── PRODUCT RESULT CARDS ── */
.product-result-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: 16px;
  overflow: hidden;
}
.product-result-header {
  padding: 14px 18px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: var(--surface2);
}
.product-result-name {
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
}
.product-result-qty {
  font-size: 11px;
  color: var(--muted);
  margin-top: 2px;
}
.super-options {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.super-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 18px;
  border-bottom: 1px solid var(--border);
  transition: background 0.15s;
}
.super-option:last-child { border-bottom: none; }
.super-option:hover { background: rgba(255,255,255,0.02); }
.super-option.selected { background: rgba(34,197,94,0.05); border-left: 3px solid var(--green); }
.super-option-left {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex: 1;
  min-width: 0;
}
.super-badge {
  width: 30px;
  height: 30px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 10px;
  color: #fff;
  flex-shrink: 0;
}
.super-option-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}
.super-option-found {
  font-size: 10px;
  color: var(--muted);
  margin-top: 2px;
  font-style: italic;
}
.super-option-link {
  font-size: 10px;
  color: var(--accent);
  text-decoration: none;
  display: block;
  margin-top: 2px;
}
.super-option-right {
  text-align: right;
  flex-shrink: 0;
}
.price-main {
  font-family: 'Syne', sans-serif;
  font-size: 16px;
  font-weight: 800;
  color: var(--text);
}
.price-main.best-price { color: var(--green); }
.price-main.worst-price { color: var(--red); }
