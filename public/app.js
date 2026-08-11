// ══════════════════════════════════════════════════════════════
// SUPERCOMPARE — app.js
// ══════════════════════════════════════════════════════════════

const SUPERMARKETS = [
  { id: 'carrefour', name: 'Carrefour',    short: 'C',  color: '#003B8E' },
  { id: 'jumbo',     name: 'Jumbo',        short: 'J',  color: '#00873D' },
  { id: 'chango',    name: 'Chango +',     short: 'CH', color: '#FF6B00' },
  { id: 'anonima',   name: 'La Anónima',  short: 'A',  color: '#C8102E' },
  { id: 'maxi',      name: 'Maxi Consumo',short: 'M',  color: '#6B21A8' },
  { id: 'coope',     name: 'La Coope',    short: 'CO', color: '#0D9488' },
];

const PROMOTIONS = {
  0: [
    { supermercado:'La Coope',    emoji:'🏪', banco_billetera:'Socios La Coope', desc:'5% descuento',  detail:'Presentando credencial de socio', color:'#0D9488' },
    { supermercado:'Carrefour',   emoji:'🔵', banco_billetera:'Mercado Pago',    desc:'10% reintegro', detail:'Hasta $3.000 de reintegro',       color:'#003B8E' },
  ],
  1: [
    { supermercado:'Carrefour',   emoji:'🔵', banco_billetera:'Naranja X',       desc:'15% descuento', detail:'En compras desde $10.000',  color:'#003B8E' },
    { supermercado:'Jumbo',       emoji:'🟢', banco_billetera:'Galicia',         desc:'10% descuento', detail:'Tarjetas Visa y Mastercard', color:'#00873D' },
  ],
  2: [
    { supermercado:'Jumbo',       emoji:'🟢', banco_billetera:'BBVA',            desc:'10% descuento', detail:'Débito y crédito',           color:'#00873D' },
    { supermercado:'La Anónima', emoji:'🔴', banco_billetera:'Santander',       desc:'15% descuento', detail:'Tarjetas Select',            color:'#C8102E' },
    { supermercado:'Maxi Consumo',emoji:'🟣', banco_billetera:'Personal Pay',   desc:'12% descuento', detail:'Billetera virtual',          color:'#6B21A8' },
  ],
  3: [
    { supermercado:'Carrefour',   emoji:'🔵', banco_billetera:'Mercado Pago',    desc:'10% reintegro', detail:'Hasta $3.000 de reintegro',  color:'#003B8E' },
    { supermercado:'Maxi Consumo',emoji:'🟣', banco_billetera:'Uala',           desc:'18% descuento', detail:'Pago con QR Uala, sin tope', color:'#6B21A8' },
    { supermercado:'Jumbo',       emoji:'🟢', banco_billetera:'BBVA',            desc:'10% descuento', detail:'Débito y crédito',           color:'#00873D' },
    { supermercado:'Chango +',    emoji:'🟠', banco_billetera:'HSBC',            desc:'12% descuento', detail:'Tarjetas de crédito Visa',   color:'#FF6B00' },
  ],
  4: [
    { supermercado:'Carrefour',   emoji:'🔵', banco_billetera:'Naranja X',       desc:'15% descuento', detail:'En compras desde $10.000',   color:'#003B8E' },
    { supermercado:'Chango +',    emoji:'🟠', banco_billetera:'Galicia',         desc:'10% descuento', detail:'Tarjetas Visa y Mastercard',  color:'#FF6B00' },
    { supermercado:'La Anónima', emoji:'🔴', banco_billetera:'Macro',           desc:'10% descuento', detail:'Tarjetas Mastercard',         color:'#C8102E' },
  ],
  5: [
    { supermercado:'Jumbo',       emoji:'🟢', banco_billetera:'Galicia',         desc:'10% descuento', detail:'Tarjetas Visa y Mastercard', color:'#00873D' },
    { supermercado:'Carrefour',   emoji:'🔵', banco_billetera:'Nación',          desc:'10% descuento', detail:'Tarjetas de débito Visa',    color:'#003B8E' },
    { supermercado:'La Coope',    emoji:'🏪', banco_billetera:'Socios La Coope', desc:'8% descuento',  detail:'Viernes de socios',          color:'#0D9488' },
  ],
  6: [
    { supermercado:'Maxi Consumo',emoji:'🟣', banco_billetera:'Personal Pay',   desc:'12% descuento', detail:'Billetera virtual',          color:'#6B21A8' },
    { supermercado:'La Anónima', emoji:'🔴', banco_billetera:'Macro',           desc:'10% descuento', detail:'Tarjetas Mastercard',        color:'#C8102E' },
    { supermercado:'Chango +',    emoji:'🟠', banco_billetera:'Mercado Pago',    desc:'8% reintegro',  detail:'Pago con QR',               color:'#FF6B00' },
  ],
};

