document.addEventListener("DOMContentLoaded", llenarInformacionPaquetes, false);

function llenarInformacionPaquetes() {
  let nomPaquete = sessionStorage.getItem("paqueteNombreSeleccionado");

  let totalPersonas = sessionStorage.getItem("numTotalPersonas");

  let subTotal = sessionStorage.getItem("subtotalPaq");

  let iva = sessionStorage.getItem("ivaPaq");

  let total = sessionStorage.getItem("totalPaq");

  if (
    nomPaquete != null &&
    totalPersonas != null &&
    subTotal != null &&
    iva != null &&
    total != null
  ) {
    let mensajeFinal = `Me gustaría información sobre el paquete ${nomPaquete}, con un total de personas ${totalPersonas} con este calculo previo: \n SubTotal: $ ${subTotal} \n IVA: $${iva} \n Total: $${total}`;

    let texArea = document.getElementById("detalleContacto");

    texArea.innerHTML = mensajeFinal;

    sessionStorage.clear();
  }
}
