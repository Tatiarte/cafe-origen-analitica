/* =====================================================================
   GUÍA DE CONSULTA DE JAVASCRIPT — hecha por Tati
   ---------------------------------------------------------------------
   ---------------------------------------------------------------------
   ÍNDICE
   1. Variables y console.log
   2. Operadores aritméticos
   3. Operadores de comparación
   4. Operadores lógicos (&&, ||, !)
   5. Ejercicios de lógica
   6. Condicionales (if / else / else if)
   7. Funciones (parámetros, console.log vs return)
   8. Retos de práctica
   ===================================================================== */
 
/* =====================================================================
   1. VARIABLES Y CONSOLE.LOG
   ---------------------------------------------------------------------
   Una variable es una "caja" con nombre donde guardas un dato.
   - let   → valor que puede cambiar después
   - const → valor que NO cambia (úsalo por defecto si no lo vas a modificar)
   console.log() muestra algo en la consola.
   ===================================================================== */
 
let nombre = "Tati";   // texto (string)
let edad = 29;         // número (number)
 
console.log("Hola", nombre, "tienes", edad, "años");
// Salida: Hola Tati tienes 29 años
 
 
/* =====================================================================
   2. OPERADORES ARITMÉTICOS
   ---------------------------------------------------------------------
   +  suma        -  resta        *  multiplicación        /  división
   ===================================================================== */
 
// Multiplicación: precio por cantidad
let precio = 50000;
let cantidad = 3;
let total = precio * cantidad;
console.log(total); // 150000
 
// Resta: precio con descuento
let price = 80000;
let discount = 10000;
let finalPrice = price - discount;
console.log(finalPrice); // 70000
 
// División: precio por unidad
let totalPrice = 120000;
let quantity = 4;
let pricePerUnit = totalPrice / quantity;
console.log(pricePerUnit); // 30000
 
 
/* =====================================================================
   3. OPERADORES DE COMPARACIÓN
   ---------------------------------------------------------------------
   Siempre devuelven un booleano: true o false.
 
   >   mayor que          <   menor que
   >=  mayor o igual      <=  menor o igual
   === igual (valor Y tipo)
   !== diferente (valor o tipo)
 
   OJO: usa === (tres signos) y no == (dos). El === también compara el
   tipo de dato, así evito errores raros.
   ===================================================================== */
 
let age = 29;
let isAdult = age >= 18;
console.log(isAdult);      // true
 
console.log(25 === 25);    // true  → mismo valor y mismo tipo
console.log(25 === 30);    // false → valores distintos
console.log(25 === "25");  // false → mismo valor pero distinto tipo (number vs string)
 
 
/* =====================================================================
   4. OPERADORES LÓGICOS
   ---------------------------------------------------------------------
   Sirven para combinar condiciones.
 
   &&  (Y)   → true solo si AMBAS son true
   ||  (O)   → true si AL MENOS UNA es true
   !   (NO)  → invierte el valor (true → false, false → true)
 
   Tabla rápida:
     true  && true  = true       true  || true  = true
     true  && false = false      true  || false = true
     false && false = false      false || false = false
   ===================================================================== */
 
// AND (&&): necesita cumplir las dos
let userAge = 16;
let hasAccount = false;
let canAccess = userAge >= 18 && hasAccount;
console.log(canAccess); // false (no es mayor de edad Y no tiene cuenta)
 
// OR (||): basta con cumplir una
let userAge2 = 16;
let hasPermission = true;
let canAccess2 = userAge2 >= 18 || hasPermission;
console.log(canAccess2); // true (no es mayor, pero tiene permiso)
 
// NOT (!): invierte
let isRaining = false;
console.log(!isRaining); // true
 
 
/* =====================================================================
   5. EJERCICIOS DE LÓGICA
   ===================================================================== */
 
