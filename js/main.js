/**
 * main.js — TP1 Web | Hugo Torrent
 * Funciones:
 *  1. navbarToggle()      — Hamburger menu para mobile
 *  2. showTeamMessage()   — Interacción dinámica en index.html
 *  3. toggleSkills()      — Mostrar/ocultar habilidades en hugo.html
 *  4. initPage()          — Inicialización general
 */

/* ── 1. Navbar Mobile Toggle ───────────────────────────────── */
function navbarToggle() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);

    // Animate hamburger → X
    const spans = toggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // Cerrar el menú al hacer clic en un enlace (mobile)
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      const spans = toggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });
}

/* ── 2. Interacción dinámica — index.html ──────────────────── */
/**
 * showTeamMessage()
 * Muestra un mensaje de bienvenida al equipo al hacer clic en el botón.
 * Alterna entre mostrar y ocultar el mensaje.
 */
function showTeamMessage() {
  const btn = document.getElementById('btnTeamMessage');
  const box = document.getElementById('teamMessageBox');

  if (!btn || !box) return;

  const messages = [
    'Bienvenido al sistema. Acceso concedido. Explorá las páginas del equipo.',
    'Stack: HTML · CSS · JavaScript. Sin frameworks. Sin dependencias. Puro código.',
    'Usá el menú de navegación para acceder a los perfiles individuales del equipo.',
    'Diseño responsive: 400px · 900px · 1200px. Probá en cualquier dispositivo.',
  ];

  let currentIndex = 0;

  btn.addEventListener('click', () => {
    if (box.classList.contains('visible')) {
      // Si ya es visible, mostrar el siguiente mensaje
      currentIndex = (currentIndex + 1) % messages.length;
      box.textContent = messages[currentIndex];
      box.style.animation = 'none';
      // Forzar re-render para reiniciar animación
      void box.offsetWidth;
      box.style.animation = '';
    } else {
      box.textContent = messages[currentIndex];
      box.classList.add('visible');
      btn.textContent = 'next_message.sh';
    }
  });
}

/* ── 3. Toggle de Habilidades — hugo.html ──────────────────── */
/**
 * toggleSkills()
 * Despliega u oculta la lista de habilidades en la tarjeta de perfil.
 * Actualiza el texto del botón según el estado.
 */
function toggleSkills() {
  const btn = document.getElementById('skillsToggleBtn');
  const skillList = document.getElementById('skillsList');

  if (!btn || !skillList) return;

  btn.addEventListener('click', () => {
    const isHidden = skillList.classList.toggle('hidden');
    btn.textContent = isHidden ? '[mostrar]' : '[ocultar]';
    btn.setAttribute('aria-expanded', !isHidden);
  });

  // Click en el header de la sección también togglea
  const header = document.getElementById('skillsHeader');
  if (header) {
    header.addEventListener('click', (e) => {
      // Solo si no se hizo clic directo en el botón
      if (e.target !== btn) btn.click();
    });
  }
}

/* ── 4. Marcar enlace activo en la navbar ──────────────────── */
function markActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ── 5. Año dinámico en el footer ──────────────────────────── */
function setFooterYear() {
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ── Inicialización ────────────────────────────────────────── */
function initPage() {
  navbarToggle();
  showTeamMessage();
  toggleSkills();
  markActiveNavLink();
  setFooterYear();
}

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', initPage);
