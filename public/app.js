// ══════════════════════════════════════════════════════════════
// CONFIGURACIÓN — completar después de crear Supabase
// ══════════════════════════════════════════════════════════════
const SUPABASE_URL = 'TU_SUPABASE_URL_AQUI';
const SUPABASE_ANON_KEY = 'TU_SUPABASE_ANON_KEY_AQUI';

// ══════════════════════════════════════════════════════════════
// DATOS: SUPERMERCADOS
// ══════════════════════════════════════════════════════════════
const SUPERMARKETS = [
  { id: 'carrefour', name: 'Carrefour',     short: 'C',  color: '#003B8E' },
  { id: 'jumbo',     name: 'Jumbo',         short: 'J',  color: '#00873D' },
  { id: 'chango',    name: 'Chango +',      short: 'CH', color: '#FF6B00' },
  { id: 'anonima',   name: 'La Anónima',   short: 'A',  color: '#C8102E' },
  { id: 'maxi',      name: 'Maxi Consumo', short: 'M',  color: '#6B21A8' },
  { id: 'coope',     name: 'La Coope',     short: 'CO', color: '#0D9488' },
];

// ══════════════════════════════════════════════════════════════
// DATOS: CATÁLOGO DE PRODUCTOS
// ══════════════════════════════════════════════════════════════
const PRODUCT_CATALOG = [
  { id:1,  slug:'leche-serenisima-1l',        name:'Leche La Serenísima Entera 1L',     busqueda:'leche serenisima entera',    cat:'Lácteos' },
  { id:2,  slug:'yogur-danone-190g',           name:'Yogur Danone Natural 190g',         busqueda:'yogur danone natural',       cat:'Lácteos' },
  { id:3,  slug:'queso-cremoso-paulina-400g',  name:'Queso Cremoso La Paulina 400g',     busqueda:'queso cremoso paulina',      cat:'Lácteos' },
  { id:4,  slug:'manteca-mendicrim-200g',      name:'Manteca Mendicrim 200g',            busqueda:'manteca mendicrim',          cat:'Lácteos' },
  { id:5,  slug:'arroz-molinos-ala-1kg',       name:'Arroz Molinos Ala Largo Fino 1kg', busqueda:'arroz molinos ala',          cat:'Almacén' },
  { id:6,  slug:'aceite-natura-15l',           name:'Aceite Natura Girasol 1.5L',        busqueda:'aceite girasol natura',      cat:'Almacén' },
  { id:7,  slug:'fideos-lucchetti-500g',       name:'Fideos Lucchetti Spaghetti 500g',   busqueda:'fideos lucchetti spaghetti', cat:'Almacén' },
  { id:8,  slug:'azucar-ledesma-1kg',          name:'Azúcar Ledesma 1kg',                busqueda:'azucar ledesma',             cat:'Almacén' },
  { id:9,  slug:'harina-tres-coronas-1kg',     name:'Harina Tres Coronas 000 1kg',       busqueda:'harina tres coronas',        cat:'Almacén' },
  { id:10, slug:'tomate-perita-arcor-800g',    name:'Tomate Perita Arcor 800g',          busqueda:'tomate perita arcor',        cat:'Almacén' },
  { id:11, slug:'sal-dos-anclas-1kg',          name:'Sal Dos Anclas Fina 1kg',           busqueda:'sal fina dos anclas',        cat:'Almacén' },
  { id:12, slug:'cafe-nescafe-170g',           name:'Café Nescafé Tradición 170g',       busqueda:'cafe nescafe tradicion',     cat:'Almacén' },
  { id:13, slug:'coca-cola-225l',              name:'Gaseosa Coca-Cola 2.25L',           busqueda:'coca cola 2.25',             cat:'Bebidas' },
  { id:14, slug:'agua-villavicencio-2l',       name:'Agua Villavicencio 2L',             busqueda:'agua villavicencio',         cat:'Bebidas' },
  { id:15, slug:'jugo-tang-naranja',           name:'Jugo Tang Naranja 20g',             busqueda:'jugo tang naranja',          cat:'Bebidas' },
  { id:16, slug:'pan-lactal-bimbo-550g',       name:'Pan Lactal Bimbo Blanco 550g',      busqueda:'pan lactal bimbo',           cat:'Panadería' },
  { id:17, slug:'galletitas-oreo-118g',        name:'Galletitas Oreo 118g',              busqueda:'galletitas oreo',            cat:'Panadería' },
  { id:18, slug:'detergente-magistral-750ml',  name:'Detergente Magistral 750ml',        busqueda:'detergente magistral',       cat:'Limpieza' },
  { id:19, slug:'lavandina-ayudin-2l',         name:'Lavandina Ayudín 2L',               busqueda:'lavandina ayudin',           cat:'Limpieza' },
  { id:20, slug:'jabon-skip-800g',             name:'Jabón en Polvo Skip 800g',          busqueda:'jabon polvo skip',           cat:'Limpieza' },
  { id:21, slug:'papel-higienico-elite-x4',    name:'Papel Higiénico Elite x4',          busqueda:'papel higienico elite',      cat:'Limpieza' },
  { id:22, slug:'shampoo-pantene-400ml',       name:'Shampoo Pantene 400ml',             busqueda:'shampoo pantene',            cat:'Higiene' },
  { id:23, slug:'desodorante-rexona-58g',      name:'Desodorante Rexona Clinical 58g',   busqueda:'desodorante rexona clinical', cat:'Higiene' },
  { id:24, slug:'pechuga-pollo-kg',            name:'Pechuga de Pollo x kg',             busqueda:'pechuga pollo',              cat:'Carnes' },
  { id:25, slug:'carne-molida-kg',             name:'Carne Molida Especial x kg',        busqueda:'carne molida',               cat:'Carnes' },
  { id:26, slug:'tomate-redondo-kg',           name:'Tomate Redondo x kg',               busqueda:'tomate redondo',             cat:'Frutas y Verduras' },
  { id:27, slug:'papa-blanca-kg',              name:'Papa Blanca x kg',                  busqueda:'papa blanca',                cat:'Frutas y Verduras' },
  { id:28, slug:'cebolla-kg',                  name:'Cebolla x kg',                      busqueda:'cebolla',                    cat:'Frutas y Verduras' },
  { id:29, slug:'banana-kg',                   name:'Banana x kg',                       busqueda:'banana',                     cat:'Frutas y Verduras' },
  { id:30, slug:'manzana-roja-kg',             name:'Manzana Roja x kg',                 busqueda:'manzana roja',               cat:'Frutas y Verduras' },
];

