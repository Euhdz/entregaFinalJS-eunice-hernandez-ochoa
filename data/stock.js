"use strict";

//Sección de paquetes.   PENDIENTE CAMBIAR LAS FOTOS SEGUN EL PAQUETE Y MEJORAR FORMATO DE LAS TARJETAS.

let idPaq = 1;

const paquetes = [
  {
    id: idPaq++,
    categoria: "Coffee-break",
    nombre: "Paquete JSU Básico Plus",
    foto: "../img/paquete-coffee-alimentos-f7.jpg",
    incluye:
      "<strong>Incluye:</strong> 4 hrs de evento en JSU \n Mesas y sillas, vajilla, cubertería y equipo de servicio",
    coffbreak:
      "<strong>Coffee Break Plus:</strong> café americano, té, botellitas de agua, pastas finas surtidas y fruta de mano",
    alimento: "",
    precio: 180,
  },

  {
    id: idPaq++,
    categoria: "Desayuno",
    nombre: "JSU Básico Plus con Desayuno emplatado",
    foto: "../img/paquete-coffee-alimentos-f7.jpg",
    incluye:
      "<strong>Incluye:</strong> 4 hrs de evento en JSU \n Mesas y sillas, vajilla, cubertería y equipo de servicio",
    coffbreak:
      "<strong>Coffee Break Plus:</strong> café americano, té, botellitas de agua, pastas finas surtidas y fruta de mano",
    alimento:
      "<strong>Desayuno:</strong> Fruta rebanada, chilaquiles verdes, frijoles refritos, pan dulce.",
    precio: 320,
  },

  {
    id: idPaq++,
    categoria: "Desayuno",
    nombre: "Paquete JSU Básico Plus con Desayuno buffet",
    foto: "../img/paquete-coffee-alimentos-f7.jpg",
    incluye:
      "<strong>Incluye:</strong> 4 hrs de evento en JSU \n Mesas y sillas, vajilla, cubertería y equipo de servicio",
    coffbreak:
      "<strong>Coffee Break Plus:</strong> café americano, té, botellitas de agua, pastas finas surtidas y fruta de mano",
    alimento:
      "<strong>Desayuno en montaje tipo buffet:</strong> Fruta rebanada, frittata con jamón, chilaquiles verdes, frijoles refritos, pan dulce.",
    precio: 390,
  },

  {
    id: idPaq++,
    categoria: "Comida",
    nombre: "Paquete JSU Básico Plus con Comida emplatado",
    foto: "../img/paquete-coffee-alimentos-f7.jpg",
    incluye:
      "<strong>Incluye:</strong> 4 hrs de evento en JSU \n Mesas y sillas, vajilla, cubertería y equipo de servicio",
    coffbreak:
      "<strong>Coffee Break Plus:</strong> café americano, té, botellitas de agua, pastas finas surtidas y fruta de mano",
    alimento:
      "<strong>Comida:</strong> Sopa minestrone, arrachera de res con papas a la francesa y ensalada o pechuga de pollo en salsa marinara con pasta y ensalada, flan napolitano. Agua de sabor.",
    precio: 465,
  },

  {
    id: idPaq++,
    categoria: "Comida",
    nombre: "Paquete JSU Básico Plus con Comida buffet",
    foto: "../img/paquete-coffee-alimentos-f7.jpg",
    incluye:
      "<strong>Incluye:</strong> 4 hrs de evento en JSU \n Mesas y sillas, vajilla, cubertería y equipo de servicio",
    coffbreak:
      "<strong>Coffee Break Plus:</strong> café americano, té, botellitas de agua, pastas finas surtidas y fruta de mano",
    alimento:
      "<strong> Comida en montaje tipo buffet:</strong> Ensalada mixta, fajitas de arrachera, fajitas de pollo, frijoles refritos, papas a la francesa, verduras al vapor y postres. Agua de sabor.",
    precio: 530,
  },

  {
    id: idPaq++,
    categoria: "Desayuno y Comida",
    nombre: "Paquete JSU Básico Plus con Desayuno y Comida",
    foto: "../img/paquete-coffee-alimentos-f7.jpg",
    incluye:
      "<strong>Incluye:</strong> 4 hrs de evento en JSU \n Mesas y sillas, vajilla, cubertería y equipo de servicio",
    coffbreak:
      "<strong>Coffee Break Plus:</strong> café americano, té, botellitas de agua, pastas finas surtidas y fruta de mano",
    alimento:
      "<strong>Desayuno:</strong> Fruta rebanada, chilaquiles verdes, frijoles refritos, pan dulce.\n <strong>Comida:</strong> Sopa minestrone, arrachera de res con papas a la francesa y ensalada o pechuga de pollo en salsa marinara con pasta y ensalada, flan napolitano. Agua de sabor.",
    precio: 605,
  },
];
