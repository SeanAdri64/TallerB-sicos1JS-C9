//Ejercicio 1: Calculadora de Propinas
function calcularPropina(total, porcentaje) {
  const propina = total * (porcentaje / 100);
  const totalFinal = total + propina;
  return totalFinal;
}
console.log(calcularPropina(524000, 10)); 
