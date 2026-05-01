# TP1 — Proyecto Web en Equipo · Grupo N° 18

**IFTS N° 29 — Desarrollo de Sistemas Web (Front End) - 2° D**

🔗 **Deploy en Vercel:** `https://tp1-web-grupal.vercel.app`
🔗 **Repositorio:** `[https://github.com/hugotorrent/tp1_web_grupal.git]`

---

## Descripción del Proyecto

Este trabajo práctico consiste en un sitio web grupal desarrollado con HTML, CSS y JavaScript Vanilla (sin frameworks), con una estética inspirada en terminales de consola estilo hacker/cyberpunk. El objetivo es presentar al equipo N° 18, con una portada principal que enlaza a las tarjetas de presentación individuales de cada integrante, una sección de bitácora del proceso de desarrollo, y una navegación responsive funcional en todos los dispositivos.

---

## Integrantes

| Nombre | GitHub |
|---|---|
| Hugo Alberto Torrent | `https://github.com/hugotorrent` |
| Luciano Reguera | `https://github.com/diegoale528` |
| Diego Gonzalez | `https://github.com/lucianoreguera` |

---

## Tecnologías Utilizadas

- **HTML5** — Estructura semántica de todas las páginas
- **CSS3** — Estilos, animaciones, Flexbox, CSS Grid y Responsive Design
- **JavaScript (Vanilla JS)** — Interactividad sin dependencias externas
- **Google Fonts** — Tipografía JetBrains Mono
- **Git & GitHub** — Control de versiones y repositorio
- **Vercel** — Publicación y deploy del proyecto

---

## Estructura de Archivos

```
tp1-web/
│
├── index.html          # Portada principal del sitio
├── hugo.html           # Tarjeta de presentación — Hugo Torrent
├── luciano.html        # Tarjeta de presentación — Luciano Reguera 
├── diego.html          # Tarjeta de presentación — Diego Gonzalez 
├── bitacora.html       # Registro del proceso de desarrollo
│
├── css/
│   └── style.css       # Hoja de estilos global (tema terminal)
│
├── js/
│   └── main.js         # Funciones de interactividad JavaScript
│
└── img/
    ├── hugo_pixel.png      # Avatar de Hugo (generado con IA)
    ├── luciano_pixel.png   # Avatar de Luciano (generado con IA)
    ├── Diego_pixel.png     # Avatar de Diego (generado con IA)
    └── hugo_img/           # Imágenes de películas y discos de Hugo
    └── luciano_img/        # Imágenes de películas y discos de Luciano
    └── diego_img/          # Imágenes de películas y discos de Diego
    └── README_img/          # Imágenes de Capturas de pantalla 
```



---

## Guía de Estilos

### Paleta de Colores

| Rol | Nombre | Hex |
|---|---|---|
| Fondo principal | Background | `#0a0a0a` |
| Fondo tarjetas | Background Card | `#0f0f0f` |
| Fondo tarjetas secundario | Background Card 2 | `#141414` |
| Borde | Border | `#1a2a1a` |
| Acento principal | Green Neon | `#00ff41` |
| Acento secundario | Green Dim | `#00cc33` |
| Acento oscuro | Green Dark | `#003300` |
| Texto principal | Text | `#ccffcc` |
| Texto secundario | Text Dim | `#4a7a4a` |

### Tipografías

- **JetBrains Mono** (Google Fonts) — Usada en todo el sitio como fuente principal, tanto para títulos como para el cuerpo del texto.
  - 🔗 [Ver en Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono)
  - Pesos utilizados: 300, 400, 500, 700

### Iconografía y Avatares

- Se utilizan **emojis nativos** como íconos de interfaz (📍, 🎂, 💻, etc.), sin librería externa.
- Los **avatares** de los tres integrantes son imágenes de estilo pixel art generadas con Inteligencia Artificial, respetando la privacidad de cada miembro al no utilizar fotografías reales.

---

## JavaScript — Funciones Dinámicas

Todas las funciones se encuentran en `js/main.js` y se inicializan mediante `initPage()` al cargar el DOM.

### `navbarToggle()` — Menú hamburguesa (todas las páginas)

Controla la apertura y cierre del menú de navegación en dispositivos móviles. Al hacer clic, el ícono de tres líneas se transforma en una "X" mediante transformaciones CSS animadas. Al seleccionar un enlace del menú, este se cierra automáticamente.

**📸 Captura:** *(Insertar captura del menú hamburguesa cerrado y abierto en mobile — ~390px de ancho)*
![alt text](./img/README/Captura_de_pantalla_menu_hamburguesa.png)

---

### `showTeamMessage()` — Mensaje dinámico del equipo (index.html)