// ══════════════════════════════════════════════════════════════
// DATOS: PROMOCIONES POR DÍA
// ══════════════════════════════════════════════════════════════
const PROMOTIONS = {
  0: [
    { supermercado:'La Coope',     emoji:'🏪', banco_billetera:'Socios La Coope', desc:'5% descuento',  detail:'Presentando credencial de socio', color:'#0D9488' },
    { supermercado:'Carrefour',    emoji:'🔵', banco_billetera:'Mercado Pago',    desc:'10% reintegro', detail:'Hasta $3.000 de reintegro',       color:'#003B8E' },
  ],
  1: [
    { supermercado:'Carrefour',    emoji:'🔵', banco_billetera:'Naranja X',  desc:'15% descuento', detail:'En compras desde $10.000', color:'#003B8E' },
    { supermercado:'Jumbo',        emoji:'🟢', banco_billetera:'Galicia',    desc:'10% descuento', detail:'Tarjetas Visa y Mastercard', color:'#00873D' },
  ],
  2: [
    { supermercado:'Jumbo',        emoji:'🟢', banco_billetera:'BBVA',         desc:'10% descuento', detail:'Débito y crédito',          color:'#00873D' },
    { supermercado:'La Anónima',  emoji:'🔴', banco_billetera:'Santander',    desc:'15% descuento', detail:'Tarjetas Select',            color:'#C8102E' },
    { supermercado:'Maxi Consumo', emoji:'🟣', banco_billetera:'Personal Pay', desc:'12% descuento', detail:'Billetera virtual',          color:'#6B21A8' },
  ],
  3: [
    { supermercado:'Carrefour',    emoji:'🔵', banco_billetera:'Mercado Pago', desc:'10% reintegro', detail:'Hasta $3.000 de reintegro', color:'#003B8E' },
    { supermercado:'Maxi Consumo', emoji:'🟣', banco_billetera:'Uala',         desc:'18% descuento', detail:'Pago con QR Uala, sin tope', color:'#6B21A8' },
    { supermercado:'Jumbo',        emoji:'🟢', banco_billetera:'BBVA',         desc:'10% descuento', detail:'Débito y crédito',           color:'#00873D' },
    { supermercado:'Chango +',     emoji:'🟠', banco_billetera:'HSBC',         desc:'12% descuento', detail:'Tarjetas de crédito Visa',   color:'#FF6B00' },
  ],
  4: [
    { supermercado:'Carrefour',    emoji:'🔵', banco_billetera:'Naranja X', desc:'15% descuento', detail:'En compras desde $10.000', color:'#003B8E' },
    { supermercado:'Chango +',     emoji:'🟠', banco_billetera:'Galicia',   desc:'10% descuento', detail:'Tarjetas Visa y Mastercard', color:'#FF6B00' },
    { supermercado:'Chango +',     emoji:'🟠', banco_billetera:'HSBC',      desc:'12% descuento', detail:'Tarjetas de crédito Visa',   color:'#FF6B00' },
    { supermercado:'La Anónima',  emoji:'🔴', banco_billetera:'Macro',     desc:'10% descuento', detail:'Tarjetas Mastercard',        color:'#C8102E' },
  ],
  5: [
    { supermercado:'Jumbo',        emoji:'🟢', banco_billetera:'Galicia', desc:'10% descuento', detail:'Tarjetas Visa y Mastercard', color:'#00873D' },
    { supermercado:'Carrefour',    emoji:'🔵', banco_billetera:'Nación',  desc:'10% descuento', detail:'Tarjetas de débito Visa',    color:'#003B8E' },
    { supermercado:'La Coope',     emoji:'🏪', banco_billetera:'Socios La Coope', desc:'8% descuento', detail:'Viernes de socios', color:'#0D9488' },
  ],
  6: [
    { supermercado:'Maxi Consumo', emoji:'🟣', banco_billetera:'Personal Pay',    desc:'12% descuento', detail:'Billetera virtual',     color:'#6B21A8' },
    { supermercado:'La Anónima',  emoji:'🔴', banco_billetera:'Macro',           desc:'10% descuento', detail:'Tarjetas Mastercard',   color:'#C8102E' },
    { supermercado:'Chango +',     emoji:'🟠', banco_billetera:'Mercado Pago',    desc:'8% reintegro',  detail:'Pago con QR',           color:'#FF6B00' },
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
  location: localStorage.getItem('sc_location') || 'Bahía Blanca, Buenos Aires',
  currentCatFilter: 'all',
  lastResults: null,
};

let supabaseClient = null;

function initSupabase() {
  if (SUPABASE_URL.includes('TU_SUPABASE') || !window.supabase) return;
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch(e) {
    console.warn('Supabase no disponible, usando localStorage');
  }
}

// ══════════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════════
function saveState() {
  localStorage.setItem('sc_canasta', JSON.stringify(state.canasta));
  localStorage.setItem('sc_payments', JSON.stringify(state.paymentMethods));
  localStorage.setItem('sc_historial', JSON.stringify(state.historial));
  localStorage.setItem('sc_location', state.location);
}

function formatARS(n) {
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

function stepEmoji(id) {
  return {carrefour:'🔵',jumbo:'🟢',chango:'🟠',anonima:'🔴',maxi:'🟣',coope:'🩵',ai:'🤖'}[id] || '⭕';
}

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#141528;border:1px solid #252742;color:#EEF0FF;padding:10px 18px;border-radius:30px;font-size:13px;font-weight:500;z-index:1000;box-shadow:0 8px 30px rgba(0,0,0,0.4);transition:opacity 0.3s;white-space:nowrap;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  setTimeout(() => { t.style.opacity = '0'; }, 2500);
}

// ══════════════════════════════════════════════════════════════
// NAVEGACIÓN
// ══════════════════════════════════════════════════════════════
window.switchTab = function(tabId, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + tabId).classList.add('active');
  document.querySelectorAll('.nav-tab,.mobile-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('[data-tab="' + tabId + '"]').forEach(b => b.classList.add('active'));
  if (tabId === 'canasta') renderCanastaFull();
  if (tabId === 'promos') renderPromos();
  if (tabId === 'historial') renderHistorial();
};

// ══════════════════════════════════════════════════════════════
// BÚSQUEDA / AUTOCOMPLETE
// ══════════════════════════════════════════════════════════════
window.handleSearch = function(val, context) {
  const id = context === 'canasta' ? 'suggestions-canasta' : 'suggestions';
  const el = document.getElementById(id);
  if (!val.trim() || val.length < 2) { el.classList.remove('open'); return; }
  const q = val.toLowerCase();
  const matches = PRODUCT_CATALOG.filter(p =>
    p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)
  ).slice(0, 8);
  if (!matches.length) { el.classList.remove('open'); return; }
  el.innerHTML = matches.map(p => `
    <div class="suggestion-item" onclick="addProduct(${p.id},'${context||''}')">
      <div style="font-size:13px;font-weight:500;">${p.name}</div>
      <span class="badge badge-blue" style="font-size:9px;">${p.cat}</span>
    </div>
  `).join('');
  el.classList.add('open');
};

