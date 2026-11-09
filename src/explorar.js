// Importamos el arreglo de ventas desde datos.js
const ventas = require("./datos");


// Consultamos cuántos registros contiene el arreglo: 12
console.log("Cantidad de ventas:", ventas.length);

console.log("Primera venta:", ventas[0]);

//el último elemento se encuentra en la posición 11 quiere decir que a length le restamos 1 así: 12 - 1 = 11
console.log("Última venta:", ventas[ventas.length - 1]);

// Aquí me pide que muestre el producto de la quinta venta, que se encuentra en la posición 4 del array (ya que los arrays comienzan en 0)
console.log("Producto de la quinta venta:", ventas[4].producto);

// Mostramos todos los registros en formato de tabla
console.table(ventas);

// Importamos las funciones de análisis
const {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad
} = require("./analitica");

// Consultamos los indicadores del negocio
console.log("Total vendido:", totalVendido(ventas));
console.log("Unidades vendidas:", unidadesVendidas(ventas));
console.log("Venta mayor:", ventaMayor(ventas));
console.log("Ticket promedio:", ticketPromedio(ventas));
console.log("Ventas en Medellín:", ventasPorCiudad(ventas, "Medellín"));

// Preparamos arreglos para probar casos borde
const unaVenta = [ventas[0]];
const ventasVacias = [];

// probamos las funciones con un arreglo que contiene una sola venta y con un arreglo vacío
console.log("\n--- PRUEBAS CON UNA SOLA VENTA ---");

console.log("Total vendido:", totalVendido(unaVenta));
console.log("Unidades vendidas:", unidadesVendidas(unaVenta));
console.log("Venta mayor:", ventaMayor(unaVenta));
console.log("Ticket promedio:", ticketPromedio(unaVenta));
console.log("Ventas en Medellín:", ventasPorCiudad(unaVenta, "Medellín"));


console.log("\n--- PRUEBAS CON ARREGLO VACÍO ---");

console.log("Total vendido:", totalVendido(ventasVacias));
console.log("Unidades vendidas:", unidadesVendidas(ventasVacias));
console.log("Venta mayor:", ventaMayor(ventasVacias));
console.log("Ticket promedio:", ticketPromedio(ventasVacias));
console.log("Ventas en Medellín:", ventasPorCiudad(ventasVacias, "Medellín"));


// Probamos cada función con tres entradas.
console.log("\n--- PRUEBA DE valorVenta ---");

console.log("Valor de una venta:", valorVenta(ventas[0]));