// Ejercicio 1: Acceso a una película
// Un cine permite el ingreso si:
//  - la persona tiene 18 años o más
//  - O está acompañada por un adulto
let movieAge = 16;
let accompaniedByAdult = true;
let canWatchMovie = movieAge >= 18 || accompaniedByAdult;
console.log(canWatchMovie); // true
 
// Ejercicio 2: Descuento en una compra
// Hay descuento si:
//  - la compra es igual o superior a 100000
//  - O el cliente tiene membresía especial Y la compra es superior a 50000
// Los paréntesis agrupan las condiciones para que se evalúen juntas.
let purchase = 40000;
let hasMembership = true;
let getsDiscount = (hasMembership && purchase > 50000) || (purchase >= 100000);
console.log(getsDiscount); // false (tiene membresía pero la compra no supera 50000)
 
 
/* =====================================================================
   6. CONDICIONALES
   ---------------------------------------------------------------------
   Permiten que el programa tome decisiones según una condición.
 
   Estructura:
     if (condición) { ... }
     else if (otra condición) { ... }
     else { ... }
 
   Reglas:
   - La condición va entre paréntesis ( )
   - El código a ejecutar va entre llaves { }
   - NO pongas punto y coma después del if(...)
     (if (x); rompe el if y el código de abajo se ejecuta siempre)
   - Solo se ejecuta UN bloque: el primero cuya condición sea true
   ===================================================================== */
 
// --- if simple ---
const ageIf = 18;
if (ageIf >= 18) {
  console.log("you are of legal age");
}
 
// --- if / else ---
const ageElse = 17;
if (ageElse >= 18) {
  console.log("you are of legal age");
} else {
  console.log("you are not of legal age");
}
// Salida: you are not of legal age
 
// --- if / else if / else ---
let ageMulti = 16;
if (ageMulti >= 18) {                 // 1° se evalúa esta condición
  console.log("you are of legal age");
} else if (ageMulti >= 16) {          // 2° si la primera falla, evalúa esta
  console.log("you are almost of legal age");
} else {                              // 3° si ninguna anterior se cumple
  console.log("you are not of legal age");
}
// Salida: you are almost of legal age
 
 
/* =====================================================================
   7. FUNCIONES
   ---------------------------------------------------------------------
   Una función es un bloque de código con nombre que puedes reutilizar.
 
   Partes:
     function nombreFuncion(parametro1, parametro2) {
         // código
     }
     nombreFuncion(valor1, valor2);   // ← así se "llama" o ejecuta
 
   - Parámetros: son las "variables de entrada" que recibe la función.
   - Argumentos: son los valores reales que le pasas al llamarla.
     (En calcularPuntos(100), el parámetro es puntosBase y el argumento es 100)
   ===================================================================== */
 
// --- 7.1 Función con un parámetro ---
function calcularPuntos(puntosBase) {
  let total = puntosBase + 50;
  console.log(total);
}
calcularPuntos(100); // 150
 
function calcularTotal(precioProducto) {
  let total = precioProducto + 15;
  console.log(total);
}
calcularTotal(100); // 115
 
// --- 7.2 Función con dos o más parámetros ---
function calcularViaje(kilometrosPorHora, horas) {
  let totalRecorrido = kilometrosPorHora * horas;
  console.log(totalRecorrido);
}
calcularViaje(10, 3); // 30
 
function calcularCompra(precioUnitario, cantidad) {
  let totalPagar = precioUnitario * cantidad;
  console.log(totalPagar);
}
calcularCompra(20, 4); // 80
 
 
/* ---------------------------------------------------------------------
   7.3 console.log vs return  (¡lo más importante de las funciones!)
   ---------------------------------------------------------------------
   - console.log dentro de la función → solo MUESTRA el valor en pantalla.
     La función no entrega nada hacia afuera.
   - return → DEVUELVE el valor para que puedas guardarlo en una variable
     y usarlo después como quieras.
 
   Ojo: cuando una función no tiene return, su resultado es undefined.
   --------------------------------------------------------------------- */
 
