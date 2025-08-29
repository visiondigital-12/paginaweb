const modal = document.getElementById("modalUbicacion");
const abrirModal = document.getElementById("abrirModal");
const cerrarModal = document.getElementById("cerrarModal");
const paisesSelect = document.getElementById("paises");
const ciudadesSelect = document.getElementById("ciudades");
const ciudadContainer = document.getElementById("ciudad-container");
const confirmarUbicacion = document.getElementById("confirmarUbicacion");

// Diccionario con ciudades por país
const datos = {
  argentina: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
  bolivia: ["La Paz", "Sucre", "Santa Cruz de la Sierra", "Cochabamba"],
  brasil: ["São Paulo", "Río de Janeiro", "Brasilia", "Salvador"],
  chile: ["Santiago", "Valparaíso", "Concepción", "Antofagasta"],
  colombia: ["Bogotá", "Medellín", "Cali", "Barranquilla"],
  ecuador: ["Quito", "Guayaquil", "Cuenca", "Ambato"],
  guyana: ["Georgetown", "New Amsterdam", "Bartica"],
  paraguay: ["Asunción", "Ciudad del Este", "Encarnación"],
  peru: ["Lima", "Cusco", "Arequipa", "Trujillo", "Chachapoyas"],
  surinam: ["Paramaribo", "Lelydorp", "Nieuw Nickerie"],
  uruguay: ["Montevideo", "Salto", "Paysandú", "Maldonado"],
  venezuela: ["Caracas", "Maracaibo", "Valencia", "Barquisimeto"]
};

// 🔹 Abrir modal
abrirModal.onclick = () => {
  modal.style.display = "block";
};

// 🔹 Cerrar modal
cerrarModal.onclick = () => {
  modal.style.display = "none";
};
window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
};

// 🔹 Cargar ciudades según país
paisesSelect.addEventListener("change", function() {
  const pais = paisesSelect.value;
  if (pais) {
    ciudadesSelect.innerHTML = `<option value="">-- Selecciona una ciudad --</option>`;
    datos[pais].forEach(ciudad => {
      const option = document.createElement("option");
      option.value = ciudad.toLowerCase();
      option.textContent = ciudad;
      ciudadesSelect.appendChild(option);
    });
    ciudadContainer.style.display = "block";
  } else {
    ciudadContainer.style.display = "none";
  }
});

// 🔹 Confirmar ubicación y guardar en localStorage
confirmarUbicacion.addEventListener("click", () => {
  const pais = paisesSelect.options[paisesSelect.selectedIndex]?.text;
  const ciudad = ciudadesSelect.options[ciudadesSelect.selectedIndex]?.text;

  if (pais && ciudad && ciudad !== "-- Selecciona una ciudad --") {
    // Guardamos en localStorage
    localStorage.setItem("ubicacion", JSON.stringify({ pais, ciudad }));

    alert(`Has seleccionado: ${ciudad}, ${pais}`);
    modal.style.display = "none";
    mostrarUbicacionGuardada();
  } else {
    alert("Por favor selecciona un país y una ciudad.");
  }
});

// 🔹 Mostrar ubicación guardada al cargar la página
function mostrarUbicacionGuardada() {
  const ubicacionGuardada = localStorage.getItem("ubicacion");
  if (ubicacionGuardada) {
    const { pais, ciudad } = JSON.parse(ubicacionGuardada);
    abrirModal.textContent = `📍 ${ciudad}, ${pais}`;
  }
}

// Ejecutar al cargar
mostrarUbicacionGuardada();