const PAYMENT_OPTIONS = [
  'Naranja X','BBVA','Galicia','Santander','Macro','Nación',
  'HSBC','Mercado Pago','Uala','Personal Pay','Socios La Coope','Brubank'
];

// ══════════════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════════════
let state = {
  canasta: JSON.parse(localStorage.getItem('sc_canasta') || '[]'),
  paymentMethods: JSON.parse(localStorage.getItem('sc_payments') || '[]'),
  historial: JSON.parse(localStorage.getItem('sc_historial') || '[]'),
  location: localStorage.getItem('sc_location') || '',
  // carrito: { slug -> { supermarketId, item } }
  carrito: JSON.parse(localStorage.getItem('sc_carrito') || '{}'),
  lastResults: null,
};

function saveState() {
  localStorage.setItem('sc_canasta', JSON.stringify(state.canasta));
  localStorage.setItem('sc_payments', JSON.stringify(state.paymentMethods));
  localStorage.setItem('sc_historial', JSON.stringify(state.historial));
  localStorage.setItem('sc_location', state.location);
  localStorage.setItem('sc_carrito', JSON.stringify(state.carrito));
}

function formatARS(n) {
  if (!n && n !== 0) return '—';
  return '$' + Math.round(n).toLocaleString('es-AR');
}

function getDayName(d) {
  return ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'][d];
}
function getDayShort(d) {
  return ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'][d];
}
function getDayEmoji(d) {
  return ['☀️','🌙','🌤️','🌊','🌿','🎉','🌟'][d];
}
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#141528;border:1px solid #252742;color:#EEF0FF;padding:10px 18px;border-radius:30px;font-size:13px;font-weight:500;z-index:2000;box-shadow:0 8px 30px rgba(0,0,0,0.4);transition:opacity 0.3s;white-space:nowrap;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 2500);
}

// ══════════════════════════════════════════════════════════════
// NAVEGACIÓN
// ══════════════════════════════════════════════════════════════
window.switchTab = function(tabId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + tabId).classList.add('active');
  document.querySelectorAll('.nav-tab,.mobile-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('[data-tab="' + tabId + '"]').forEach(b => b.classList.add('active'));
  if (tabId === 'canasta') renderCanastaFull();
  if (tabId === 'promos') renderPromos();
  if (tabId === 'historial') renderHistorial();
  if (tabId === 'carrito') renderCarrito();
};

// ══════════════════════════════════════════════════════════════
// BÚSQUEDA LIBRE
// ══════════════════════════════════════════════════════════════
function buildSuggestionHTML(val, onclickFn) {
  return `
    <div class="suggestion-item" onclick="${onclickFn}('${val.replace(/'/g, "\\'").replace(/"/g, '&quot;')}')">
      <div>
        <div style="font-size:13px;font-weight:600;">🔍 Buscar "<em>${val}</em>" en supermercados</div>
        <div style="font-size:11px;color:var(--muted);">Tocá para agregar a tu canasta</div>
      </div>
      <span class="badge badge-blue">Agregar</span>
    </div>`;
}

window.handleSearch = function(val) {
  const el = document.getElementById('suggestions');
  if (!val || val.trim().length < 2) { el.classList.remove('open'); return; }
  el.innerHTML = buildSuggestionHTML(val.trim(), 'addProductoLibre');
  el.classList.add('open');
};

window.handleSearchCanasta = function(val) {
  const el = document.getElementById('suggestions-canasta');
  if (!val || val.trim().length < 2) { el.classList.remove('open'); return; }
  el.innerHTML = buildSuggestionHTML(val.trim(), 'addProductoLibreCanasta');
  el.classList.add('open');
};

window.hideSuggestions = function() {
  const el = document.getElementById('suggestions');
  if (el) el.classList.remove('open');
};
window.hideSuggestionsCanasta = function() {
  const el = document.getElementById('suggestions-canasta');
  if (el) el.classList.remove('open');
};

