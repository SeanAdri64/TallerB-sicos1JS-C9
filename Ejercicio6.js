//Ejercicio 6: Contador de Palabras
function contarPalabras(texto) {
  if (texto.trim() === "") return 0;
  return texto.trim().split(/\s+/).length;
}
console.log(contarPalabras("Hola mundo esto es JavaScript")); // 5