// Sin return: muestra el 8, pero NO se lo entrega a la variable
function sumarSinReturn(a, b) {
  console.log(a + b);
}
let resultadoSin = sumarSinReturn(5, 3); // muestra 8 en consola
console.log(resultadoSin);               // undefined (la función no devolvió nada)
 
// Con return: la función "escupe" el resultado hacia afuera
function sumar(a, b) {
  return a + b;
}
// 1. Llamamos a la función y GUARDAMOS lo que devolvió en una variable
let resultadoFinal = sumar(10, 5);
// 2. Ahora la variable tiene el 15 adentro y puedes usarlo como quieras
console.log(resultadoFinal);     // 15
console.log(resultadoFinal * 2); // 30 (reutilizamos el resultado)
 
 
/* ---------------------------------------------------------------------
   7.4 Duda existencial: ¿por qué en programación el "resultado" va a la
       izquierda si en matemáticas va a la derecha?
   ---------------------------------------------------------------------
   Porque el = en programación NO es una igualdad matemática, es una
   ASIGNACIÓN. Se lee de derecha a izquierda:
 
       let resultadoFinal = sumar(10, 5);
 
   significa: "lo que está a la derecha (el resultado de sumar), 
   mételo dentro de la caja que está a la izquierda (resultadoFinal)".
   --------------------------------------------------------------------- */
 
 
/* =====================================================================
   8. RETOS DE PRÁCTICA
   ===================================================================== */
 
// Reto: calcular el área de un rectángulo (área = base × altura)
// Versión con console.log (solo muestra):
function calcularArea(base, altura) {
  let area = base * altura;
  console.log(area);
}
calcularArea(10, 5); // 50
 
// Versión con return (devuelve el valor, más reutilizable):
function calcularAreaReturn(base, altura) {
  return base * altura;
}
let areaRectangulo = calcularAreaReturn(10, 5);
console.log(areaRectangulo); // 50
 
 
/* =====================================================================
   RESUMEN RÁPIDO (para repasar en 30 segundos)
   ---------------------------------------------------------------------
   let / const        → guardar datos
   + - * /            → operaciones
   > < >= <= === !==  → comparar (devuelven true/false)
   && || !            → combinar condiciones
   if / else if / else→ tomar decisiones
   function + return  → reutilizar código y devolver resultados
   ===================================================================== */

// EJERCICIOS CON RETURN 

// 1. La función recibe el precio, le resta 10 adentro y lo devuelve con return
function aplicarDescuento(precioOriginal) {
    let precioConDescuento = precioOriginal - 10;
    return precioConDescuento; 
}

// 2. Invocamos la función pasándole un número (100) y lo guardamos a la izquierda
let precioFinal = aplicarDescuento(100);

// 3. Imprimimos la variable resultante
console.log(precioFinal); // Resultado en consola: 90

// EXPLICACIÓN HECHA POR MI  PORQUE ASÍ ENTIENDO: la funcion anterior aplicar descuento tiene el parametro precio original,
// entonces a precio original le restamos 10 que seria el precio descuento y lo metemos a la cajita de la variable que creamos 
// que es el preciocondescuento, luego lo retornamos, es decir sacamos de la función la variable precioConDescuento que 
// contiene precio original - 10. luego usamos la funcion aplicar descuento y le cambiamos el parametro 100 quiere decir 
// que dentro de los parentesis el 100 es en realidad precio orginal 100 y le restamos 10.

//RETO DESDE CERO DE MI PARA MI:
// Imagina que estás programando una aplicación para un gimnasio. Necesitas una función que calcule cuántas calorías quema 
// una persona corriendo, sabiendo que por cada minuto que corre, quema 10 calorías.

// Tu función debe:

//     Recibir los minutos que la persona corrió como parámetro.

//     Calcular las calorías totales quemadas usando la regla (10 calorías por minuto).