window.showSuggestions = function(ctx) {
  const id = ctx === 'canasta' ? 'suggestions-canasta' : 'suggestions';
  const inp = ctx === 'canasta' ? document.getElementById('canastaSearch') : document.getElementById('quickSearch');
  if (inp && inp.value.length >= 2) document.getElementById(id).classList.add('open');
};

window.hideSuggestions = function(ctx) {
  const id = ctx === 'canasta' ? 'suggestions-canasta' : 'suggestions';
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
};

// ══════════════════════════════════════════════════════════════
// CANASTA
// ══════════════════════════════════════════════════════════════
window.addProduct = function(id, ctx) {
  const product = PRODUCT_CATALOG.find(p => p.id === id);
  if (!product) return;
  const existing = state.canasta.find(i => i.id === id);
  if (existing) { existing.qty++; } else { state.canasta.push({ id, qty: 1 }); }
  saveState();
  const inp = ctx === 'canasta' ? document.getElementById('canastaSearch') : document.getElementById('quickSearch');
  if (inp) inp.value = '';
  window.hideSuggestions(ctx);
  window.hideSuggestions();
  renderCanastaPreview();
  renderCanastaFull();
  updateCanastaCount();
  showToast('✅ ' + product.name.split(' ').slice(0,3).join(' ') + ' agregado');
};

