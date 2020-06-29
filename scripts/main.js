var seccionesPagina = new fullpage("#fullpage", {
 
  // Basico
  // ──────────────────────────────────────────────────
  autoScrolling: true, // Sirve par activar el scroll.
  fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
  fitToSectionDelay: 400, // Delay antes de acomodar la seccion automaticamente.
  easing: "easeInOutCubic", // Funcion de tiempo de la animacion.
  scrollingSpeed: 500, // Velocidad del scroll en milisegundos
  css3: true, // Para que use css3
  easingcss3: "ease-out", // Curva de la velocidad
 

  // Barra de navegación
  // ──────────────────────────────────────────────────
  navigation: true, // Sirve para mostrar la barra de navegación.
  menu: "#menu", // Menu de navegación.
  anchors: ["home", "projects", "about", "contact"], // Anclas para acceder mediante el menu
  navigationTooltips: ["Home", "Projects", "About", "Contact"], // Tooltips de los botones.
  showActiveTooltip: false, //Muestra siempre el tooltip
  sectionsColor : ['#011627', '#011627', '#011627', '#011627']
});
