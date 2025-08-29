function abrirMenu() {
  document.getElementById("menu-lateral").style.width = "250px";
}

function cerrarMenu() {
  document.getElementById("menu-lateral").style.width = "0";
}

function abrirMenu() {
  document.getElementById("menu-lateral").style.width = "250px";
}

function cerrarMenu() {
  document.getElementById("menu-lateral").style.width = "0";
}

function mostrarSeccion(seccion) {
  let contenedor = document.getElementById("contenido-dinamico");
  let contenido = "";

  switch(seccion) {
    case "polos":
      contenido = `
        <h2>👕 Polos</h2>
        <div class="producto-lista">
          <div class="producto">Polo básico blanco</div>
          <div class="producto">Polo negro estampado</div>
          <div class="producto">Polo deportivo</div>
        </div>`;
      break;

    case "casacas":
      contenido = `
        <h2>🧥 Casacas</h2>
        <div class="producto-lista">
          <div class="producto">Casaca de cuero</div>
          <div class="producto">Casaca deportiva</div>
          <div class="producto">Casaca jean</div>
        </div>`;
      break;

    case "pantalones":
      contenido = `
        <h2>👖 Pantalones</h2>
        <div class="producto-lista">
          <div class="producto">Jeans skinny</div>
          <div class="producto">Joggers</div>
          <div class="producto">Pantalón formal</div>
        </div>`;
      break;

    case "zapatillas":
      contenido = `
        <h2>👟 Zapatillas</h2>
        <div class="producto-lista">
          <div class="producto">Zapatillas deportivas</div>
          <div class="producto">Zapatillas casuales</div>
          <div class="producto">Zapatillas running</div>
        </div>`;
      break;

    case "damas":
      contenido = `
        <h2>👩‍🦱 Sección Damas</h2>
        <p>Explora la moda femenina más reciente.</p>`;
      break;

    case "caballeros":
      contenido = `
        <h2>🧑 Sección Caballeros</h2>
        <p>Encuentra ropa moderna para hombres.</p>`;
      break;

    case "niños":
      contenido = `
        <h2>🧒 Sección Niños</h2>
        <p>Moda divertida y cómoda para los pequeños.</p>`;
      break;

    case "hogar":
      contenido = `
        <h2>🛏️ Hogar</h2>
        <p>Descubre productos para tu casa y familia.</p>`;
      break;

    default:
      contenido = `<h2>Selecciona una sección del menú</h2>`;
  }

  contenedor.innerHTML = contenido;
  cerrarMenu(); // se cierra el menú después de elegir
}