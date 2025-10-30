//Ejercicio 5: Filtrar Usuarios por Edad
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Carlos", edad: 17 },
  { nombre: "María", edad: 30 },
  { nombre: "Luis", edad: 18 }
];
function filtrarUsuarios(usuarios, edadMinima) {
  return usuarios.filter(usuario => usuario.edad >= edadMinima);
}
console.log(filtrarUsuarios(usuarios, 18));