function addToCanasta(nombre) {
  const nombreLimpio = nombre.trim();
  if (!nombreLimpio) return false;
  const idx = state.canasta.findIndex(i => i.nombre.toLowerCase() === nombreLimpio.toLowerCase());
  if (idx >= 0) { state.canasta[idx].qty++; }
  else { state.canasta.push({ nombre: nombreLimpio, qty: 1 }); }
  saveState();
  updateCanastaCount();
  return true;
}

window.addProductoLibre = function(nombre) {
  if (addToCanasta(nombre)) {
    document.getElementById('quickSearch').value = '';
    window.hideSuggestions();
    renderCanastaPreview();
    showToast('✅ "' + nombre + '" agregado');
  }
};

window.addProductoLibreCanasta = function(nombre) {
  if (addToCanasta(nombre)) {
    document.getElementById('canastaSearch').value = '';
    window.hideSuggestionsCanasta();
    renderCanastaFull();
    showToast('✅ "' + nombre + '" agregado');
  }
};

// ══════════════════════════════════════════════════════════════
// CANASTA
// ══════════════════════════════════════════════════════════════
window.updateQty = function(idx, delta) {
  if (!state.canasta[idx]) return;
  state.canasta[idx].qty += delta;
  if (state.canasta[idx].qty <= 0) state.canasta.splice(idx, 1);
  saveState();
  renderCanastaPreview();
  renderCanastaFull();
  updateCanastaCount();
};

window.removeProduct = function(idx) {
  state.canasta.splice(idx, 1);
  saveState();
  renderCanastaPreview();
  renderCanastaFull();
  updateCanastaCount();
};

window.clearCanasta = function() {
  if (!state.canasta.length) return;
  if (!confirm('¿Vaciar la canasta?')) return;
  state.canasta = [];
  saveState();
  renderCanastaPreview();
  renderCanastaFull();
  updateCanastaCount();
  document.getElementById('resultsSection').style.display = 'none';
};

function updateCanastaCount() {
  const count = state.canasta.length;
  document.getElementById('canastaCount').textContent = count + ' producto' + (count !== 1 ? 's' : '');
  const ct = document.getElementById('canastaTotal');
  if (ct) ct.textContent = count;
}

function itemCard(item, idx) {
  return `<div class="canasta-item">
    <div class="canasta-item-info">
      <div class="canasta-item-name">${item.nombre}</div>
    </div>
    <div class="qty-ctrl">
      <button class="qty-btn" onclick="updateQty(${idx},-1)">−</button>
      <span class="qty-val">${item.qty}</span>
      <button class="qty-btn" onclick="updateQty(${idx},1)">+</button>
    </div>
    <button class="remove-btn" onclick="removeProduct(${idx})">✕</button>
  </div>`;
}

function renderCanastaPreview() {
  const el = document.getElementById('canastaPreview');
  if (!state.canasta.length) {
    el.innerHTML = '<div class="empty-state" style="padding:40px 20px;"><div class="empty-icon">🧺</div><div class="empty-title">Canasta vacía</div><div class="empty-sub">Escribí cualquier producto arriba para agregar.</div></div>';
    return;
  }
  el.innerHTML = '<div class="canasta-grid">' + state.canasta.map(itemCard).join('') + '</div>';
}

function renderCanastaFull() {
  const el = document.getElementById('canastaFullList');
  const ct = document.getElementById('canastaTotal');
  if (ct) ct.textContent = state.canasta.length;
  if (!state.canasta.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">🛒</div><div class="empty-title">Tu canasta está vacía</div><div class="empty-sub">Escribí cualquier producto arriba para agregar.</div></div>';
    return;
  }
  el.innerHTML = '<div class="canasta-grid">' + state.canasta.map(itemCard).join('') + '</div>';
}

