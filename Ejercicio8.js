//Ejercicio 8: Cambio de Moneda
function convertirMoneda(monto, monedaDestino) {
  const tasaUSD = 0.00026; // 1 COP = 0.00026 USD (ejemplo)
  const tasaEUR = 0.00023; // 1 COP = 0.00023 EUR (ejemplo)

  if (monedaDestino.toUpperCase() === "USD") {
    return (monto * tasaUSD).toFixed(2) + " USD";
  } else if (monedaDestino.toUpperCase() === "EUR") {
    return (monto * tasaEUR).toFixed(2) + " EUR";
  } else {
    return "Moneda no encontrada";
  }
}
console.log(convertirMoneda(50000, "USD"));
