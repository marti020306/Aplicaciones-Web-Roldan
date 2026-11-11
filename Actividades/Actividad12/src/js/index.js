

// 1. ARREGLOS
// a. Carga de 5 números en un arreglo

const numeros = [];

for (let i = 0; i < 5; i++) {
  const ingreso = prompt(`Ingrese el número ${i + 1} de 5:`);
  numeros.push(Number(ingreso));
}

console.log("Arreglo completo:", numeros);

// b. Condicional para guardar solo números impares

const numerosImpares = [];

for (let i = 0; i < 5; i++) {
  const ingreso = Number(prompt(`Ingrese el número ${i + 1} de 5:`));
  if (ingreso % 2 !== 0) {
    numerosImpares.push(ingreso);
  }
}

console.log("Arreglo solo con impares:", numerosImpares);

// c. Convertir nombres a MAYÚSCULAS con forEach()

const frutas = ["pera", "manzana", "banana", "durazno"];

frutas.forEach((fruta, indice, arreglo) => {
  arreglo[indice] = fruta.toUpperCase();
});

console.log("Frutas en mayúsculas (forEach):", frutas);

//d. Crear nuevo arreglo en MAYÚSCULAS con map()

const frutasBase = ["pera", "manzana", "banana", "durazno"];

const frutasMayusculas = frutasBase.map(fruta => fruta.toUpperCase());

console.log("Nuevo arreglo con map():", frutasMayusculas);

//e. Filtrar frutas que contengan "na" con filter() e includes()

const listaFrutas = ["pera", "manzana", "banana", "durazno"];

const frutasConNa = listaFrutas.filter(fruta => fruta.includes("na"));

console.log("Frutas que contienen 'na':", frutasConNa);

// 2. OBJETOS

//a. Objeto con datos de un producto

const producto = {
  nombre: "Remera Oversize",
  precio: 15000,
  stock: 8,
  talles: ["S", "M", "L"]
};

console.log("Producto individual:", producto);

//b. Arreglo de 4 productos

const productos = [
  { nombre: "Remera Oversize", precio: 15000, stock: 3, talles: ["S", "M", "L"] },
  { nombre: "Pantalón Cargo", precio: 32000, stock: 12, talles: ["S", "M", "L"] },
  { nombre: "Buzo Hoodie", precio: 28000, stock: 2, talles: ["S", "M", "L"] },
  { nombre: "Campera Denim", precio: 45000, stock: 15, talles: ["S", "M", "L"] }
];

//c. Recorrer con forEach() e imprimir stock menor a 5

console.log("Productos con stock menor a 5:");
productos.forEach(prod => {
  if (prod.stock < 5) {
    console.log(prod);
  }
});

//d. Aplicar 10% de descuento con map()

const productosConDescuento = productos.map(prod => {
  return {
    ...prod,
    precio: prod.precio * 0.90
  };
});

console.log("Productos con 10% de descuento:", productosConDescuento);

//e. Filtrar productos con stock mayor a 10 con filter()

const productosStockAlto = productos.filter(prod => prod.stock > 10);

console.log("Productos con stock mayor a 10:", productosStockAlto);