// ══════════════════════════════════════════════════════════════
// COMPARACIÓN
// ══════════════════════════════════════════════════════════════
window.runComparison = async function() {
  if (!state.canasta.length) { showToast('⚠️ Agregá al menos un producto'); return; }

  // Reset loading
  document.getElementById('loadingOverlay').classList.remove('hidden');
  SUPERMARKETS.forEach(s => {
    const el = document.getElementById('step-' + s.id);
    if (el) {
      el.classList.remove('done','active');
      el.querySelector('.step-icon').textContent =
        {carrefour:'🔵',jumbo:'🟢',chango:'🟠',anonima:'🔴',maxi:'🟣',coope:'🩵'}[s.id];
    }
  });
  const aiStep = document.getElementById('step-ai');
  if (aiStep) { aiStep.classList.remove('done','active'); aiStep.querySelector('.step-icon').textContent = '🤖'; }

  let realResults = null;
  let scraperErrors = {};

  try {
    SUPERMARKETS.forEach(s => {
      const el = document.getElementById('step-' + s.id);
      if (el) el.classList.add('active');
    });

    const res = await fetch('/api/scraper/all', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        products: state.canasta.map((item, idx) => ({
          slug: 'p' + idx,
          nombre: item.nombre,
          busqueda: item.nombre,
        }))
      })
    });

    const data = await res.json();
    realResults = data.results || {};
    scraperErrors = data.errors || {};

    SUPERMARKETS.forEach(s => {
      const el = document.getElementById('step-' + s.id);
      if (el) {
        el.classList.remove('active');
        el.classList.add('done');
        el.querySelector('.step-icon').textContent = scraperErrors[s.id] ? '⚠️' : '✅';
      }
    });

  } catch(err) {
    console.error('Error scraping:', err);
    SUPERMARKETS.forEach(s => {
      const el = document.getElementById('step-' + s.id);
      if (el) { el.classList.add('done'); el.querySelector('.step-icon').textContent = '⚠️'; }
    });
  }

  if (aiStep) aiStep.classList.add('active');

  state.lastResults = realResults;

  // Calcular mejor precio por producto para sugerencia
  const suggestions = {};
  state.canasta.forEach((item, idx) => {
    const slug = 'p' + idx;
    let bestPrice = Infinity, bestSuper = null;
    SUPERMARKETS.forEach(s => {
      const r = realResults?.[slug]?.[s.id];
      if (r) {
        const price = r.precio_oferta || r.precio_regular;
        if (price && price < bestPrice) { bestPrice = price; bestSuper = s.id; }
      }
    });
    suggestions[slug] = bestSuper;
  });

  // Guardar historial
  const totalMin = state.canasta.reduce((acc, item, idx) => {
    const slug = 'p' + idx;
    const bestId = suggestions[slug];
    if (!bestId) return acc;
    const r = realResults?.[slug]?.[bestId];
    const price = r ? (r.precio_oferta || r.precio_regular) : 0;
    return acc + price * item.qty;
  }, 0);

  state.historial.unshift({
    date: new Date().toLocaleDateString('es-AR', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' }),
    items: state.canasta.length,
    location: state.location || 'No especificada',
    totalMin,
  });
  if (state.historial.length > 20) state.historial = state.historial.slice(0, 20);
  saveState();

  await callAI(realResults, suggestions);

  document.getElementById('loadingOverlay').classList.add('hidden');
  renderProductResults(realResults, suggestions);
  document.getElementById('resultsSection').style.display = 'block';
  document.getElementById('resultsSection').scrollIntoView({ behavior:'smooth', block:'start' });
};

// ══════════════════════════════════════════════════════════════
// RESULTADOS POR PRODUCTO — con botón "Elegir" por opción
// ══════════════════════════════════════════════════════════════
function renderProductResults(realResults, suggestions) {
  const el = document.getElementById('productResults');

  el.innerHTML = state.canasta.map((item, idx) => {
    const slug = 'p' + idx;
    const superResults = SUPERMARKETS.map(s => {
      const r = realResults?.[slug]?.[s.id];
      return { s, r };
    }).filter(x => x.r);

    const prices = superResults.map(x => x.r.precio_oferta || x.r.precio_regular).filter(Boolean);
    const minPrice = prices.length ? Math.min(...prices) : null;
    const maxPrice = prices.length ? Math.max(...prices) : null;

    const carritoItem = state.carrito[slug];

    return `
    <div class="product-result-card" id="result-${slug}">
      <div class="product-result-header">
        <div>
          <div class="product-result-name">${item.nombre}</div>
          <div class="product-result-qty">× ${item.qty} unidades</div>
        </div>
        ${carritoItem
          ? `<span class="badge badge-green">✓ En carrito: ${SUPERMARKETS.find(s=>s.id===carritoItem.superId)?.name}</span>`
          : `<span class="badge badge-blue">Elegí dónde comprar</span>`}
      </div>
      <div class="super-options">
        ${superResults.length === 0
          ? `<div style="padding:16px;color:var(--muted);font-size:13px;">⚠️ Sin resultados en ningún supermercado para "<strong>${item.nombre}</strong>". Probá con otro término de búsqueda.</div>`
          : superResults.map(({ s, r }) => {
              const price = r.precio_oferta || r.precio_regular;
              const hasOffer = r.precio_oferta && r.precio_oferta < r.precio_regular;
              const isBest = price === minPrice;
              const isWorst = price === maxPrice && minPrice !== maxPrice;
              const isSelected = carritoItem?.superId === s.id;
              return `
              <div class="super-option ${isSelected ? 'selected' : ''}">
                <div class="super-option-left">
                  <div class="super-badge" style="background:${s.color}">${s.short}</div>
                  <div>
                    <div class="super-option-name">${s.name}</div>
                    ${r.nombre ? `<div class="super-option-found">Encontré: ${r.nombre.substring(0,40)}${r.nombre.length>40?'...':''}</div>` : ''}
                    ${r.url_producto ? `<a href="${r.url_producto}" target="_blank" class="super-option-link">Ver en sitio →</a>` : ''}
                  </div>
                </div>
                <div class="super-option-right">
                  ${hasOffer ? `<div class="price-regular">${formatARS(r.precio_regular)}</div>` : ''}
                  <div class="price-main ${isBest?'best-price':isWorst?'worst-price':''}">
                    ${formatARS(price)}
                    ${isBest ? ' ⭐' : ''}
                  </div>
                  ${hasOffer ? `<div style="font-size:9px;color:var(--green);">OFERTA</div>` : ''}
                  <button class="btn ${isSelected ? 'btn-primary' : 'btn-ghost'} btn-sm" style="margin-top:6px;"
                    onclick="elegirSuper('${slug}', '${s.id}', ${idx})">
                    ${isSelected ? '✓ Elegido' : 'Elegir'}
                  </button>
                </div>
              </div>`;
            }).join('')
        }
      </div>
    </div>`;
  }).join('');
}

