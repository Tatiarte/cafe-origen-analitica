// Este archivo se crea para cumplir el minireto 1 de la semana 1


// Las funciones a continuación se crean para responder al minireto 2 de la semana 1
// Calcula el valor total de una venta
// ¿cómo sabe la función que .cantidad y .precio son propiedades del archivo datos? no lo sabe: JavaScript no verifica nada 
// de antemano. venta es solo un parámetro que recibe cada objeto cuando llamas la función, y si le pasaras un objeto sin 
// precio, el resultado sería NaN. Los datos no "viajan" entre archivos, simplemente pasas el arreglo importado como argumento.

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


// Cuanto gasta un cliente en promedio por compra

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

// Minireto 3 semana 1 crear las versiones totalVendidoM, unidadesVendidasM y ventasPorCiudadM usando métodos de arreglo.
// Aquí se aplica los siguientes métodos: reduce(), map(), trim(), toLowercase(), filter(). 
// PENDIENTE: hacer ejercicios de todos los métodos, especialmente de reduce()

// Quita espacios sobrantes y pasa a minúsculas
// normalizar los datos me permite con toLowerCase convertir todos los caracteres en una cadena de texto a minúscula y
// devuelve la cadena de texto con ese cambio, si quiero pasar a mayúscula todos los caracteres utilizo toUpperCase()
// trim() es un método que elimina los espacios sobrantes pero deja intactos los que existen entre las palabras
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}

// Versión con reduce de totalVendido
// reduce() se usa para recorrer un arreglo y reducirlo a un único valor final (en este caso es la suma de dinero de la venta)
// Los parámetros: acumulado (es la variable que va guardando la suma parcial a medida que el ciclo avanza) y venta (es el elemento
// actual, o sea, la venta individual que se esta procesando en cada vuelta del ciclo)
// + valorVenta(venta) significa que en cada iteración toma el valor de la venta actual y se lo suma a lo que ya llevaba el acumulador
// el 0 al final es el valor inicial del acumulado. Le indica a JS que empiece a sumar partiendo desde 0
function totalVendidoM(ventas) {
    return ventas.reduce((acumulado, venta) => acumulado + valorVenta(venta), 0);
}

//  con reduce de unidadesVendidas
// ventas.reduce(...) al igual que la anterior función, aquí recorre todo el arreglo ventas para acumular un único valor final
// en este caso esta acumulando la cantidad total de unidades
// acumulado: otra vez, es el número que va guardando la suma parcial conforme avanza por cada venta y venta es el objeti actual
// que se esta analizando en cada iteración del ciclo
function unidadesVendidasM(ventas) {
    return ventas.reduce((acumulado, venta) => acumulado + venta.cantidad, 0);
}

// Versión con filter + map + reduce de ventasPorCiudad
// Aquí limpiamos los datos de la ciudad que estoy buscando con normalizarTexto como vimos en la primer función del minireto 3
// filter revisa todas las ventas y se queda únicamente con aquellas donde la ciudad de la venta (que también está normalizada)
// coincida exactamente con la ciudadBuscada, entonces desecha el resto.
// map () transforma, eso quiere decir que toma la lista de ventas ya filtradas de esa ciudad y la transforma en una lista 
// solamente numérica, sacando el valor monetario de cada venta con la funcion valorVenta(venta)
// Reduce(), aquí también se usa para sumar, toma la nueva lista de números y los suma todos empezando por 0, para obtener el gran
// total de ventas de esa ciudad.
function ventasPorCiudadM(ventas, ciudad) {
    const ciudadBuscada = normalizarTexto(ciudad);

    return ventas
        .filter(venta => normalizarTexto(venta.ciudad) === ciudadBuscada)
        .map(venta => valorVenta(venta))
        .reduce((acumulado, valor) => acumulado + valor, 0);
}

// tercer, cuarto y quinto ejercicio del minireto 3, crear las siguientes funciones


// Total vendido por cada ciudad, con nombres normalizados como vimos en los ejercicios pasados
function totalPorCiudad(ventas) {
    return ventas.reduce((grupos, venta) => {
        const clave = normalizarTexto(venta.ciudad);
        grupos[clave] = (grupos[clave] || 0) + valorVenta(venta);
        return grupos;
    }, {});
}

// Unidades vendidas por producto
function unidadesPorProducto(ventas) {
    return ventas.reduce((grupos, venta) => {
        const clave = venta.producto.trim();
        grupos[clave] = (grupos[clave] || 0) + venta.cantidad;
        return grupos;
    }, {});
}

// Los k productos que más dinero generaron, de mayor a menor
function topProductosPorValor(ventas, k) {
    const valorPorProducto = ventas.reduce((grupos, venta) => {
        const clave = venta.producto.trim();
        grupos[clave] = (grupos[clave] || 0) + valorVenta(venta);
        return grupos;
    }, {});

    const lista = Object.entries(valorPorProducto)
        .map(([producto, valor]) => ({ producto, valor }));

    return [...lista]
        .sort((a, b) => b.valor - a.valor)
        .slice(0, k);
}




// Estos son los modulos del minireto 1 y 2
module.exports = {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad
    
    // para el minireto 3 le agregamos los siguientes

    normalizarTexto,
    totalVendidoM,
    unidadesVendidasM,
    ventasPorCiudadM,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor
};