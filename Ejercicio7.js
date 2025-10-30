//Ejercicio 7: Simulador de Cajero Automático
function retirarDinero(saldo, monto) {
  if (monto > saldo) {
    return "Fondos insuficientes";
  } else {
    const nuevoSaldo = saldo - monto;
    return `Retiro exitoso. Nuevo saldo: $${nuevoSaldo}`;
  }
}
console.log(retirarDinero(50000, 20000)); 
