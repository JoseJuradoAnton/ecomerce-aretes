const products = [
  {
    id: 1,
    name: "Brillantes Tornasolados",
    price: 270,
    image: "../../src/assets/brillantes.png",
    description:
      "LOS TONOS DEL CRISTAL SON BRILLANTES Y EN ALGUNOS TORNASOLADOS",
  },
  {
    id: 2,
    name: "Collar moon",
    price: 249.99,
    image: "../../src/assets/collar-moon.png",
    description:
      "Collar doble con dije de luna y estrella. Elaborado en plata 925.",
  },
  {
    id: 3,
    name: "Set RUBY",
    price: 289,
    image: "../../src/assets/ruby.png",
    description: "SET DE RUBY",
  },
  {
    id: 4,
    name: "Mechanical KeyboardSET ROSA ENCANTADA",
    price: 59,
    image: "../../src/assets/rosa-encantada.png",
    description:
      "RSet con dije de flor con circón fucsia. Elaborado en cobre bañado en oro de 18k..",
  },
  {
    id: 5,
    name: "COLLAR MERYL",
    price: 39.99,
    image: "../../src/assets/dije-corazon.png",
    description:
      "Collar con dije de corazón de cristal. Elaborado en plata 925.",
  },
  {
    id: 6,
    name: "ARETES DELICATE",
    price: 219,
    image: "../../src/assets/aretes-rose.png",
    description: "Aretes en forma de rosa. Elaborado en plata bañada en oro.",
  },
  {
    id: 7,
    name: "ARETES PEPAS",
    price: 40,
    image: "../../src/assets/aretes-pepas.png",
    description: "Aretes Tipo Gota",
  },
  {
    id: 8,
    name: "arete tuc",
    price: 89.99,
    image: "../../src/assets/aretes-turco.png",
    description: "Ojo Turco con circones",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
