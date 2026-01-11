/**
 * Akysushi - Carga de Promociones (Carrusel)
 * Desarrollado por: Fernando Poblete
 * Fecha: Enero 2026
 * Sistema moderno con Fetch API
 */

class PromosManager {
  constructor() {
    this.dataUrl = 'assets/data/akysushi-promotions.json';
    this.carouselContainer = document.querySelector('#carousel-inner-promos');
    this.indicatorsContainer = document.querySelector('#carousel-indicators-promos');
    this.init();
  }

  /**
   * Inicializar carga de promociones
   */
  async init() {
    try {
      await this.cargarPromos();
    } catch (error) {
      this.mostrarError('Error al cargar las promociones.');
      console.error('Error en PromosManager:', error);
    }
  }

  /**
   * Cargar datos de promociones desde JSON
   */
  async cargarPromos() {
    try {
      const response = await fetch(this.dataUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const datos = await response.json();
      this.renderizarPromos(datos);
    } catch (error) {
      throw new Error(`Error al cargar promociones: ${error.message}`);
    }
  }

  /**
   * Renderizar las promociones en el carrusel
   */
  renderizarPromos(datos) {
    if (!this.carouselContainer) {
      console.warn('Contenedor de carrusel no encontrado');
      return;
    }

    this.carouselContainer.innerHTML = '';

    // Renderizar items del carrusel
    datos.forEach((item, index) => {
      const activeClass = index === 0 ? 'active' : '';
      const itemHTML = this.crearItemCarrusel(item, activeClass);
      this.carouselContainer.innerHTML += itemHTML;
    });

    // Renderizar indicadores
    this.renderizarIndicadores(datos.length);
  }

  /**
   * Renderizar indicadores del carrusel
   */
  renderizarIndicadores(cantidad) {
    if (!this.indicatorsContainer) {
      console.warn('Contenedor de indicadores no encontrado');
      return;
    }

    this.indicatorsContainer.innerHTML = '';

    for (let i = 0; i < cantidad; i++) {
      const activeClass = i === 0 ? 'active' : '';
      const indicator = document.createElement('button');
      indicator.type = 'button';
      indicator.setAttribute('data-bs-target', '#carouselPromos');
      indicator.setAttribute('data-bs-slide-to', i);
      indicator.setAttribute('aria-label', `Slide ${i + 1}`);
      if (activeClass) {
        indicator.classList.add('active');
        indicator.setAttribute('aria-current', 'true');
      }
      this.indicatorsContainer.appendChild(indicator);
    }
  }

  /**
   * Crear HTML para un item del carrusel
   */
  crearItemCarrusel(item, activeClass) {
    return `
      <div class="carousel-item ${activeClass}" data-bs-interval="3000">
        <img src="${item.URL}" class="d-block w-100" alt="${item.DESC || 'Promoción'}" loading="lazy">
      </div>
    `;
  }

  /**
   * Mostrar mensaje de error
   */
  mostrarError(mensaje) {
    if (this.carouselContainer) {
      this.carouselContainer.innerHTML = `
        <div class="carousel-item active">
          <div class="error-message" style="padding: 4rem; text-align: center;">
            <i class="bi bi-exclamation-triangle" style="font-size: 3rem;"></i>
            <p style="margin-top: 1rem;">${mensaje}</p>
          </div>
        </div>
      `;
    }
  }
}

// Inicializar cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', () => {
  console.log('PromosManager: Iniciando...');
  new PromosManager();
});
