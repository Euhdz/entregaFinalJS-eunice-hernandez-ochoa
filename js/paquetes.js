const pintarPaquetes = (data) => {
  const contenedor = document.getElementById("paquete-contenedor");
  data.forEach((paquete) => {
    const div = document.createElement("div");
    div.classList.add("col-lg-4");
    div.innerHTML += `
  <div class="container d-flex flex-column card-paquetes">
    <div class="row card-paquetes__title pt-3">
      <h2>${paquete.nombre}</h2>
    </div>
    <div class="row">
      <img
        src="${paquete.foto}" 
        alt="Montaje de comida y cafe"
      />
    </div>
    <div class="row card-paquetes__descripcion">
      <ul class="card-paquetes__descripcion__lista">
        <li>${paquete.incluye}</li>
        <li>${paquete.coffbreak}</li>
        <li>${paquete.alimento}</li>
      </ul>
    </div>
    <div class="row mx-auto mb-3 px-5 pt-3">
      <button class="btn btn-seleccionar seleccionarPaq" id=${paquete.id} type="submit">
        Seleccionar
      </button>
    </div>
  </div>
`;
    contenedor.appendChild(div);
  });
};

document.addEventListener("DOMContentLoaded", pintarPaquetes(paquetes));