Al hacer clic en el botón `init_saludo.sh` de la portada, se despliega una caja de mensaje con texto de bienvenida. Cada clic sucesivo rota entre 4 mensajes distintos con una animación de `fadeIn`. El botón cambia su etiqueta a `next_message.sh` después del primer clic.

**📸 Captura:** 
![alt text](./img/README/Captura_de_pantalla_mensg.png)

---

### `toggleSkills()` — Mostrar/Ocultar Habilidades (hugo.html)

En la tarjeta de Hugo,Luciano y Diego, el botón `[ocultar]` / `[mostrar]` colapsa o despliega la lista de habilidades. El estado del botón y el atributo `aria-expanded` se actualizan en consecuencia. También se puede activar haciendo clic en el encabezado de la sección.

**📸 Captura:** 
![alt text](./img/README/Captura_de_pantalla_d_habilidades.png)
---
![alt text](./img/README/Captura_de_pantalla_habilidades.png)

---

### `markActiveNavLink()` — Enlace activo en la navbar (todas las páginas)

Detecta la página actual comparando `window.location.pathname` con el atributo `href` de cada enlace de la navbar, y agrega la clase `active` al enlace correspondiente para resaltarlo visualmente.

---

### `setFooterYear()` — Año dinámico en el footer (todas las páginas)

Escribe el año actual en el footer de forma dinámica usando `new Date().getFullYear()`, evitando que el año quede desactualizado de forma manual.

---

## Capturas de Pantalla

### Portada — `index.html`

**📸 Captura (Desktop — 1200px+):**
![alt text](./img/README/Captura_de_pantalla_total.png)

**📸 Captura (Tablet — 900px):** 
---
![alt text](./img/README/Captura_de_pantalla_900px.png)
**📸 Captura (Mobile — 400px):**
---
![alt text](./img/README/Captura_de_pantalla_mobile.png)


---

### Bitácora — `bitacora.html`

**📸 Captura:** 
---
![alt text](./img/README/Captura_de_pantalla_Bitacora.png)
---

## Uso de Inteligencia Artificial

### Herramientas utilizadas

| Herramienta | Modelo | Uso |
|---|---|---|
| **Gemini** | Gemini3.1 | Revisión frente a la rúbrica del TP, redacción técnica. |

### Uso en Contenido y Código

- **Diseño y animaciones CSS:** La IA asistió en el desarrollo de los efectos temáticos de terminal, como las animaciones `flicker` (parpadeo de fósforo), `scanlines` (líneas de escaneo CRT) y `glow-pulse` (pulso de brillo neón), que definen la estética del sitio.
- **JavaScript:** Se utilizó IA para estructurar la lógica de las funciones de interactividad,  `showTeamMessage()` y `toggleSkills()`.
- **Debugging:** La IA colaboró en la resolución de problemas de desborde en resoluciones tablet y en la animación del menú hamburguesa.

### Imágenes generadas con IA

Los avatares de los tres integrantes (`hugo_pixel.png`, `luciano_pixel.png`, `Diego_pixel.png`) fueron generados con IA con un estilo de **pixel art**, siguiendo el criterio de la temática de terminal del sitio. No se utilizaron fotografías reales para resguardar la privacidad de los integrantes.

- **Modelo utilizado:** `[Nano Banana]`
- **Prompt general:** `[A highly detailed, high-resolution pixel art image with a strict monochrome green color palette. The entire scene is presented on a dark, curved retro CRT monitor with a visible scanline texture and screen noise. The composition is structured within a complex, interlocking neon-green geometric panel frame, resembling a sci-fi cyber-terminal or data interface. Inside the frame is a central, intricate pixel-art [INSERT SUBJECT HERE, e.g., a cybernetic cat / a custom portrait from image_XXX.png], rendered with rich detail. Outside the frame, the dark screen is filled with a matrix of cascading binary code streams and detailed abstract circuit board traces. Multiple retro-terminal interface panels with pixelated text are integrated into the layout. At the top right, a panel with pixelated text and icons reads: '$ USER_INFO', followed by specific lines like: 'NAME: [INSERT NAME HERE]', 'ROLE: [INSERT ROLE HERE]', 'STATUS: [ACTIVE]', 'CLEARANCE: [INSERT CLEARANCE LEVEL]', 'LAST LOG: [INSERT CODE/DATE]'. Other functional-looking data panels with text 'SYSTEM_READOUT', 'BIOMETRIC_DATA', and a small 'DISK_DRIVE_A:' icon are integrated into the lower sections. Small stylized icons like a bracket {} and a text cursor '$' are scattered around. A large command prompt line at the bottom center of the entire screen is active, with a blinking pixel cursor, reading: '$ BIO_INIT [INSERT SUBJECT_ID]'. The entire image has a pervasive glowing green light and an old-school, technical readout feel.]`

---

## Enlace al Proyecto Desplegado

🚀 **Vercel:** `https://tp1-web-grupal.vercel.app/`

---