window.elegirSuper = function(slug, superId, idx) {
  const item = state.canasta[idx];
  if (!item) return;
  const r = state.lastResults?.[slug]?.[superId];
  const price = r ? (r.precio_oferta || r.precio_regular) : null;

  state.carrito[slug] = {
    superId,
    nombre: item.nombre,
    qty: item.qty,
    price,
    nombreEncontrado: r?.nombre || item.nombre,
    urlProducto: r?.url_producto || null,
  };
  saveState();

  // Re-render solo esta tarjeta
  if (state.lastResults) {
    const suggestions = {};
    state.canasta.forEach((_, i) => {
      const s = 'p' + i;
      const c = state.carrito[s];
      if (c) suggestions[s] = c.superId;
    });
    renderProductResults(state.lastResults, suggestions);
  }

  showToast('🛒 ' + item.nombre + ' → ' + SUPERMARKETS.find(s=>s.id===superId)?.name);
};

// ══════════════════════════════════════════════════════════════
// CARRITO
// ══════════════════════════════════════════════════════════════
window.clearCarrito = function() {
  if (!Object.keys(state.carrito).length) return;
  if (!confirm('¿Limpiar el carrito?')) return;
  state.carrito = {};
  saveState();
  renderCarrito();
};

window.quitarDelCarrito = function(slug) {
  delete state.carrito[slug];
  saveState();
  renderCarrito();
};

