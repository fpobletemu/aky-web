# Akysushi - Sitio Web Renovado 🍣

## Versión Mejorada 2026

Este proyecto es una versión completamente renovada del sitio web de Akysushi, manteniendo las tecnologías originales (HTML, CSS, JavaScript vanilla) pero con un diseño moderno y código optimizado.

---

## 🎯 Mejoras Implementadas

### 1. **Diseño Visual Moderno**
- ✅ Sistema de variables CSS para fácil personalización
- ✅ Paleta de colores profesional para restaurante de sushi
- ✅ Diseño responsive mejorado para todos los dispositivos
- ✅ Animaciones suaves y transiciones modernas
- ✅ Hero section impactante con llamados a la acción claros
- ✅ Tipografía optimizada y jerarquía visual clara

### 2. **Código Modernizado**
- ✅ JavaScript con Fetch API (reemplaza XMLHttpRequest)
- ✅ Clases ES6 para mejor organización del código
- ✅ Manejo de errores robusto con try-catch
- ✅ Código más limpio y mantenible
- ✅ Comentarios detallados en español
- ✅ Mejor separación de responsabilidades

### 3. **Experiencia de Usuario (UX)**
- ✅ Navegación intuitiva y fluida
- ✅ Filtros de carta mejorados con animaciones
- ✅ Carrusel de promociones optimizado
- ✅ Información de contacto más accesible
- ✅ Página de mapa de reparto mejorada
- ✅ Botones de WhatsApp prominentes para pedidos rápidos

### 4. **Rendimiento**
- ✅ Carga lazy de imágenes
- ✅ CSS optimizado con mejor estructura
- ✅ JavaScript modular y eficiente
- ✅ Mejor uso de caché del navegador

### 5. **Accesibilidad y SEO**
- ✅ HTML semántico correcto
- ✅ Atributos ARIA donde corresponde
- ✅ Meta tags optimizados
- ✅ Alt text en todas las imágenes
- ✅ Navegación por teclado mejorada

---

## 📁 Estructura del Proyecto

```
aky-web/
├── index-new.html          # Página principal renovada
├── mapa-new.html           # Página de mapa renovada
│
├── css/
│   └── style.css           # Estilos modernos con variables CSS
│
├── js/
│   ├── main.js             # Script principal (navegación, scroll, etc.)
│   ├── carta.js            # Carga y renderizado de la carta
│   └── promos.js           # Carga del carrusel de promociones
│
├── data/
│   ├── akysushi.json       # Datos de productos (sin cambios)
│   └── slider-data.json    # Datos de promociones (sin cambios)
│
├── images/                  # Imágenes del sitio
├── assets/vendor/          # Librerías de terceros (Bootstrap, etc.)
└── README-NEW.md           # Esta documentación
```

---

## 🚀 Archivos Principales Nuevos

### HTML
- **`index-new.html`**: Página principal con estructura moderna
- **`mapa-new.html`**: Página de zona de reparto mejorada

### CSS
- **`css/style.css`**: Sistema completo de estilos con:
  - Variables CSS personalizables
  - Grid layouts responsive
  - Animaciones y transiciones
  - Modo oscuro listo para implementar

### JavaScript
- **`js/main.js`**: 
  - Navegación responsive
  - Scroll suave
  - Animaciones al scroll
  - Manejo de filtros con Isotope
  
- **`js/carta.js`**: 
  - Clase `CartaManager` para gestionar productos
  - Fetch API moderno
  - Renderizado dinámico optimizado
  - Manejo robusto de errores
  
- **`js/promos.js`**: 
  - Clase `PromosManager` para carrusel
  - Carga asíncrona de promociones
  - Bootstrap carousel integration

---

## 🎨 Paleta de Colores

```css
--primary-color: #d32f2f     /* Rojo principal */
--primary-dark: #b71c1c      /* Rojo oscuro */
--primary-light: #ff6659     /* Rojo claro */
--accent-color: #ffd700      /* Dorado acento */
--bg-dark: #0a0a0a          /* Fondo oscuro */
--bg-light: #ffffff         /* Fondo claro */
--bg-gray: #f5f5f5          /* Fondo gris */
```

---

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 **Móviles**: < 480px
- 📱 **Tablets**: 480px - 768px
- 💻 **Desktop**: 768px - 1200px
- 🖥️ **Large Desktop**: > 1200px

