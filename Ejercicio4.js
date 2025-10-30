//Ejercicio 4: Calcular Promedio de Notas
function calcularPromedio(notas) {
  const suma = notas.reduce((acc, nota) => acc + nota, 0);
  const promedio = suma / notas.length;
  return promedio.toFixed(2);
}
console.log(calcularPromedio([3.9, 4.4, 5.0, 2.1,2.7,1.5])); 