//     Retornar ese resultado usando return.

//     Afuera de la función, invocarla pasándole un número de minutos (por ejemplo, 30 minutos), guardar el resultado en una 
//     variable, y mostrar esa variable en la consola con console.log().

function caloriasQuemadas (minutos){
    let caloriasTotales = minutos * 10;
    return = caloriasTotales;
}

let caloriasQuemadas = caloriasTotales(30)
console.log(caloriasQuemadas)

//Casi perfecto pero varios errores: 1. return nunca usa = porque return es una palabra clave que indica que sale de la funcion
// caloriasTotales es una variable que vive dentro de {} es decir, dentro de la función, por tanto afuera no existe 
// Recuerda que la función se llama caloriasQuemadas, ahora, lo que quiero saber es el total de las calorias entonces la variable
// que nombro para eso es mejor CaloriasFinales porque si nombro la variable igual que la función el computador se confunde
// entonces corregido quedaría así:

function caloriasQuemadas (minutos){
    let caloriasTotales = minutos * 10;
    return = caloriasTotales;
}

let caloriasFinales = caloriasQuemadas(30)

console.log(caloriasFinales) // Resultado en consola: 30

// Recuerda la explicación anterior: la función se llama CaloriasQuemadas que tiene el parámetro minutos, luego creas una
// variable donde vas a arrojar la operación de cuántas calorias se queman por minuto que la indicación dice que son 10 
// luego return que recuerda que le estas diciendo a la función que salga de ahí, o sea que empiece otra cosa pero fuera de la
// función. Entonces, nombramos una variable más pero esta vez donde se arrojara el resultado de caloriasQuemadas que será
// 30, entonces let caloriasFinales = caloriasquemadas(30) es lo mismo que decir
//              let caloriasFinales = minutos * 10

// PASEMOS A LAS FUNCIONES CON FLECHA O IN ENGLISH ARROW FUCTIONS
// Básicamente son una forma más moderna, limpia y corta de escribir exactamente lo mismo que ya vi
 // Función normal: 
function caloriasQuemadas(minutos) {
    let caloriasTotales = minutos * 10;
    return caloriasTotales;
}

// ARROW FUNCTION:
const caloriasQuemadas = (minutos) => {
    let caloriasTotales = minutos * 10; 
    return caloriasTotales;
}
// Es la misma mondá, solo cambian dos cosas: 1. la palabra function vuela, y se escribe es una variable const
// 2. se agrega la flechita => antes de abrir las llaves donde irá la variable con la operación y el return
// Cuál es el power entonces de hacer la function con la flechita? pues amiga, porque el return está implicito:
// O sea, si mi función solo hace una línea de operación y lo va a retornar de una vez puedo borrar el return
// borrar las llaves y borrar el ; porque JS asume que loq uee stá ahí se va a retornar o sea queda así:

// ¡Esto hace exactamente lo mismo que el código de arriba pero en una sola línea!
const caloriasQuemadas = (minutos) => minutos * 10;

// Y se invoca exactamente igual:
console.log(caloriasQuemadas(30)); // Muestra: 300

// Ahora sí no es la misma mondá: aquí nos ahorramos tener que escribir la variable donde se arroja la operación y el return
// literal esto "=>" reemplazo la palabra function por const y suprimio let caloriasTotales =  y   return caloriasTotales;

// EJERCICIO A VER SI SÍ APRENDÍ

//Imagina que estás creando una pequeña herramienta para calcular el precio de un envío. El envío cuesta una tarifa fija de 5 
// dólares por cada kilómetro de distancia. Escribe una función de flecha llamada calcularEnvio que:
// Reciba un parámetro llamado kilometros.
// Guarde en una variable interna el resultado de multiplicar los kilómetros por 5.
// Use return para devolver ese resultado.
// Invocala abajo pasándole un número de kilómetros (por ejemplo, 8), guárdalo en una variable del lado izquierdo 
// y muéstralo con console.log.