---

## 🔧 Características Técnicas

### CSS Moderno
- CSS Grid y Flexbox para layouts
- Variables CSS (Custom Properties)
- Animaciones con @keyframes
- Media queries mobile-first
- Scroll personalizado

### JavaScript
- ES6+ (Clases, Arrow Functions, Template Literals)
- Fetch API para peticiones HTTP
- Async/Await para código asíncrono
- Event Delegation
- Manejo de errores con try-catch

### Frameworks/Librerías Utilizadas
- **Bootstrap 5**: Grid system y componentes
- **Bootstrap Icons**: Iconografía
- **Boxicons**: Iconos adicionales
- **Isotope**: Sistema de filtros
- **Google Fonts**: Tipografía

---

## 🌐 Navegadores Soportados

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Móviles (iOS Safari, Chrome Mobile)

---

## 📦 Cómo Usar

1. **Abrir el sitio**: 
   - Abre `index-new.html` en tu navegador
   - O configura un servidor local

2. **Servidor local (recomendado)**:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx http-server
   ```

3. **Acceder**:
   - Ve a `http://localhost:8000/index-new.html`

---

## 🔄 Comparación: Antes vs Ahora

### ANTES (Versión Original)
- ❌ XMLHttpRequest antiguo
- ❌ CSS sin variables
- ❌ Diseño básico
- ❌ Poca organización del código
- ❌ Sin manejo de errores
- ❌ Responsive básico

### AHORA (Versión Renovada)
- ✅ Fetch API moderno
- ✅ Sistema de variables CSS
- ✅ Diseño profesional y atractivo
- ✅ Código limpio y organizado
- ✅ Manejo robusto de errores
- ✅ Responsive optimizado para todos los dispositivos

---

## 🎯 Próximas Mejoras Sugeridas

1. **Sistema de Carrito**: Agregar funcionalidad de carrito de compras
2. **Calculadora de Delivery**: Calcular costo según dirección
3. **Sistema de Login**: Para clientes frecuentes
4. **Historial de Pedidos**: Guardar pedidos anteriores
5. **Modo Oscuro**: Toggle para cambiar tema
6. **PWA**: Convertir en Progressive Web App
7. **Optimización de Imágenes**: WebP y lazy loading avanzado

---

## 📝 Notas para Desarrolladores

### Personalización de Colores
Edita las variables en `css/style.css`:
```css
:root {
  --primary-color: #tu-color;
  --secondary-color: #tu-color;
  /* etc... */
}
```

### Agregar Nuevos Productos
Edita `data/akysushi.json` siguiendo la estructura existente.

### Agregar Nuevas Promociones
Edita `data/slider-data.json` y agrega las imágenes en `images/sushi/slider-promo/`.

---

## 🐛 Solución de Problemas

### Los productos no cargan
- ✅ Verifica que `data/akysushi.json` esté accesible
- ✅ Abre la consola del navegador (F12) para ver errores
- ✅ Asegúrate de estar usando un servidor local

### Los filtros no funcionan
- ✅ Verifica que Isotope esté cargando correctamente
- ✅ Revisa la consola para errores de JavaScript

### Las imágenes no se muestran
- ✅ Verifica las rutas en los archivos JSON
- ✅ Asegúrate de que las imágenes existan en la carpeta correcta

---

## 📞 Contacto Akysushi

- 📍 **Dirección**: Juan de Dios Malebran 1750, Local 8, Ciudad del Sol, Puente Alto
- 📱 **WhatsApp**: +56 9 7234 7615
- 📞 **Teléfono**: 2 2711 5840
- 📧 **Email**: contacto@akysushi.cl
- 📘 **Facebook**: @akysushi
- 📷 **Instagram**: @akysushi

---

## 📄 Licencia

Este proyecto es propiedad de Akysushi. Todos los derechos reservados © 2026.

---

## 👨‍💻 Créditos

- **Desarrollo Original**: Equipo Akysushi
- **Renovación y Mejoras**: 2026
- **Frameworks**: Bootstrap, Isotope
- **Iconos**: Bootstrap Icons, Boxicons
- **Fuentes**: Google Fonts

---

## 🎉 ¡Gracias!

Esperamos que disfrutes de la nueva versión del sitio web de Akysushi. Si tienes sugerencias o encuentras algún problema, no dudes en contactarnos.

**¡Buen provecho! 🍣**
