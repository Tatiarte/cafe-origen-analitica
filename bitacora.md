# Bitácora de análisis — Café Origen

## Diccionario de datos

| Propiedad | Tipo de dato | Significado |
|---|---|---|
| id | Number | Identificador único de cada registro de venta. |
| fecha | String | Fecha en la que se realizó la venta. |
| cliente | String | Código que identifica al cliente. |
| producto | String | Nombre del producto vendido. |
| ciudad | String | Ciudad asociada a la venta. |
| cantidad | Number | Cantidad de unidades registradas en la venta. |
| precio | Number | Valor numérico del precio registrado para el producto. |


| length | me indica el total de registros del arreglo |

## Casos borde detectados

### 1. Diferencia en el nombre de la ciudad
- Situación: el registro con ID 5 contiene "medellín" en minúscula.
- Decisión: conservar el dato original y considerar una normalización posterior para los análisis por ciudad.

### 2. Cantidad igual a cero
- Situación: el registro con ID 8 tiene una cantidad de 0.
- Decisión: conservar el registro original y revisar si debe excluirse de los indicadores de unidades vendidas.

### 3. Clientes repetidos
- Situación: los códigos C01, C02 y C03 aparecen en varios registros.
- Decisión: conservar todos los registros, porque un mismo cliente puede realizar varias compras. No se consideran duplicados únicamente por compartir el código de cliente.

### Duda pendiente
No está especificado si la propiedad "precio" representa el precio unitario o el valor total de la venta. Se debe confirmar antes de realizar cálculos de ingresos.

## Minireto 2 — Indicadores de negocio

### Plan de implementación

### valorVenta(venta)

RECIBIR una venta
MULTIPLICAR cantidad por precio
DEVOLVER el resultado

### totalVendido(ventas)

INICIAR total en 0 (debe iniciar en cero porque recorremos varios registros y sumar sus valores progresivamente, cada vez que construya un acumulador)

PARA CADA venta
    calcular valor de la venta (cantidad * precio)
    sumar valor al total
FIN PARA

DEVOLVER total (muestra el resultado)


¿Cuándo inicializar en 0?
Operación o patrón	                Valor inicial habitual	            ¿Por qué?
Sumar valores (acumulador)	                        0	                Es el punto de partida de una suma.
Contar elementos (contador)	                        0	                Todavía no hemos contado ninguno.
Multiplicar valores (acumulador)	                1	                El 1 no altera el resultado de una multiplicación.
Buscar el mayor	                    Primer elemento o -Infinity	        Necesitamos un valor inicial que permita comparar.
Buscar el menor	                    Primer elemento o Infinity	        Necesitamos un valor inicial que permita comparar.
Calcular un promedio	            0 para suma y contador	            Después dividimos la suma entre la cantidad de elementos.


### unidadesVendidas(ventas)

INICIAR unidades en 0

PARA CADA venta
    sumar cantidad al acumulador
FIN PARA

DEVOLVER unidades

### ventaMayor(ventas)

SI el arreglo está vacío (porque necesitamos tener al menos una venta para identificar cuál es el mayor sino que salga null)
    DEVOLVER null

INICIAR ventaMayor con el primer registro

PARA CADA venta
    comparar su valor con el valor de ventaMayor
    SI es mayor
        actualizar ventaMayor
    FIN SI
FIN PARA

DEVOLVER el registro de ventaMayor

### ticketPromedio(ventas)

INICIAR total en 0 (cuánto dinero suman las ventas válidas? el total va sumando las ventas válidas) va sumando el dinero
INICIAR contador en 0 (cuántas ventas válidas hay? el contador va sumando) aumenta de uno en uno, esta literalmente contando jajaj entonces si la venta se hizo con 4 unidades el contador lo cuenta como 1 sola venta

ticketpromedio = 230.000/2 =115.000

PARA CADA venta
    SI cantidad es mayor que 0
        sumar valor de venta al total
        aumentar contador en 1
    FIN SI
FIN PARA

SI contador es 0
    DEVOLVER 0
FIN SI

DEVOLVER total dividido entre contador

### ventasPorCiudad(ventas, ciudad)

INICIAR total en 0
NORMALIZAR la ciudad recibida

PARA CADA venta
    NORMALIZAR la ciudad del registro

    SI ambas ciudades coinciden
        sumar valor de venta al total
    FIN SI
FIN PARA

DEVOLVER total

Normalización consiste en quitar espacios sobrantes y convertir el texto a minúsculas

## Minireto 2: Verificación manual de resultados

### 1. Unidades vendidas

**Objetivo:** comprobar que la función `unidadesVendidas()` suma las cantidades de todos los registros.

| Registro | Cantidad | Acumulado |
|---|---:|---:|
| Inicio | — | 0 |
| 1 | 2 | 2 |
| 2 | 1 | 3 |
| 3 | 1 | 4 |
| 4 | 1 | 5 |
| 5 | 3 | 8 |
| 6 | 2 | 10 |
| 7 | 1 | 11 |
| 8 | 0 | 11 |
| 9 | 2 | 13 |
| 10 | 4 | 17 |
| 11 | 1 | 18 |
| 12 | 3 | 21 |

**Resultado manual:** 21 unidades.

**Resultado del programa:** 21 unidades.

### 2. Ventas por ciudad: Medellín

**Objetivo:** comprobar que `ventasPorCiudad()` suma las ventas de Medellín sin distinguir mayúsculas, minúsculas ni espacios sobrantes.

| Registro | Ciudad | Valor de venta |
|---|---|---:|
| 1 | Medellín | 84.000 |
| 4 | Medellín | 42.000 |
| 5 | medellín | 135.000 |
| 11 | Medellín | 95.000 |

**Operación:** 84.000 + 42.000 + 135.000 + 95.000.

**Resultado manual:** 356.000.

**Resultado del programa:** 356.000.

### Conclusión

Los resultados obtenidos manualmente coinciden con los resultados del programa. Se comprobó que las funciones acumulan correctamente las cantidades y normalizan los nombres de las ciudades antes de compararlos.

## Casos borde y decisiones del minireto 2

Se probaron las funciones con tres escenarios: arreglo completo, arreglo de un elemento y arreglo vacío.

**Decisiones tomadas para arreglos vacíos:**

| Función | Resultado | Justificación |
|---|---|---|
| `valorVenta(venta)` | No aplica | Recibe un objeto individual, no un arreglo. |
| `totalVendido([])` | 0 | No hay valores que acumular. |
| `unidadesVendidas([])` | 0 | No hay unidades que contar. |
| `ventaMayor([])` | null | No existe una venta para comparar. |
| `ticketPromedio([])` | 0 | Evita dividir entre cero. |
| `ventasPorCiudad([], ciudad)` | 0 | No hay ventas que sumar. |

**Verificación:** todas las funciones respondieron correctamente en los escenarios probados y no produjeron errores ni valores `NaN`.

**Observación:** `ventaMayor()` compara el valor total de cada registro (cantidad × precio), no el precio unitario.