function renderCarrito() {
  const el = document.getElementById('carritoContent');
  const items = Object.entries(state.carrito);

  if (!items.length) {
    el.innerHTML = `<div class="empty-state" style="padding:60px 20px;">
      <div class="empty-icon">🛒</div>
      <div class="empty-title">Tu carrito está vacío</div>
      <div class="empty-sub">Comparé precios y elegí en qué super comprás cada producto.</div>
      <button class="btn btn-primary" style="margin-top:16px;" onclick="switchTab('comparar')">⚖️ Ir a comparar</button>
    </div>`;
    return;
  }

  // Agrupar por supermercado
  const bySuper = {};
  SUPERMARKETS.forEach(s => { bySuper[s.id] = []; });
  items.forEach(([slug, item]) => {
    if (bySuper[item.superId]) bySuper[item.superId].push({ slug, ...item });
  });

  // Total general
  const totalGeneral = items.reduce((acc, [, item]) => {
    return acc + (item.price ? item.price * item.qty : 0);
  }, 0);

  let html = `
    <div class="alert alert-green mb-20">
      <div class="alert-icon">💰</div>
      <div>
        <div class="alert-title" style="color:var(--green)">Total estimado: ${formatARS(totalGeneral)}</div>
        <div class="alert-body">Comprando cada producto donde lo elegiste.</div>
      </div>
    </div>`;

  SUPERMARKETS.forEach(s => {
    const superItems = bySuper[s.id];
    if (!superItems.length) return;

    const totalSuper = superItems.reduce((acc, item) => acc + (item.price ? item.price * item.qty : 0), 0);

    html += `
    <div class="card mb-20">
      <div class="card-header">
        <div class="flex gap-8 items-center">
          <div class="super-badge" style="background:${s.color}">${s.short}</div>
          <span class="card-title">${s.name}</span>
        </div>
        <span style="font-family:'Syne',sans-serif;font-weight:700;color:var(--green)">${formatARS(totalSuper)}</span>
      </div>
      <div style="padding:12px 20px;display:flex;flex-direction:column;gap:10px;">
        ${superItems.map(item => `
          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px;background:var(--surface2);border-radius:8px;">
            <div style="flex:1;min-width:0;">
              <div style="font-size:13px;font-weight:600;color:var(--text);">${item.nombre}</div>
              <div style="font-size:11px;color:var(--muted);margin-top:2px;">Encontrado como: ${item.nombreEncontrado?.substring(0,45) || item.nombre}</div>
              ${item.urlProducto ? `<a href="${item.urlProducto}" target="_blank" style="font-size:10px;color:var(--accent);text-decoration:none;">Ver en sitio →</a>` : ''}
            </div>
            <div style="text-align:right;flex-shrink:0;">
              <div style="font-size:12px;color:var(--muted);">× ${item.qty}</div>
              <div style="font-family:'Syne',sans-serif;font-size:15px;font-weight:700;">${formatARS(item.price)}</div>
              <button onclick="quitarDelCarrito('${item.slug}')" style="background:none;border:none;color:var(--muted);font-size:11px;cursor:pointer;padding:0;margin-top:4px;">✕ quitar</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
  });

  el.innerHTML = html;
}

