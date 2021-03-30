module.exports = {
    mascotas: [
      { tipo: "canguro", nombre: "ranis", dueno: "Pedro" },
      { tipo: "canguro", nombre: "Foky", dueno: "Pedro" },
      { tipo: "canguro", nombre: "Skyper", dueno: "Pedro" },
      { tipo: "canguro", nombre: "Aguacatito", dueno: "Pedro" },
      { tipo: "canguro", nombre: "Binla", dueno: "Pedro" },
    ],
    veterinarias: [
      { nombre: "Pila", apellido: "Perez", documento: "44344343" },
      { nombre: "Rosa", apellido: "Gómez", documento: "44343456" },
      { nombre: "pepe", apellido: "Zamorano", documento: "76889898" },
      { nombre: "Naty", apellido: "Moque", documento: "655767676" },
    ],
    duenos: [
      { nombre: "Alejandra", apellido: "Ramirez", documento: "21212122" },
      { nombre: "Juan", apellido: "Fernandez", documento: "089989878" },
      { nombre: "Silvia", apellido: "Hernandez", documento: "6565656" },
      { nombre: "Emilio", apellido: "Molina", documento: "43455654" },
    ],
    consultas: [
      {
        mascota: 0,
        veterinaria: 0,
        fechaCreacion: new Date(),
        fechaEdicion: new Date(),
        historia: "",
        diagnostico: "diagnostico",
      },
    ],
  };