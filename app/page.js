export default function Page() {
  return (
    <>
      <header>
        <div className="header-inner">
          <a href="#" className="logo">
            <div className="logo-icon">🛒</div>
            super<span>compare</span>
          </a>
          <div className="location-pill" onClick="openLocationModal()">
            <div className="dot"></div>
            <span id="locationLabel">Mi ciudad</span>
            <span style={{fontSize:'10px',color:'var(--muted)'}}>▾</span>
          </div>
          <nav className="nav-tabs">
            <button className="nav-tab active" data-tab="comparar" onClick="switchTab('comparar')">⚖️ Comparar</button>
            <button className="nav-tab" data-tab="canasta" onClick="switchTab('canasta')">🧺 Canasta</button>
            <button className="nav-tab" data-tab="carrito" onClick="switchTab('carrito')">🛒 Carrito</button>
            <button className="nav-tab" data-tab="promos" onClick="switchTab('promos')">🏷️ Promos</button>
            <button className="nav-tab" data-tab="historial" onClick="switchTab('historial')">📊 Historial</button>
          </nav>
        </div>
      </header>

      <nav className="mobile-tabs">
        <button className="mobile-tab active" data-tab="comparar" onClick="switchTab('comparar')"><span className="tab-icon">⚖️</span>Comparar</button>
        <button className="mobile-tab" data-tab="canasta" onClick="switchTab('canasta')"><span className="tab-icon">🧺</span>Canasta</button>
        <button className="mobile-tab" data-tab="carrito" onClick="switchTab('carrito')"><span className="tab-icon">🛒</span>Carrito</button>
        <button className="mobile-tab" data-tab="promos" onClick="switchTab('promos')"><span className="tab-icon">🏷️</span>Promos</button>
        <button className="mobile-tab" data-tab="historial" onClick="switchTab('historial')"><span className="tab-icon">📊</span>Historial</button>
      </nav>

      <div className="loading-overlay hidden" id="loadingOverlay">
        <div style={{fontSize:'34px'}}>🛒</div>
        <div className="loading-title">Buscando los mejores precios...</div>
        <div className="loading-steps">
          <div className="loading-step" id="step-carrefour"><span className="step-icon">🔵</span> Consultando Carrefour...</div>
          <div className="loading-step" id="step-jumbo"><span className="step-icon">🟢</span> Consultando Jumbo...</div>
          <div className="loading-step" id="step-chango"><span className="step-icon">🟠</span> Consultando Chango Más...</div>
          <div className="loading-step" id="step-anonima"><span className="step-icon">🔴</span> Consultando La Anónima...</div>
          <div className="loading-step" id="step-maxi"><span className="step-icon">🟣</span> Consultando Maxi Consumo...</div>
          <div className="loading-step" id="step-coope"><span className="step-icon">🩵</span> Consultando La Coope...</div>
          <div className="loading-step" id="step-ai"><span className="step-icon">🤖</span> Analizando con IA...</div>
        </div>
      </div>

      <div className="modal-bg hidden" id="locationModal">
        <div className="modal">
          <div className="modal-header"><div className="modal-title">📍 Tu ciudad</div></div>
          <div className="modal-body">
            <div>
              <div className="form-label">Ciudad o localidad</div>
              <input className="input" id="locationInput" placeholder="Ej: Bahía Blanca, Buenos Aires..." />
              <p style={{fontSize:'11px',color:'var(--muted)',marginTop:'8px'}}>ℹ️ Los precios son del sitio web de cada supermercado (precios online).</p>
            </div>
            <div>
              <div className="form-label">O detectá tu ciudad</div>
              <button className="btn btn-ghost" onClick="useGeoLocation()" id="geoBtn">📡 Detectar ciudad</button>
              <span id="geoStatus" style={{fontSize:'11px',color:'var(--muted)',marginLeft:'8px'}}></span>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-ghost" onClick="closeModal('locationModal')">Cancelar</button>
            <button className="btn btn-primary" onClick="saveLocation()">Guardar</button>
          </div>
        </div>
      </div>

      <main className="container">
        <div className="page active" id="page-comparar">
          <div className="alert alert-blue mb-20">
            <div className="alert-icon">💡</div>
            <div>
              <div className="alert-title" style={{color:'#60A5FA'}}>¿Cómo funciona?</div>
              <div className="alert-body" id="dailyTipText">Escribí cualquier producto, agregalo a tu canasta y presioná <strong>Comparar precios</strong>. Después elegís en qué super comprás cada cosa.</div>
            </div>
          </div>
          <div className="card mb-20">
            <div className="card-header">
              <span className="card-title">Tu canasta</span>
              <div className="flex gap-8">
                <span id="canastaCount" className="badge badge-blue">0 productos</span>
                <button className="btn btn-ghost btn-sm" onClick="switchTab('canasta')">Editar</button>
              </div>
            </div>
            <div style={{padding:'13px 18px',borderBottom:'1px solid var(--border)'}}>
              <div className="search-wrap">
                <span className="search-icon">🔍</span>
                <input className="input" id="quickSearch" placeholder="Ej: casancrem, leche entera, Skip..." autoComplete="off"
                  onInput="handleSearch(this.value)" onBlur="setTimeout(hideSuggestions,200)" />
                <div className="suggestions" id="suggestions"></div>
              </div>
            </div>
            <div id="canastaPreview">
              <div className="empty-state" style={{padding:'35px 20px'}}>
                <div className="empty-icon">🧺</div>
                <div className="empty-title">Canasta vacía</div>
                <div className="empty-sub">Escribí cualquier producto arriba para agregar.</div>
              </div>
            </div>
            <div style={{padding:'13px 18px',borderTop:'1px solid var(--border)',display:'flex',gap:'9px',justifyContent:'flex-end'}}>
              <button className="btn btn-ghost btn-sm" onClick="clearCanasta()">🗑️ Vaciar</button>
              <button className="btn btn-primary" onClick="runComparison()">⚖️ Comparar precios</button>
            </div>
          </div>
          <div id="resultsSection" style={{display:'none'}}>
            <div className="ai-panel mb-20">
              <div className="ai-panel-header">
                <span style={{fontSize:'19px'}}>🤖</span>
                <div>
                  <div style={{fontFamily:"'Syne',sans-serif",fontSize:'13px',fontWeight:700,color:'#60A5FA'}}>Análisis de IA</div>
                  <div style={{fontSize:'11px',color:'var(--muted)'}}>SuperCompare Intelligence</div>
                </div>
              </div>
              <div id="aiContent"><div className="ai-thinking"><div className="spinner"></div>Analizando...</div></div>
            </div>
            <div className="flex justify-between items-center mb-12">
              <div className="section-title" style={{marginBottom:0}}>Resultados por producto</div>
              <button className="btn btn-primary btn-sm" onClick="switchTab('carrito')">🛒 Ver mi carrito</button>
            </div>
            <div id="productResults"></div>
          </div>
        </div>

        <div className="page" id="page-canasta">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h1 style={{fontFamily:"'Syne',sans-serif",fontSize:'20px',fontWeight:800}}>Mi Canasta Habitual</h1>
              <p style={{fontSize:'12px',color:'var(--muted)',marginTop:'4px'}}>Se guarda automáticamente en tu dispositivo.</p>
            </div>
            <button className="btn btn-primary" onClick="switchTab('comparar');setTimeout(runComparison,300)">⚖️ Comparar</button>
          </div>
          <div className="search-wrap mb-16">
            <span className="search-icon">🔍</span>
            <input className="input" id="canastaSearch" placeholder="Escribí cualquier producto para agregar..." autoComplete="off"
              onInput="handleSearchCanasta(this.value)" onBlur="setTimeout(hideSuggestionsCanasta,200)" />
            <div className="suggestions" id="suggestions-canasta"></div>
          </div>
          <div className="card">
            <div className="card-header">
              <span className="card-title">Productos guardados</span>
              <span className="badge badge-blue" id="canastaTotal">0</span>
            </div>
            <div id="canastaFullList">
              <div className="empty-state"><div className="empty-icon">🛒</div><div className="empty-title">Tu canasta está vacía</div><div className="empty-sub">Buscá productos arriba para agregarlos.</div></div>
            </div>
          </div>
        </div>

        <div className="page" id="page-carrito">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h1 style={{fontFamily:"'Syne',sans-serif",fontSize:'20px',fontWeight:800}}>Mi Carrito Optimizado</h1>
              <p style={{fontSize:'12px',color:'var(--muted)',marginTop:'4px'}}>Elegís vos en qué super comprás cada cosa.</p>
            </div>
            <button className="btn btn-ghost btn-sm" onClick="clearCarrito()">🗑️ Limpiar</button>
          </div>
          <div id="carritoContent">
            <div className="empty-state" style={{padding:'55px 20px'}}>
              <div className="empty-icon">🛒</div>
              <div className="empty-title">Tu carrito está vacío</div>
              <div className="empty-sub">Comparé precios primero y después elegí en qué super comprás cada producto.</div>
              <button className="btn btn-primary" style={{marginTop:'14px'}} onClick="switchTab('comparar')">⚖️ Ir a comparar</button>
            </div>
          </div>
        </div>

        <div className="page" id="page-promos">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h1 style={{fontFamily:"'Syne',sans-serif",fontSize:'20px',fontWeight:800}}>Promociones Bancarias</h1>
              <p style={{fontSize:'12px',color:'var(--muted)',marginTop:'4px'}}>Descuentos por banco y billetera.</p>
            </div>
          </div>
          <div className="section-title">Elegí el día</div>
          <div className="days-row" id="daysRow"></div>
          <div className="section-title mt-20" id="promosDayTitle">Promociones del día</div>
          <div className="promo-list" id="promosList"></div>
          <div className="alert alert-green mt-20" id="bestDayAlert" style={{display:'none'}}>
            <div className="alert-icon">🏆</div>
            <div>
              <div className="alert-title" style={{color:'var(--green)'}} id="bestDayTitle"></div>
              <div className="alert-body" id="bestDayBody"></div>
            </div>
          </div>
          <div className="card mt-20">
            <div className="card-header">
              <span className="card-title">Mis métodos de pago</span>
              <button className="btn btn-ghost btn-sm" onClick="openPaymentModal()">+ Agregar</button>
            </div>
            <div style={{padding:'13px 18px'}}>
              <div className="flex gap-8 flex-wrap" id="paymentChips"></div>
            </div>
          </div>
        </div>

        <div className="page" id="page-historial">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h1 style={{fontFamily:"'Syne',sans-serif",fontSize:'20px',fontWeight:800}}>Historial</h1>
              <p style={{fontSize:'12px',color:'var(--muted)',marginTop:'4px'}}>Tus últimas comparaciones.</p>
            </div>
          </div>
          <div className="card">
            <div className="hist-list" id="historialList">
              <div className="empty-state" style={{padding:'45px 20px'}}>
                <div className="empty-icon">📊</div>
                <div className="empty-title">Sin historial aún</div>
                <div className="empty-sub">Hacé tu primera comparación.</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="modal-bg hidden" id="paymentModal">
        <div className="modal">
          <div className="modal-header"><div className="modal-title">💳 Mis métodos de pago</div></div>
          <div className="modal-body">
            <div>
              <div className="form-label">Seleccioná tus bancos o billeteras</div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px'}} id="paymentOptions"></div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-ghost" onClick="closeModal('paymentModal')">Cerrar</button>
          </div>
        </div>
      </div>
    </>
  );
}