// ══════════════════════════════════════════════════════════════
// IA
// ══════════════════════════════════════════════════════════════
async function callAI(realResults, suggestions) {
  const today = new Date().getDay();
  const todayPromos = PROMOTIONS[today] || [];

  // Resumen de resultados para el prompt
  const resumenProductos = state.canasta.map((item, idx) => {
    const slug = 'p' + idx;
    const bestId = suggestions[slug];
    const r = realResults?.[slug]?.[bestId];
    const price = r ? (r.precio_oferta || r.precio_regular) : null;
    return `${item.nombre}: ${price ? formatARS(price) + ' en ' + SUPERMARKETS.find(s=>s.id===bestId)?.name : 'sin datos'}`;
  }).join(', ');

  const prompt = `Sos un experto en ahorro en supermercados argentinos. Analizá estos resultados en español argentino, siendo directo y útil.

CANASTA BUSCADA: ${state.canasta.map(i => i.nombre + ' x' + i.qty).join(', ')}
CIUDAD: ${state.location || 'no especificada'}
MEJORES PRECIOS ENCONTRADOS: ${resumenProductos}
MIS MÉTODOS DE PAGO: ${state.paymentMethods.length ? state.paymentMethods.join(', ') : 'no especificados'}
PROMOS HOY (${getDayName(today)}): ${todayPromos.map(p => p.supermercado + ': ' + p.desc + ' con ' + p.banco_billetera).join(', ') || 'ninguna'}

Respondé con 3 oraciones cortas. Cada una empieza con un emoji. Comentá si los precios encontrados parecen razonables, si hay promo bancaria útil hoy, y un tip concreto.`;

  try {
    const response = await fetch('/api/ai-analysis', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();

    const aiStep = document.getElementById('step-ai');
    if (aiStep) { aiStep.classList.add('done'); aiStep.querySelector('.step-icon').textContent = data.fallback ? '⚠️' : '✅'; }

    if (data.fallback || !data.text) throw new Error('sin respuesta');

    document.getElementById('aiContent').innerHTML =
      '<div class="ai-content">' + data.text.split('\n').filter(l=>l.trim()).map(l=>`<p>${l}</p>`).join('') + '</div>';

  } catch(err) {
    const aiStep = document.getElementById('step-ai');
    if (aiStep) { aiStep.classList.add('done'); aiStep.querySelector('.step-icon').textContent = '⚠️'; }
    document.getElementById('aiContent').innerHTML =
      `<div class="ai-content"><p>📊 Resultados listos. Revisá cada producto y elegí en qué super lo comprás.</p>
      ${todayPromos.length ? `<p>🏷️ Hoy hay promos: ${todayPromos.map(p=>p.supermercado+' con '+p.banco_billetera+' → '+p.desc).join(' / ')}.</p>` : ''}
      </div>`;
  }
}

// ══════════════════════════════════════════════════════════════
// PROMOS
// ══════════════════════════════════════════════════════════════
let selectedDay = new Date().getDay();

function renderPromos() {
  const today = new Date().getDay();
  document.getElementById('daysRow').innerHTML = Array.from({length:7},(_,d) => `
    <div class="day-card ${d===today?'today':''} ${d===selectedDay?'selected':''}" onclick="selectDay(${d})">
      <div class="day-name">${getDayShort(d)}</div>
      ${d===today?'<div class="day-today-label">HOY</div>':''}
      <div class="day-emoji">${getDayEmoji(d)}</div>
      <div class="day-bank">${(PROMOTIONS[d]||[]).map(p=>p.banco_billetera).slice(0,2).join('\n')||'Sin promos'}</div>
    </div>
  `).join('');
  renderPromosList();
  renderPaymentChips();
}

function renderPromosList() {
  const promos = PROMOTIONS[selectedDay] || [];
  document.getElementById('promosDayTitle').textContent = 'Promociones del ' + getDayName(selectedDay);
  const el = document.getElementById('promosList');
  if (!promos.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">😴</div><div class="empty-title">Sin promociones este día</div></div>';
    return;
  }
  el.innerHTML = promos.map(p => `
    <div class="promo-card">
      <div class="promo-logo" style="background:${p.color}22;border:1px solid ${p.color}44;">
        <span>${p.emoji}</span>
      </div>
      <div style="flex:1">
        <div class="promo-super">${p.supermercado}</div>
        <div class="promo-desc">${p.desc} <span class="badge badge-purple">${p.banco_billetera}</span></div>
        <div class="promo-detail">${p.detail}</div>
      </div>
      ${state.paymentMethods.includes(p.banco_billetera) ? '<span class="badge badge-green">Tenés esta</span>' : ''}
    </div>
  `).join('');

  // Mejor día personal
  if (state.paymentMethods.length) {
    let bd=null, bp=0, bpr=null;
    for (let d=0; d<7; d++) {
      (PROMOTIONS[d]||[]).forEach(p => {
        if (state.paymentMethods.includes(p.banco_billetera)) {
          const pct = parseInt(p.desc) || 0;
          if (pct > bp) { bp=pct; bd=d; bpr=p; }
        }
      });
    }
    if (bpr) {
      document.getElementById('bestDayAlert').style.display = 'flex';
      document.getElementById('bestDayTitle').textContent = `Tu mejor día: ${getDayName(bd)} en ${bpr.supermercado}`;
      document.getElementById('bestDayBody').textContent = `Con ${bpr.banco_billetera} obtenés ${bpr.desc}. ${bpr.detail}.`;
    }
  }
}

window.selectDay = function(d) { selectedDay = d; renderPromos(); };

function renderPaymentChips() {
  const el = document.getElementById('paymentChips');
  if (!state.paymentMethods.length) {
    el.innerHTML = '<p style="font-size:13px;color:var(--muted);">Agregá tus métodos de pago para ver qué descuentos te corresponden.</p>';
    return;
  }
  el.innerHTML = state.paymentMethods.map(m => `
    <div style="display:flex;align-items:center;gap:6px;background:var(--surface2);border:1px solid var(--border2);border-radius:20px;padding:5px 12px;font-size:12px;">
      💳 ${m}
      <button onclick="removePayment('${m}')" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:13px;">&times;</button>
    </div>
  `).join('');
}

window.openPaymentModal = function() {
  document.getElementById('paymentOptions').innerHTML = PAYMENT_OPTIONS.map(m => `
    <button class="btn ${state.paymentMethods.includes(m)?'btn-primary':'btn-ghost'} btn-sm"
      onclick="togglePayment('${m}',this)">
      ${state.paymentMethods.includes(m)?'✓ ':''}${m}
    </button>
  `).join('');
  document.getElementById('paymentModal').classList.remove('hidden');
};

window.togglePayment = function(method, btn) {
  if (state.paymentMethods.includes(method)) {
    state.paymentMethods = state.paymentMethods.filter(m => m !== method);
    btn.className = 'btn btn-ghost btn-sm';
    btn.textContent = method;
  } else {
    state.paymentMethods.push(method);
    btn.className = 'btn btn-primary btn-sm';
    btn.textContent = '✓ ' + method;
  }
  saveState();
  renderPaymentChips();
};

window.removePayment = function(method) {
  state.paymentMethods = state.paymentMethods.filter(m => m !== method);
  saveState();
  renderPaymentChips();
};

// ══════════════════════════════════════════════════════════════
// HISTORIAL
// ══════════════════════════════════════════════════════════════
function renderHistorial() {
  const el = document.getElementById('historialList');
  if (!state.historial.length) {
    el.innerHTML = '<div class="empty-state" style="padding:50px 20px;"><div class="empty-icon">📊</div><div class="empty-title">Sin historial aún</div><div class="empty-sub">Hacé tu primera comparación.</div></div>';
    return;
  }
  el.innerHTML = state.historial.map((h, i) => `
    <div class="hist-item">
      <div>
        <div class="hist-date">🕐 ${h.date}${h.location ? ' · 📍 ' + h.location : ''}</div>
        <div class="hist-summary">${h.items} producto${h.items !== 1 ? 's' : ''} comparados</div>
        ${h.totalMin > 0 ? `<div class="hist-detail">Total mínimo estimado: <strong style="color:var(--green)">${formatARS(h.totalMin)}</strong></div>` : ''}
      </div>
      <span class="badge badge-blue">#${i+1}</span>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════════════════════
// UBICACIÓN
// ══════════════════════════════════════════════════════════════
window.openLocationModal = function() {
  document.getElementById('locationInput').value = state.location;
  document.getElementById('geoStatus').textContent = '';
  document.getElementById('locationModal').classList.remove('hidden');
};

window.saveLocation = function() {
  const val = document.getElementById('locationInput').value.trim();
  if (!val) { showToast('⚠️ Escribí una ciudad antes de guardar'); return; }
  state.location = val;
  document.getElementById('locationLabel').textContent = val;
  saveState();
  window.closeModal('locationModal');
  showToast('📍 Ciudad guardada: ' + val);
};

window.useGeoLocation = function() {
  if (!navigator.geolocation) {
    document.getElementById('geoStatus').textContent = 'Tu navegador no soporta geolocalización.';
    return;
  }
  document.getElementById('geoBtn').textContent = '⏳ Detectando...';
  document.getElementById('geoStatus').textContent = '';

  navigator.geolocation.getCurrentPosition(
    pos => {
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json&accept-language=es`)
        .then(r => r.json())
        .then(d => {
          const city = d.address?.city || d.address?.town || d.address?.village || '';
          const state2 = d.address?.state || '';
          const resultado = [city, state2].filter(Boolean).join(', ');
          if (resultado) {
            document.getElementById('locationInput').value = resultado;
            document.getElementById('geoStatus').textContent = '✅ Ciudad detectada';
          } else {
            document.getElementById('geoStatus').textContent = '⚠️ No se pudo determinar la ciudad. Escribila manualmente.';
          }
        })
        .catch(() => {
          document.getElementById('geoStatus').textContent = '⚠️ Error al obtener la dirección. Escribí tu ciudad manualmente.';
        })
        .finally(() => {
          document.getElementById('geoBtn').textContent = '📡 Detectar ciudad';
        });
    },
    err => {
      document.getElementById('geoBtn').textContent = '📡 Detectar ciudad';
      document.getElementById('geoStatus').textContent = '⚠️ No se pudo acceder a tu ubicación. Escribí tu ciudad manualmente.';
    },
    { timeout: 8000 }
  );
};

