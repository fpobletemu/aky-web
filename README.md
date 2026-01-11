# 🍣 Akysushi - Sitio Web Oficial

> **Sushi Barra y Delivery en Puente Alto**  
> La mejor experiencia culinaria japonesa con entrega a domicilio

## 🌟 Acerca del Proyecto

Akysushi es un restaurante especializado en sushi y comida japonesa ubicado en Puente Alto. Este proyecto representa la renovación completa del sitio web institucional, manteniendo las tecnologías web fundamentales (HTML5, CSS3, JavaScript vanilla) pero implementando un diseño moderno, responsive y una experiencia de usuario optimizada.

![Akysushi Banner](assets/images/brand/akysushi-banner.png)

## ✨ Características Principales

- 🍱 **Catálogo Completo**: Navegación intuitiva por categorías de productos
- 📱 **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- 🛍️ **Experiencia de Compra**: Interfaz moderna para visualización de productos
- 📍 **Zona de Delivery**: Mapa interactivo de cobertura de reparto
- 🎨 **Diseño Renovado**: Interface moderna con animaciones suaves
- ⚡ **Rendimiento Optimizado**: Carga rápida y navegación fluida

## 🏗️ Estructura del Proyecto

```
aky-web/
├── index.html                     # Página principal
├── akysushi-home.html             # Landing page renovada
├── akysushi-menu.html             # Catálogo de productos
├── akysushi-delivery.html         # Mapa de cobertura
├── README.md                      # Documentación principal
├── ESTRUCTURA-PROYECTO.md         # Documentación técnica
│
├── assets/
│   ├── data/
│   │   ├── akysushi-products.json     # Base de datos de productos
│   │   └── akysushi-promotions.json   # Promociones del carrusel
│   │
│   ├── images/
│   │   ├── brand/                     # Logos y elementos de marca
│   │   ├── products/                  # Imágenes de productos
│   │   │   ├── cards/                 # Tarjetas de productos
│   │   │   ├── categories/            # Iconos de categorías
│   │   │   └── promotions/            # Banner de promociones
│   │   
│   ├── scripts/
│   │   ├── akysushi-core.js           # Funcionalidad principal
│   │   ├── akysushi-menu.js           # Sistema de carta
│   │   └── akysushi-promotions.js     # Carrusel de promociones
│   │
│   └── styles/
│       ├── akysushi-main.css          # Estilos principales
│       └── akysushi-menu-legacy.css   # Estilos legacy
```

## 🚀 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y moderna
- **CSS3**: Variables CSS, Grid, Flexbox, animaciones
- **JavaScript ES6+**: Fetch API, clases, async/await
- **Bootstrap 5**: Grid system y componentes responsive

### Librerías y Frameworks
- **Bootstrap Icons**: Iconografía moderna
- **Boxicons**: Conjunto adicional de iconos
- **Google Fonts**: Tipografía (Open Sans, Raleway, Poppins)

### Herramientas de Desarrollo
- **Git**: Control de versiones
- **VS Code**: Editor de código
- **Live Server**: Servidor de desarrollo

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Navegadores móviles (iOS Safari, Chrome Mobile)

### Dispositivos
- 📱 **Móviles**: Desde 320px
- 📱 **Tablets**: 768px - 1024px
- 💻 **Desktop**: 1024px - 1440px
- 🖥️ **Large Screens**: 1440px+

## 🛠️ Instalación y Uso

### Desarrollo Local

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/aky-web.git
   cd aky-web
   ```

2. **Servidor local (recomendado)**:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js
   npx http-server
   
   # Con PHP
   php -S localhost:8000
   ```

3. **Acceder al sitio**:
   - Abrir en navegador: `http://localhost:8000`
   - Archivo principal: `index.html`

### Producción
- Subir archivos a servidor web (Apache, Nginx)
- Configurar dominio y SSL
- Optimizar imágenes para web

## 🎨 Personalización

### Colores Corporativos
Las variables CSS están definidas en `assets/styles/akysushi-main.css`:

```css
:root {
  --primary-color: #d32f2f;      /* Rojo Akysushi */
  --primary-dark: #b71c1c;       /* Rojo oscuro */
  --accent-color: #ffd700;       /* Dorado */
  --text-dark: #2c2c2c;          /* Texto oscuro */
  --bg-light: #ffffff;           /* Fondo claro */
  --bg-gray: #f5f5f5;            /* Fondo gris */
}
```

### Agregar Productos
Editar `assets/data/akysushi-products.json` siguiendo la estructura:

```json
{
  "id": "producto-001",
  "nombre": "Roll California",
  "categoria": "rolls",
  "precio": "4500",
  "descripcion": "Palta, pepino, kanikama",
  "imagen": "assets/images/products/cards/california.jpg"
}
```

## 📞 Información de Contacto

### Datos del Restaurante
- 📍 **Dirección**: Juan de Dios Malebran 1750, Local 8, Ciudad del Sol, Puente Alto
- 📱 **WhatsApp**: [+56 9 7234 7615](https://wa.me/56972347615)
- 📞 **Teléfono**: [2 2711 5840](tel:+56227115840)
- 📧 **Email**: contacto@akysushi.cl

### Redes Sociales
- 📘 **Facebook**: [@akysushi](https://facebook.com/akysushi)
- 📷 **Instagram**: [@akysushi](https://instagram.com/akysushi)

## 🔄 Changelog

### Versión 2.0 (Enero 2026)
- ✅ Diseño completamente renovado
- ✅ Arquitectura de archivos reorganizada
- ✅ Implementación de CSS Grid y Flexbox
- ✅ JavaScript moderno con ES6+
- ✅ Sistema de filtros mejorado
- ✅ Optimización para móviles
- ✅ Carrusel de promociones responsive
- ✅ Mejoras en accesibilidad y SEO

### Versión 1.0 (2024)
- ⭐ Sitio web original
- ⭐ Catálogo básico de productos
- ⭐ Información de contacto

## 🤝 Contribuciones

Este es un proyecto privado para Akysushi. Las contribuciones están limitadas al equipo de desarrollo autorizado.

### Desarrolladores
- **Desarrollo Original**: Equipo Akysushi
- **Renovación 2026**: Fernando Poblete
- **Diseño UX/UI**: Equipo de Diseño

## 📝 Licencia

© 2026 Akysushi. Todos los derechos reservados.

Este proyecto es propiedad exclusiva de Akysushi y está protegido por derechos de autor. No está permitida la reproducción, distribución o modificación sin autorización expresa.

## 🍣 ¡Disfruta Akysushi!

**El mejor sushi de Puente Alto te espera**

---

*Desarrollado con ❤️ para los amantes del sushi*

![Akysushi Logo](assets/images/brand/akysushi-logo.png)