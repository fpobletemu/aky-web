/**
 * Akysushi - Script Principal
 * Desarrollado por: Fernando Poblete
 * Fecha: Enero 2026
 * Manejo de navegación, scroll y interacciones generales
 */

(function() {
  'use strict';

  console.log('Main.js cargado');

  // ============================================
  // UTILIDADES
  // ============================================
  
  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  // ============================================
  // NAVEGACIÓN Y SCROLL
  // ============================================

  /**
   * Toggle del menú móvil
   */
  on('click', '.mobile-nav-toggle', function(e) {
    const navbar = select('#navbar');
    const icon = this.querySelector('i');
    
    navbar.classList.toggle('navbar-mobile');
    
    if (icon.classList.contains('bi-list')) {
      icon.classList.remove('bi-list');
      icon.classList.add('bi-x');
    } else {
      icon.classList.remove('bi-x');
      icon.classList.add('bi-list');
    }
  });

  /**
   * Cerrar menú móvil al hacer click en un link
   */
  on('click', '.navbar a', function(e) {
    const navbar = select('#navbar');
    if (navbar.classList.contains('navbar-mobile')) {
      navbar.classList.remove('navbar-mobile');
      const toggle = select('.mobile-nav-toggle i');
      if (toggle) {
        toggle.classList.remove('bi-x');
        toggle.classList.add('bi-list');
      }
    }
  }, true);

  /**
   * Scroll suave a secciones
   */
  const scrollto = (el) => {
    const header = select('#header');
    const offset = header ? header.offsetHeight : 0;
    const element = select(el);
    
    if (element) {
      const elementPos = element.offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      });
    }
  };

  on('click', '.scrollto', function(e) {
    if (this.hash && select(this.hash)) {
      e.preventDefault();
      scrollto(this.hash);
    }
  }, true);

  /**
   * Activar links de navegación según scroll
   */
  const navbarlinks = select('#navbar .scrollto', true);
  const navbarlinksActive = () => {
    const position = window.scrollY + 200;
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      const section = select(navbarlink.hash);
      if (!section) return;
      
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  };

  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scroll con hash en la URL
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const element = select(window.location.hash);
      if (element) {
        setTimeout(() => scrollto(window.location.hash), 100);
      }
    }
  });

  // ============================================
  // HEADER
  // ============================================

  /**
   * Agregar clase al header cuando se hace scroll
   */
  const selectHeader = select('#header');
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
      } else {
        selectHeader.classList.remove('header-scrolled');
      }
    };
    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled);
  }

  // ============================================
  // BOTÓN VOLVER ARRIBA
  // ============================================

  const backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  // ============================================
  // SISTEMA DE FILTROS CON ISOTOPE
  // ============================================

  let portfolioIsotope = null;
  
  const initIsotope = () => {
    // Primero verificamos que los contenedores existan y tengan elementos
    const tarjetasCarta = select('#tarjeta');
    const tarjetasCartaPromo = select('#promosCard');
    
    if (!tarjetasCarta && !tarjetasCartaPromo) {
      console.warn('Contenedores de productos no encontrados');
      return;
    }
    
    // Verificar si hay elementos cargados
    const itemsCarta = tarjetasCarta ? tarjetasCarta.querySelectorAll('.portfolio-item') : [];
    const itemsPromo = tarjetasCartaPromo ? tarjetasCartaPromo.querySelectorAll('.portfolio-item') : [];
    
    if (itemsCarta.length === 0 && itemsPromo.length === 0) {
      console.log('Esperando a que se carguen los productos...');
      return;
    }
    
    console.log(`Productos encontrados: ${itemsCarta.length} rolls, ${itemsPromo.length} promos`);
    
    if (typeof Isotope === 'undefined') {
      console.error('Isotope no está cargado');
      return;
    }
    
    // Inicializar Isotope para cada contenedor si tiene elementos
    setTimeout(() => {
      if (tarjetasCarta && itemsCarta.length > 0) {
        portfolioIsotope = new Isotope(tarjetasCarta, {
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows'
        });
        console.log('Isotope inicializado para carta');
      }
      
      if (tarjetasCartaPromo && itemsPromo.length > 0) {
        const promosIsotope = new Isotope(tarjetasCartaPromo, {
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows'
        });
        console.log('Isotope inicializado para promos');
      }
      
      // Configurar eventos de click para todos los filtros
      setupFilterEvents();
    }, 300);
  };
  
  const setupFilterEvents = () => {
    const allFilterButtons = document.querySelectorAll('#portfolio-flters li');
    const tarjetasCarta = select('#tarjeta');
    const tarjetasCartaPromo = select('#promosCard');
    const portafolioCarta = select('#sep');
    
    console.log(`Configurando ${allFilterButtons.length} botones de filtro`);
    
    allFilterButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Click en filtro:', this.getAttribute('data-filter'));
        
        // Remover clase activa de TODOS los filtros
        allFilterButtons.forEach(btn => btn.classList.remove('filter-active'));
        
        // Agregar clase activa al filtro clickeado
        this.classList.add('filter-active');
        
        const filterValue = this.getAttribute('data-filter');
        const filterClass = filterValue === '*' ? null : filterValue.replace('.', '');
        
        // Mostrar los contenedores
        if (tarjetasCarta) {
          tarjetasCarta.classList.remove('esconder');
          tarjetasCarta.classList.add('mostrar');
        }
        
        if (tarjetasCartaPromo) {
          tarjetasCartaPromo.classList.remove('esconder');
          tarjetasCartaPromo.classList.add('mostrar');
        }
        
        // Scroll suave al área de productos
        if (portafolioCarta) {
          setTimeout(() => {
            portafolioCarta.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'nearest' 
            });
          }, 100);
        }
        
        // Filtrar items en ambos contenedores usando CSS puro
        const allItems = document.querySelectorAll('#tarjeta .portfolio-item, #promosCard .portfolio-item');
        allItems.forEach(item => {
          if (!filterClass || item.classList.contains(filterClass)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
        
        // Re-layout después de filtrar
        setTimeout(() => {
          if (portfolioIsotope) {
            portfolioIsotope.layout();
          }
        }, 100);
      });
    });
  };

  // Inicializar cuando la carta esté cargada
  window.addEventListener('cartaLoaded', () => {
    console.log('Evento cartaLoaded recibido - Inicializando filtros');
    setTimeout(() => {
      initFilters();
    }, 200);
  });

  // ============================================
  // ANIMACIONES AL SCROLL
  // ============================================

  const animateOnScroll = () => {
    const elements = select('.portfolio-item', true);
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);

  // ============================================
  // CONSOLE LOG
  // ============================================
  
  console.log('%c🍣 Akysushi Website Loaded Successfully! ', 'background: #d32f2f; color: white; font-size: 16px; padding: 10px;');

})();