window.closeModal = function(id) {
  document.getElementById(id).classList.add('hidden');
};

document.querySelectorAll('.modal-bg').forEach(bg => {
  bg.addEventListener('click', e => { if (e.target === bg) bg.classList.add('hidden'); });
});

// ══════════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════════
function init() {
  document.getElementById('locationLabel').textContent = state.location || 'Mi ciudad';
  renderCanastaPreview();
  updateCanastaCount();

  // Tip del día según métodos de pago
  if (state.paymentMethods.length) {
    let bd=null, bp=0, bpr=null;
    for (let d=0; d<7; d++) {
      (PROMOTIONS[d]||[]).forEach(p => {
        if (state.paymentMethods.includes(p.banco_billetera)) {
          const pct = parseInt(p.desc) || 0;
          if (pct > bp) { bp=pct; bd=d; bpr=p; }
        }
      });
    }
    if (bpr) {
      const tipEl = document.getElementById('dailyTipText');
      if (tipEl) tipEl.innerHTML = `Con tu <strong>${bpr.banco_billetera}</strong>, el mejor día para ir es el <strong style="color:var(--accent)">${getDayName(bd)}</strong> en <strong>${bpr.supermercado}</strong> → ${bpr.desc}. Agregá productos y presioná <strong>Comparar precios</strong>.`;
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}