// Creamos verificar.js porque va a ejecutar la versión con ciclo y la versión con método de cada indicador con los mismos datos
// y  debe mostrar Ok o Diferente para cada par.

const ventas = require("../datos");
const {
    totalVendido,
    unidadesVendidas,
    ventasPorCiudad,
    totalVendidoM,
    unidadesVendidasM,
    ventasPorCiudadM,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor
} = require("../analitica");

function comparar(nombre, resultadoCiclo, resultadoMetodos) {
    const estado = resultadoCiclo === resultadoMetodos ? "OK" : "DIFERENTE";
    console.log(`${estado} | ${nombre} | ciclo=${resultadoCiclo} | métodos=${resultadoMetodos}`);
}

const escenarios = [
    { nombre: "completo", datos: ventas },
    { nombre: "una venta", datos: [ventas[0]] },
    { nombre: "vacío", datos: [] }
];

for (const { nombre, datos } of escenarios) {
    console.log(`\n--- Escenario: ${nombre} ---`);
    comparar("totalVendido", totalVendido(datos), totalVendidoM(datos));
    comparar("unidadesVendidas", unidadesVendidas(datos), unidadesVendidasM(datos));
    comparar("ventasPorCiudad (Medellín)",
        ventasPorCiudad(datos, "Medellín"), ventasPorCiudadM(datos, "Medellín"));
    comparar("ventasPorCiudad (  MEDELLÍN )",
        ventasPorCiudad(datos, "  MEDELLÍN "), ventasPorCiudadM(datos, "  MEDELLÍN "));
    comparar("ventasPorCiudad (Leticia)",
        ventasPorCiudad(datos, "Leticia"), ventasPorCiudadM(datos, "Leticia"));
}

// Compara valores simples o estructuras (objetos y arreglos)
function verificar(nombre, condicion) {
    console.log(`${condicion ? "OK" : "DIFERENTE"} | ${nombre}`);
}

console.log("\n--- Agrupaciones y ranking ---");

// Criterio: exactamente cuatro ciudades, sin duplicados
const porCiudad = totalPorCiudad(ventas);
verificar("totalPorCiudad tiene 4 ciudades", Object.keys(porCiudad).length === 4);
verificar("totalPorCiudad: medellín = 356000", porCiudad["medellín"] === 356000);

// Prueba de normalización: "Bogotá" y "Bogotá " deben quedar juntas
const prueba = totalPorCiudad([
    { ciudad: "Bogotá", cantidad: 1, precio: 1000 },
    { ciudad: "Bogotá ", cantidad: 1, precio: 2000 }
]);
verificar("'Bogotá' y 'Bogotá ' en un solo grupo",
    Object.keys(prueba).length === 1 && prueba["bogotá"] === 3000);

// Unidades por producto: la suma debe coincidir con unidadesVendidas
const porProducto = unidadesPorProducto(ventas);
const sumaUnidades = Object.values(porProducto).reduce((a, b) => a + b, 0);
verificar("unidadesPorProducto suma 21", sumaUnidades === unidadesVendidas(ventas));

// Criterio: top 3 de mayor a menor y sin modificar ventas
const idsAntes = ventas.map(v => v.id).join(",");
const top3 = topProductosPorValor(ventas, 3);
const idsDespues = ventas.map(v => v.id).join(",");

console.log("Top 3 por valor:", top3);
verificar("top3 tiene 3 productos", top3.length === 3);
verificar("top3 ordenado de mayor a menor",
    top3[0].valor >= top3[1].valor && top3[1].valor >= top3[2].valor);
verificar("top3 esperado: Huila, Sierra, Prensa francesa",
    top3.map(p => p.producto).join("|") ===
    "Origen Huila 500 g|Origen Sierra 500 g|Prensa francesa");
verificar("ventas conserva su orden original", idsAntes === idsDespues);