window.updateQty = function(id, delta) {
  const item = state.canasta.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.canasta = state.canasta.filter(i => i.id !== id);
  saveState();
  renderCanastaPreview();
  renderCanastaFull();
  updateCanastaCount();
};

window.removeProduct = function(id) {
  state.canasta = state.canasta.filter(i => i.id !== id);
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

window.filterCat = function(cat, el) {
  state.currentCatFilter = cat;
  document.querySelectorAll('.cat-filter').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderCanastaFull();
};

function updateCanastaCount() {
  const count = state.canasta.length;
  document.getElementById('canastaCount').textContent = count + ' productos';
  const ct = document.getElementById('canastaTotal');
  if (ct) ct.textContent = count;
}

function renderCanastaPreview() {
  const el = document.getElementById('canastaPreview');
  if (!state.canasta.length) {
    el.innerHTML = '<div class="empty-state" style="padding:40px 20px;"><div class="empty-icon">🧺</div><div class="empty-title">Canasta vacía</div><div class="empty-sub">Buscá productos arriba para agregar.</div></div>';
    return;
  }
  el.innerHTML = '<div class="canasta-grid">' + state.canasta.map(item => {
    const p = PRODUCT_CATALOG.find(x => x.id === item.id);
    if (!p) return '';
    return `<div class="canasta-item">
      <div class="canasta-item-info">
        <div class="canasta-item-name">${p.name}</div>
        <div class="canasta-item-cat">${p.cat}</div>
      </div>
      <div class="qty-ctrl">
        <button class="qty-btn" onclick="updateQty(${p.id},-1)">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="updateQty(${p.id},1)">+</button>
      </div>
      <button class="remove-btn" onclick="removeProduct(${p.id})">✕</button>
    </div>`;
  }).join('') + '</div>';
}

function renderCanastaFull() {
  const el = document.getElementById('canastaFullList');
  const ct = document.getElementById('canastaTotal');
  if (ct) ct.textContent = state.canasta.length;
  let items = state.canasta.map(item => ({ item, product: PRODUCT_CATALOG.find(x => x.id === item.id) })).filter(x => x.product);
  if (state.currentCatFilter !== 'all') items = items.filter(x => x.product.cat === state.currentCatFilter);
  if (!items.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">🔍</div><div class="empty-title">Sin productos aquí</div><div class="empty-sub">Buscá productos arriba para agregar.</div></div>';
    return;
  }
  el.innerHTML = '<div class="canasta-grid">' + items.map(({ item, product: p }) => `
    <div class="canasta-item">
      <div class="canasta-item-info">
        <div class="canasta-item-name">${p.name}</div>
        <div class="canasta-item-cat">${p.cat}</div>
      </div>
      <div class="qty-ctrl">
        <button class="qty-btn" onclick="updateQty(${p.id},-1)">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="updateQty(${p.id},1)">+</button>
      </div>
      <button class="remove-btn" onclick="removeProduct(${p.id})">✕</button>
    </div>`).join('') + '</div>';
}

// ══════════════════════════════════════════════════════════════
// COMPARACIÓN
// ══════════════════════════════════════════════════════════════
window.runComparison = async function() {
  if (!state.canasta.length) { showToast('⚠️ Agregá al menos un producto'); return; }

  document.getElementById('loadingOverlay').classList.remove('hidden');
  SUPERMARKETS.forEach(s => {
    const el = document.getElementById('step-' + s.id);
    if (el) { el.classList.remove('done','active'); el.querySelector('.step-icon').textContent = stepEmoji(s.id); }
  });

  const products = state.canasta.map(item => ({
    item, product: PRODUCT_CATALOG.find(x => x.id === item.id)
  })).filter(x => x.product);

  let realResults = null;
  let scraperErrors = {};

  try {
    // Animación de pasos
    for (const s of SUPERMARKETS) {
      await delay(300);
      const el = document.getElementById('step-' + s.id);
      if (el) el.classList.add('active');
    }

    const res = await fetch('/api/scraper/all', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        products: products.map(({ product }) => ({
          slug: product.slug,
          nombre: product.name,
          busqueda: product.busqueda,
        }))
      })
    });

    const data = await res.json();
    realResults = data.results;
    scraperErrors = data.errors || {};

    SUPERMARKETS.forEach(s => {
      const el = document.getElementById('step-' + s.id);
      const hadError = scraperErrors[s.id];
      if (el) { el.classList.add('done'); el.querySelector('.step-icon').textContent = hadError ? '⚠️' : '✅'; }
    });

  } catch(err) {
    console.error('Error en scraping:', err);
    SUPERMARKETS.forEach(s => {
      const el = document.getElementById('step-' + s.id);
      if (el) { el.classList.add('done'); el.querySelector('.step-icon').textContent = '⚠️'; }
    });
  }

  document.getElementById('step-ai').classList.add('active');

  // Calcular totales
  const totals = {};
  SUPERMARKETS.forEach(s => {
    totals[s.id] = products.reduce((acc, { item, product }) => {
      const r = realResults?.[product.slug]?.[s.id];
      const price = r ? (r.precio_oferta || r.precio_regular) : null;
      return acc + (price ? price * item.qty : 0);
    }, 0);
  });

  const validSupers = SUPERMARKETS.filter(s => totals[s.id] > 0);
  const best = validSupers.length ? validSupers.reduce((a,b) => totals[a.id] < totals[b.id] ? a : b) : SUPERMARKETS[0];
  const worst = validSupers.length ? validSupers.reduce((a,b) => totals[a.id] > totals[b.id] ? a : b) : SUPERMARKETS[SUPERMARKETS.length-1];
  const saving = totals[worst.id] - totals[best.id];

  // Mejor día
  let bestDay = null, bestDayPromo = null, bestDayDiscount = 0;
  for (let d = 0; d < 7; d++) {
    const promos = PROMOTIONS[d] || [];
    const relevant = state.paymentMethods.length ? promos.filter(p => state.paymentMethods.includes(p.banco_billetera)) : promos;
    relevant.forEach(p => {
      const pct = parseInt(p.desc) || 0;
      if (pct > bestDayDiscount) { bestDayDiscount = pct; bestDay = d; bestDayPromo = p; }
    });
  }

  // Guardar en historial
  state.historial.unshift({
    date: new Date().toLocaleDateString('es-AR', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' }),
    items: state.canasta.length,
    best: best.name,
    bestTotal: totals[best.id],
    location: state.location,
  });
  if (state.historial.length > 20) state.historial = state.historial.slice(0,20);
  saveState();

  // Llamar a IA
  await callAI(products, totals, validSupers, best, worst, saving, bestDay, bestDayPromo, bestDayDiscount);

  document.getElementById('loadingOverlay').classList.add('hidden');
  renderResults(products, totals, realResults);
  document.getElementById('resultsSection').style.display = 'block';
  document.getElementById('resultsSection').scrollIntoView({ behavior:'smooth', block:'start' });
};