const calcularEnvio = (kilometros) => kilometros * 5;
console.log(calcularEnvio(8))

// Fecha multi-paso: El salario neto

function calcularSalarioNeto (horasTrabajadas, tarifaPorHora){
const salarioNeto = horasTrabajadas * tarifaPorHora;
const impuetos = salarioNeto - 30;
return impuetos;
}

console.log(calcularSalarioNeto(40, 15))

// La anterior función escrita con arrow obliga a que al tener varios parámetros y al ser más de una línea de código dentro de la función
// Debemos usar {} y el return

// Declaro la constante, los parámetros y la flecha
const calcularSalarioNeto = (horasTrabajadas, tarifaPorHora) => {
  //Hacemos los pasos dentro de las llaves
  const salarioNeto = horasTrabajadas * tarifaPorHora;
  const impuestos = salarioNeto - 30;
  return impuestos;
}

console.log(calcularSalarioNeto(40, 15))

// FUNCIONES CON FOR (BUCLE)

const contarSi = (respuestas) => {
  let contador = 0;
  for (let i = 0; i < respuestas.length; i++) {
    if (respuestas[i] === "Sí") {
      contador++;
    }
  }
  return contador;
};

// ejemplo con edad de cómo se usa un for

// let total = 0 esto es el contador, es decir va antes del for porque es el que va a guardar el resultado del recorrido por la lista de edades,
// es como decir que es la caja de resultados, si estuviese dentro del for no serviría porque el ciclo haria que se borrara el resultado
// y volviera a empezar en cero en cada vuelta, y tiene que estar en una variable para que sea llamada

// for(let i = 0) aquí es una variable del i que seria el puntero o el indice que nos dice en qué posición esta de la lista, comienza en 0 y cuenta
// los pasos que da.

// el limite o el freno es i< edades.length. Este condicional evalua en cada vuelta si el indice actual es menor que el tamaño total de la lista.
// es decir, cuando llega al último numero de la lista el i debe detenerse por eso el i debe ser menor que el tamaño total de la lista

// i++ significa el paso o avance, es la última instrucción de cada vuelta, su trabajo es sumarle un 1 a la variable i (pasa de 0 a 1, de 1 a 2 y así)
// así en la siguiente iteración el bucle avance al siguiente elemento de la lista y cuando i sea igual al ultimo numero por ejemplo 4 y edades.length
// también llegue a 4 (incrementando de uno en uno con i++) la condición es false y se detiene: 4<4 false

// total = total se refiere al total del contador , el que esta fuera del bucle TATI RECUERDA QUE en programación = no es igual sino que se ASIGNA y 
// GUARDA, por eso total + edad[i] esta diciendo que toma el valor que la caja total tiene guardado en ese momento y le suma el elemento actual de la lista.
// Ejemplo: Imagina que tienes una lista de edades: [20, 25, 30]. Cuando i vale 0, edades[0] busca el primer valor de la lista, que es 20.
// Cuando i avanza a 1, edades[1] busca el segundo valor, que es 25. Cuando i avanza a 2, edades[2] busca el tercer valor, que es 30.
// Ahora el total del lado izquierdo de esta linea --> total = total + edades[i] nos dice que tomemos ese resultado recién calculado y lo sobreescribe 
// dentro de la misma caja total para actualizarla.

function sumarEdades(edades) {
  let total = 0; // Caja inicial para acumular la suma
  
  for (let i = 0; i < edades.length; i++) {
    total = total + edades[i]; // Sumamos cada elemento de la lista al total
  }
  
  return total;
}


//Ahora hacer varios ejercicios con for para afianzar lo aprendido:


// Generar una tabla de multiplicar sin necesidad de una lista 
// Leyendo esta función nos dice que tablaDelCinco es la función que arranca en i = 1 para evitar que el resutlado sea cero. El bucle se repite
// mientras i <= 10 lo que significa que incluye al número 10 como ultima vuelta, llegando hasta 5*10. El incremento se da de uno en uno con la 
// instrucción i++, finalmente el console.log arroja 5*1 que es la expresión matematica que se calcula y se imprime en cada vuelta del bucle

function tablaDelCinco() {
  for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
  }
}

//Escribe una función llamada contarAprobados(notas) que reciba una lista de números (calificaciones) y devuelva cuántas notas son mayores o iguales a 60.

function contarAprobados(calificaciones){
  let total = 0;
  for(let i = 0; i <= calificaciones.length; i++){
    total = total + calificaciones[i];
  }
  return total;
}


// Ejercicios de la página TESLA

const codersEmpty = [];
const codersSimple = ["Ana"];
const coders = ["Ana", "Luis", "Sara", "Mateo"];

function primeroYUltimo(coders) {
  const codersLength = coder.length
  
  if (!codersLength) return coders // esto da cero o sea false y el ! lo vuelve verdadero
  
  const first = coders[0]
  const last = coders[coderLength - 1]
  
  return [first, last]
}

console.log(primeroYUltimo(codersEmpty))
console.log(primeroYUltimo(codersSimple))
console.log(primeroYUltimo(coders))

// OTRO EJERCICIO

// En la rotación de presentaciones el turno da la vuelta. Escribe turnoCircular(lista, i) que devuelva el elemento en la posición i dando la vuelta a la lista: si i se pasa del final empieza otra vez desde el inicio, y si es negativo cuenta desde atrás. Lista vacía → undefined.
// el ejercicio esta pidiendo que a un arreglo de uno o 100 elementos le puedas aplicar la misma lógica: 
// posición normal: que pida un numero del dato y lo arroje 


const clanTesla = ["Ana", "Luis", "Sara", "Mateo" ]
function turnoCircular(lista, i) {
    if (lista.length === 0) { // list.length representa cuántos elementos hay en la lista, si hay 0 elementos esta diciendo: Si lista.length es estrictamente igual a 0 entonces eso sería true y retornaremos undefined y se detiene. Si no, continua.
        return undefined;
    }

const n = lista.length;

  // 2. Calcular el índice circular exacto (funciona para positivos y negativos)
  const indiceReal = ((i % n) + n) % n;

  // 3. Devolver el elemento en esa posición
  return lista[indiceReal];

  // EJERCICIO ARRAYS
  const fila = ["Ana", "Luis"];

function moverAlFinal(fila){
if (fila.length === 0){
  return fila
  }
  const primercoder = fila.shift();
  fila.push(primercoder);
  
  return fila

}
 console.log(moverAlFinal(fila))


 //Escribe contarAprobados(notas) que cuente cuántas notas son mayores o iguales a 3. Usa un ciclo.

const notas= [4.5, 2.8, 3.9]

function contarAprobados(notas) {
  let contador = 0
  for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 3) contador++
  }
    return contador
}
console.log(contarAprobados(notas))

// Escribe aPorcentaje(notas) que convierta notas de 0 a 5 en porcentajes de 0 a 100, redondeados al entero más cercano.

const notas = [4.5, 2.8, 3.9];

function aPorcentaje(notas) {
    return notas.map(nota => Math.round(nota * 20));
}

}

console.log(aPorcentaje(notas));

//Escribe soloDeClan(coders, clan) que devuelva los nombres de los coders de ese clan.
const coders = [
      { nombre: "Ana", clan: "Tesla", promedio: 4.5 },
      { nombre: "Luis", clan: "Tesla", promedio: 2.8 },
      { nombre: "Pedro", clan: "Ubuntu", promedio: 1.5 },
  ];

function soloDeClan(coders, clan) {
  return coders
      .filter(coder => coder.clan === clan)
      .map(coder => coder.nombre)
        
}
console.log(soloDeClan(coders, "Tesla"))