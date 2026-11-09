
// Calcula el valor total de una venta
function valorVenta(venta) {
    return venta.cantidad * venta.precio;
}

// Calcula el dinero total vendido
function totalVendido(ventas) {
    let total = 0;

    for (const venta of ventas) {
        total = total + valorVenta(venta);
    }

    return total;
}

// Calcula el total de unidades vendidas
function unidadesVendidas(ventas) {
    let unidades = 0;

    for (const venta of ventas) {
        unidades = unidades + venta.cantidad;
    }

    return unidades;
}

// Encuentra la venta con el valor más alto
function ventaMayor(ventas) {

    if (ventas.length === 0) {
        return null;
    }

    let mayor = ventas[0];

    for (const venta of ventas) {
        if (valorVenta(venta) > valorVenta(mayor)) {
            mayor = venta;
        }
    }

    return mayor;
}


// Calcula el ticket promedio de las ventas (promedio de valor de venta por cliente)
function ticketPromedio(ventas) {
    let total = 0;
    let contador = 0;

    for (const venta of ventas) {
        if (venta.cantidad > 0) {
            total = total + valorVenta(venta);
            contador = contador + 1;
        }
    }

    if (contador === 0) {
        return 0;
    }

    return total / contador;
}


// calcular cuánto dinero se ha vendido en una ciudad específica
function ventasPorCiudad(ventas, ciudad) {
    let total = 0;

    const ciudadBuscada = ciudad.trim().toLowerCase();

    for (const venta of ventas) {
        const ciudadVenta = venta.ciudad.trim().toLowerCase();

        if (ciudadVenta === ciudadBuscada) {
            total = total + valorVenta(venta);
        }
    }

    return total;
}

module.exports = {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad
};