async function callAI(products, totals, validSupers, best, worst, saving, bestDay, bestDayPromo, bestDayDiscount) {
  const sortedSupers = [...SUPERMARKETS].filter(s => totals[s.id] > 0).sort((a,b) => totals[a.id]-totals[b.id]);
  const today = new Date().getDay();
  const todayPromos = PROMOTIONS[today] || [];

  const prompt = `Sos un experto en ahorro en supermercados argentinos. Analizá esta comparación y respondé en español argentino, de forma directa y útil.

CANASTA: ${products.map(({item,product}) => product.name + ' x' + item.qty).join(', ')}
UBICACIÓN: ${state.location}
TOTALES:
${sortedSupers.map(s => `- ${s.name}: ${formatARS(totals[s.id])}`).join('\n')}
${validSupers.length > 0 ? `MÁS BARATO: ${best.name} (${formatARS(totals[best.id])})` : 'Sin datos de precios reales aún'}
${saving > 0 ? `AHORRO POSIBLE: ${formatARS(saving)}` : ''}
MIS MÉTODOS DE PAGO: ${state.paymentMethods.length ? state.paymentMethods.join(', ') : 'no especificados'}
PROMOS HOY: ${todayPromos.map(p => `${p.supermercado}: ${p.desc} con ${p.banco_billetera}`).join(', ') || 'ninguna'}
${bestDay !== null ? `MEJOR DÍA CON DESCUENTO: ${getDayName(bestDay)} en ${bestDayPromo?.supermercado} con ${bestDayPromo?.banco_billetera} (${bestDayDiscount}% off)` : ''}

Respondé con 3-4 oraciones cortas. Empezá cada una con un emoji. Sé directo y práctico.`;

  try {
    const response = await fetch('/api/ai-analysis', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    if (data.fallback || !data.text) throw new Error('Sin respuesta');
    document.getElementById('step-ai').classList.add('done');
    document.getElementById('step-ai').querySelector('.step-icon').textContent = '✅';
    document.getElementById('aiContent').innerHTML = '<div class="ai-content">' + data.text.split('\n').filter(l=>l.trim()).map(l=>`<p>${l}</p>`).join('') + '</div>';
    if (bestDay !== null && bestDayPromo) {
      document.getElementById('bestDayAlert').style.display = 'flex';
      document.getElementById('bestDayTitle').textContent = `Mejor día: ${getDayName(bestDay)} en ${bestDayPromo.supermercado}`;
      document.getElementById('bestDayBody').textContent = `${bestDayPromo.banco_billetera}: ${bestDayPromo.desc}. ${bestDayPromo.detail}.`;
    }
  } catch(err) {
    document.getElementById('step-ai').classList.add('done');
    document.getElementById('step-ai').querySelector('.step-icon').textContent = '⚠️';
    document.getElementById('aiContent').innerHTML = `<div class="ai-content">
      ${validSupers.length > 0 ? `<p>🛒 Conviene ir a <strong>${best.name}</strong> para esta canasta.</p>` : '<p>⚠️ No se pudieron obtener precios reales. Intentá de nuevo.</p>'}
      ${saving > 0 ? `<p>💰 Ahorrás <strong>${formatARS(saving)}</strong> vs ${worst.name}.</p>` : ''}
      ${bestDay !== null && bestDayPromo ? `<p>📅 Mejor día: <strong>${getDayName(bestDay)}</strong> en ${bestDayPromo.supermercado} con ${bestDayPromo.banco_billetera} (${bestDayDiscount}% off).</p>` : ''}
    </div>`;
  }
}

function renderResults(products, totals, realResults) {
  const sortedSupers = [...SUPERMARKETS].sort((a,b) => totals[a.id]-totals[b.id]);
  const validTotals = sortedSupers.filter(s => totals[s.id] > 0);
  const minTotal = validTotals.length ? totals[validTotals[0].id] : 0;

  document.getElementById('totalRanking').innerHTML = sortedSupers.map((s,i) => `
    <div class="super-total-card ${i===0 && totals[s.id]>0 ? 'best' : ''}">
      ${i===0 && totals[s.id]>0 ? '<div class="best-ribbon"><span class="badge badge-green">Más barato</span></div>' : ''}
      <div class="super-logo" style="background:${s.color}">${s.short}</div>
      <div class="super-total-name">${s.name}</div>
      <div class="super-total-price" style="color:${totals[s.id]===0?'var(--muted)':i===0?'var(--green)':i===sortedSupers.length-1&&totals[s.id]>0?'var(--red)':'var(--text)'}">
        ${totals[s.id] > 0 ? formatARS(totals[s.id]) : 'Sin datos'}
      </div>
      ${i>0 && totals[s.id]>0 && minTotal>0 ? `<div class="super-total-diff">+${formatARS(totals[s.id]-minTotal)} más</div>` : ''}
    </div>
  `).join('');

  const tbody = document.getElementById('compareTableBody');
  tbody.innerHTML = products.map(({ item, product: p }) => {
    const prices = SUPERMARKETS.map(s => {
      const r = realResults?.[p.slug]?.[s.id];
      return r ? (r.precio_oferta || r.precio_regular) : null;
    });
    const validPrices = prices.filter(Boolean);
    const minP = validPrices.length ? Math.min(...validPrices) : null;
    const maxP = validPrices.length ? Math.max(...validPrices) : null;

    return `<tr>
      <td>
        <div class="td-product-name">${p.name}</div>
        <div class="td-product-qty">× ${item.qty} unidades</div>
      </td>
      ${SUPERMARKETS.map(s => {
        const r = realResults?.[p.slug]?.[s.id];
        if (!r) return '<td class="td-price"><div class="no-price">—</div></td>';
        const eff = r.precio_oferta || r.precio_regular;
        const hasOffer = r.precio_oferta && r.precio_oferta < r.precio_regular;
        const isBest = eff === minP;
        const isWorst = eff === maxP && minP !== maxP;
        const cls = isBest ? 'best-price' : isWorst ? 'worst-price' : 'mid-price';
        return `<td class="td-price">
          ${hasOffer ? `<div class="price-regular">${formatARS(r.precio_regular)}</div>` : ''}
          <div class="${hasOffer?'price-offer':'price-only'} ${cls}">${formatARS(eff)}</div>
          ${isBest ? '<div style="font-size:11px">⭐</div>' : ''}
        </td>`;
      }).join('')}
    </tr>`;
  }).join('');
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
  if (!promos.length) { el.innerHTML = '<div class="empty-state"><div class="empty-icon">😴</div><div class="empty-title">Sin promociones este día</div></div>'; return; }
  el.innerHTML = promos.map(p => `
    <div class="promo-card">
      <div class="promo-logo" style="background:${p.color}22;border:1px solid ${p.color}44;"><span>${p.emoji}</span></div>
      <div style="flex:1">
        <div class="promo-super">${p.supermercado}</div>
        <div class="promo-desc">${p.desc} <span class="badge badge-purple">${p.banco_billetera}</span></div>
        <div class="promo-detail">${p.detail}</div>
      </div>
      ${state.paymentMethods.includes(p.banco_billetera) ? '<span class="badge badge-green">Tenés esta</span>' : ''}
    </div>
  `).join('');

  if (state.paymentMethods.length) {
    let bd=null, bp=0, bpr=null;
    for (let d=0;d<7;d++) {
      (PROMOTIONS[d]||[]).forEach(p => {
        if (state.paymentMethods.includes(p.banco_billetera)) {
          const pct = parseInt(p.desc)||0;
          if (pct>bp) { bp=pct; bd=d; bpr=p; }
        }
      });
    }
    if (bpr) {
      document.getElementById('bestDayAlert').style.display='flex';
      document.getElementById('bestDayTitle').textContent=`Tu mejor día: ${getDayName(bd)} en ${bpr.supermercado}`;
      document.getElementById('bestDayBody').textContent=`Con ${bpr.banco_billetera} obtenés ${bpr.desc}. ${bpr.detail}.`;
    }
  }
}

window.selectDay = function(d) { selectedDay=d; renderPromos(); };

function renderPaymentChips() {
  const el = document.getElementById('paymentChips');
  if (!state.paymentMethods.length) {
    el.innerHTML = '<p style="font-size:13px;color:var(--muted);">Agregá tus métodos de pago para ver qué promociones te corresponden.</p>';
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
    <button class="btn ${state.paymentMethods.includes(m)?'btn-primary':'btn-ghost'} btn-sm" onclick="togglePayment('${m}',this)">
      ${state.paymentMethods.includes(m)?'✓ ':''}${m}
    </button>
  `).join('');
  document.getElementById('paymentModal').classList.remove('hidden');
};

window.togglePayment = function(method, btn) {
  if (state.paymentMethods.includes(method)) {
    state.paymentMethods = state.paymentMethods.filter(m=>m!==method);
    btn.className='btn btn-ghost btn-sm'; btn.textContent=method;
  } else {
    state.paymentMethods.push(method);
    btn.className='btn btn-primary btn-sm'; btn.textContent='✓ '+method;
  }
  saveState(); renderPaymentChips();
};

window.removePayment = function(method) {
  state.paymentMethods = state.paymentMethods.filter(m=>m!==method);
  saveState(); renderPaymentChips();
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
  el.innerHTML = state.historial.map((h,i) => `
    <div class="hist-item">
      <div>
        <div class="hist-date">🕐 ${h.date} · 📍 ${h.location}</div>
        <div class="hist-summary">${h.items} productos comparados</div>
        <div class="hist-detail">Más barato: <strong style="color:var(--green)">${h.best}</strong>${h.bestTotal>0?' · '+formatARS(h.bestTotal):''}</div>
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
  document.getElementById('locationModal').classList.remove('hidden');
};

window.saveLocation = function() {
  state.location = document.getElementById('locationInput').value.trim() || state.location;
  document.getElementById('locationLabel').textContent = state.location;
  saveState();
  window.closeModal('locationModal');
  showToast('📍 Ubicación actualizada');
};

window.useGeoLocation = function() {
  if (!navigator.geolocation) { showToast('⚠️ Tu navegador no soporta geolocalización'); return; }
  navigator.geolocation.getCurrentPosition(pos => {
    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`)
      .then(r=>r.json())
      .then(d => {
        const city = d.address?.city||d.address?.town||d.address?.village||'Tu ciudad';
        const prov = d.address?.state||'';
        document.getElementById('locationInput').value = `${city}, ${prov}`;
      }).catch(()=>showToast('⚠️ No se pudo obtener la dirección'));
  }, ()=>showToast('⚠️ No se pudo acceder a tu ubicación'));
};

window.closeModal = function(id) {
  document.getElementById(id).classList.add('hidden');
};

document.querySelectorAll('.modal-bg').forEach(bg => {
  bg.addEventListener('click', e => { if(e.target===bg) bg.classList.add('hidden'); });
});

// ══════════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════════
function init() {
  initSupabase();
  document.getElementById('locationLabel').textContent = state.location;
  renderCanastaPreview();
  updateCanastaCount();

  if (state.paymentMethods.length) {
    let bd=null,bp=0,bpr=null;
    for (let d=0;d<7;d++) {
      (PROMOTIONS[d]||[]).forEach(p => {
        if (state.paymentMethods.includes(p.banco_billetera)) {
          const pct=parseInt(p.desc)||0;
          if (pct>bp){bp=pct;bd=d;bpr=p;}
        }
      });
    }
    if (bpr) {
      document.getElementById('dailyTipText').innerHTML =
        `Con tu <strong style="color:var(--text)">${bpr.banco_billetera}</strong>, el mejor día es el <strong style="color:var(--accent)">${getDayName(bd)}</strong> en <strong style="color:var(--text)">${bpr.supermercado}</strong> → ${bpr.desc}. Agregá productos y presioná <strong style="color:var(--text)">Comparar</strong>.`;
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}