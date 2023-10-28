document.addEventListener("DOMContentLoaded", cargarNumIngresado);

let numIngresado = 0; // Número de personas del paquete que ingresará el visitante a la página

const numBasePersonas = Number(10); // Número de personas que incluye la renta base del jardín

const numMaxPersonas = Number(200); // Número de personas máximo de personas para paquetes

let numExtraPersonas = 0; // Resultado de diferencia entre el numIngresado y el numBasePersonas (i.e. num personas que incluye la renta base del jardín)

const rentaBaseJardin = Number(7000); // Precio base de renta jardín (contempla num minimo de personas)

const rentaXpExtraJardin = Number(200); //Precio correspondiente al jardín por persona adicional a las incluidas en al renta base

let rentaExtraJardin = 0; //Resultado de multiplicar numExtraPersonas * rentaXpersonaExtraJardin

let subtotalAlimentos = 0; //Resultado de multiplicar el precio de alimentos del paquete seleccionado por el numIngresado

let subtotalPaq = 0; // Resultado de sumar subtotalAlimentos + subtotalRentaJardin

let subtotalPaqXpersona = 0; // Resultado de dividir subtotalPaq / numIngresado

const iva = parseFloat(0.16); // Tasa de iva en México

let ivaPaq = 0; // Resultado de multiplicar subtotalPaq * iva

let totalPaq = 0; // Resultado de sumar subtotalPaq + ivaPaq

let totalPaqXpersona = 0; // Resultado de dividir totalPaq / numIngresado

let paqueteSeleccionado;

// INGRESAR NUMERO DE PERSONAS AL COTIZADOR

const enviar = document.querySelector(".enviar");

const ingresanum = document.querySelector(".ingresa-num");

enviar.addEventListener("click", function () {
  numIngresado = parseInt(ingresanum.value);

  if (numIngresado <= numBasePersonas) {
    numIngresado = 10;
  } else if (numIngresado >= numMaxPersonas) {
    numIngresado = 200;
  }

  ingresanum.value = numIngresado;

  guardarNumIngresadoStorage();

  calcNumExtraPersonas(numIngresado);
});

// Estimar el número de personas adicionales a la base para obtener el costo de renta del jardín

const calcNumExtraPersonas = function (numIngresado) {
  numExtraPersonas = numIngresado - numBasePersonas;

  return numExtraPersonas;
};

// Función de cotización para el número de personas ingresado dependiendo del paquete seleccionado

const paqueteContenedor = document.getElementById("paquete-contenedor");

paqueteContenedor.addEventListener("click", (e) => {
  if (e.target.classList.contains("seleccionarPaq")) {
    const paqueteId = e.target.id;

    const paquete = paquetes.find((paquete) => paquete.id == paqueteId);

    let numPersonasExtra = calcNumExtraPersonas(numIngresado);

    subtotalRentaJardin =
      rentaBaseJardin + numPersonasExtra * rentaXpExtraJardin;

    subtotalAlimentos = numIngresado * paquete.precio;

    subtotalPaq = subtotalRentaJardin + subtotalAlimentos;

    ivaPaq = iva * subtotalPaq;

    totalPaq = subtotalPaq + ivaPaq;

    totalPaqXpersona = parseInt(totalPaq / numIngresado);

    paqueteSeleccionado = paquete;

    // Modal que muestra la cotización y llevaal formulario si el usuario desea continuar para ser contactado

    Swal.fire({
      title: "Cotización Preliminar",
      html: `Seleccionaste el paquete ${paquete.nombre} para ${numIngresado} personas. <br > Sub Total : $ ${subtotalPaq}  <br > Iva : $ ${ivaPaq} <br > Total : $ ${totalPaq} <br > Total por persona : $ ${totalPaqXpersona}`,
      imageUrl: `${paquete.foto}`,
      showCancelButton: true,
      confirmButtonColor: "$color-1brand", //checar cómo hago para que tome los colores que definí en mi css
      cancelButtonColor: "$color-2brand",
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.setItem("paqueteNombreSeleccionado", paquete.nombre);
        sessionStorage.setItem("numTotalPersonas", numIngresado);
        sessionStorage.setItem("subtotalPaq", subtotalPaq);
        sessionStorage.setItem("ivaPaq", ivaPaq);
        sessionStorage.setItem("totalPaq", totalPaq);

        location.href = "contacto.html";
      } else {
        sessionStorage.clear();
      }
    });
  }
});

//OJO: CHECAR COMO EVITO QUE AL OPRIMIR COTIZACION DE OTRA PAGINA, EN LA SECCION DE COMENTARIOS DEL FORMULARIO NO APAREZCA EL TEXTO DE LA COTIZACION

//Storage local del número ingresado para mantener el valor si se cierra la sesión y el usuario regresa después.

const guardarNumIngresadoStorage = () => {
  localStorage.setItem("numIngresado", JSON.stringify(numIngresado));
};

const obtenerNumIngresadoStorage = () => {
  return JSON.parse(localStorage.getItem(numIngresado));
};

function cargarNumIngresado() {
  if (localStorage.getItem("numIngresado")) {
    numIngresado = localStorage.getItem("numIngresado");
    console.log(numIngresado);
    pintarNumIngresado(numIngresado);
  }
}

const pintarNumIngresado = (numIngresado) => {
  let numStored = document.querySelector(".ingresa-num");
  numStored.value = numIngresado;
};
