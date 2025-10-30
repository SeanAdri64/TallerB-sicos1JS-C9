//Ejercicio 3: Buscar Producto en Inventario
const inventario = [
  { nombre: "Camisa", precio: 20000 },
  { nombre: "Zapatos", precio: 50000 }
];
function buscarProducto(nombre, inventario) {
  const producto = inventario.find(item => item.nombre.toLowerCase() === nombre.toLowerCase());
  return producto || null;
}
console.log(buscarProducto("Zapatos", inventario)); 
console.log(buscarProducto("Tenis", inventario)); 