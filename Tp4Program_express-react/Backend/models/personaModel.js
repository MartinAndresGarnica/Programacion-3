const personas = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    edad: 28,
    email: "juan.perez@email.com"
  },
  {
    id: 2,
    nombre: "María",
    apellido: "González",
    edad: 32,
    email: "maria.gonzalez@email.com"
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "Rodríguez",
    edad: 45,
    email: "carlos.rodriguez@email.com"
  },
  {
    id: 4,
    nombre: "Ana",
    apellido: "López",
    edad: 29,
    email: "ana.lopez@email.com"
  },
  {
    id: 5,
    nombre: "Luis",
    apellido: "Martínez",
    edad: 35,
    email: "luis.martinez@email.com"
  },
  {
    id: 6,
    nombre: "Sofia",
    apellido: "Fernández",
    edad: 26,
    email: "sofia.fernandez@email.com"
  }
];

const obtenerPersonas = () => {
  return personas;
};

module.exports = {
  obtenerPersonas
};