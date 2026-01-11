/**
 * Carta Manager - Sistema de carga y filtrado de productos
 * Desarrollado por: Fernando Poblete
 * Fecha: Enero 2026
 */

class CartaManager {
  constructor() {
    this.dataUrl = 'assets/data/akysushi-products.json';
    this.productsGrid = document.getElementById('productsGrid');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.allProducts = [];
    this.currentFilter = 'all';
    
    this.init();
  }

  async init() {
    try {
      await this.loadProducts();
      this.setupFilters();
      this.setupBackToTop();
    } catch (error) {
      console.error('Error inicializando carta:', error);
      this.showError();
    }
  }

  async loadProducts() {
    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) throw new Error('Error al cargar productos');
      
      const data = await response.json();
      this.allProducts = this.processProducts(data);
      this.renderProducts(this.allProducts);
      
      console.log(`✅ ${this.allProducts.length} productos cargados`);
    } catch (error) {
      throw new Error(`Error cargando productos: ${error.message}`);
    }
  }

  processProducts(data) {
    return data.map(item => ({
      id: item.ID,
      titulo: item.Titulo,
      tipo: item.Tipo,
      precios: this.extractPrices(item),
      categoria: this.getCategory(item)
    }));
  }

  extractPrices(item) {
    const prices = [];
    
    // Si tiene arrays de Envoltura y Precio
    if (item.Envoltura && item.Precio && Array.isArray(item.Envoltura) && Array.isArray(item.Precio)) {
      for (let i = 0; i < Math.min(item.Envoltura.length, item.Precio.length); i++) {
        const envoltura = item.Envoltura[i];
        const precio = item.Precio[i];
        
        // Simplificar nombres de envoltura
        let label = envoltura;
        let icon = 'bi-circle-fill';
        
        if (envoltura.toLowerCase().includes('sésamo') || envoltura.toLowerCase().includes('ciboulette')) {
          label = 'Sésamo/Ciboulette';
          icon = 'bi-circle-fill';
        } else if (envoltura.toLowerCase().includes('palta') || envoltura.toLowerCase().includes('tempura') || envoltura.toLowerCase().includes('masago') || envoltura.toLowerCase().includes('queso')) {
          label = 'Palta/Tempura/Masago';
          icon = 'bi-record-circle-fill';
        } else if (envoltura.toLowerCase().includes('atún') || envoltura.toLowerCase().includes('salmón') || envoltura.toLowerCase().includes('pollo')) {
          label = 'Atún/Salmón/Pollo';
          icon = 'bi-star-fill';
        } else if (envoltura.toLowerCase().includes('alga')) {
          label = 'Envuelto en Alga';
          icon = 'bi-record-circle-fill';
        } else {
          label = envoltura.length > 25 ? envoltura.substring(0, 22) + '...' : envoltura;
        }
        
        prices.push({ label, icon, value: precio });
      }
    }
    // Fallback para formato antiguo
    else {
      if (item.Normal) prices.push({ label: 'Roll Normal', icon: 'bi-circle-fill', value: item.Normal });
      if (item.Alga) prices.push({ label: 'Envuelto en Alga', icon: 'bi-record-circle-fill', value: item.Alga });
      if (item.Empanizado) prices.push({ label: 'Empanizado', icon: 'bi-star-fill', value: item.Empanizado });
      if (item.Precio && !Array.isArray(item.Precio)) prices.push({ label: 'Precio Especial', icon: 'bi-tag-fill', value: item.Precio });
    }
    
    return prices;
  }

  getCategory(item) {
    const id = item.ID;
    const tipo = item.Tipo ? item.Tipo.toLowerCase() : '';
    
    // Promociones
    if (id.includes('P') || id.includes('RG')) return 'promociones';
    
    // Por tipo
    if (tipo.includes('nigiri') || tipo.includes('sashimi')) return 'nigiri';
    if (tipo.includes('especialidad')) return 'especialidades';
    
    // Default: clásicos
    return 'clasicos';
  }

  renderProducts(products) {
    if (!this.productsGrid) return;
    
    this.productsGrid.innerHTML = products.map(product => this.createProductCard(product)).join('');
  }

  createProductCard(product) {
    const hasMultiplePrices = product.precios.length > 1;
    const priceTitle = hasMultiplePrices ? 'Precios según envoltura:' : 'Precio:';
    
    const pricesHTML = product.precios.map(price => `
      <div class="price-row">
        <span class="price-label">
          <i class="bi ${price.icon}"></i>
          <span class="price-text">${price.label}</span>
        </span>
        <span class="price-value">$${this.formatPrice(price.value)}</span>
      </div>
    `).join('');

    return `
      <div class="product-card" data-category="${product.categoria}">
        <div class="product-image">
          <span class="product-badge">N° ${product.id}</span>
        </div>
        <div class="product-content">
          <h4 class="product-title">${product.titulo}</h4>
          <div class="product-prices">
            <div class="price-header">${priceTitle}</div>
            <div class="prices-list">
              ${pricesHTML}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  formatPrice(price) {
    if (typeof price === 'string') {
      // Remover caracteres no numéricos excepto puntos y comas
      const cleanPrice = price.replace(/[^0-9.,]/g, '').trim();
      // Si tiene punto como separador de miles, convertir
      if (cleanPrice.includes('.') && !cleanPrice.includes(',')) {
        return parseFloat(cleanPrice).toLocaleString('es-CL');
      }
      return cleanPrice;
    }
    if (typeof price === 'number') {
      return price.toLocaleString('es-CL');
    }
    return price;
  }

  setupFilters() {
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        this.applyFilter(filter);
        
        // Update active state
        this.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  applyFilter(filter) {
    this.currentFilter = filter;
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

    console.log(`🔍 Filtro aplicado: ${filter}`);
  }

  setupBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  showError() {
    if (this.productsGrid) {
      this.productsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
          <i class="bi bi-exclamation-triangle" style="font-size: 3rem; color: var(--primary-color);"></i>
          <h3 style="margin-top: 1rem;">Error al cargar los productos</h3>
          <p style="color: var(--text-secondary);">Por favor, recarga la página</p>
        </div>
      `;
    }
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new CartaManager();
  });
} else {
  new CartaManager();
}

// Mobile navigation
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navbar = document.querySelector('.navbar ul');
  
  if (mobileToggle && navbar) {
    mobileToggle.addEventListener('click', () => {
      navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
    });
  }
});

console.log('🍣 Carta Manager cargado');
