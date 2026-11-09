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