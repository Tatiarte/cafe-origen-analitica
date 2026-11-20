
/* primeros pasos sin ayuda de nadie
let nombre = "Tati";
let edad = 29;

console.log("Hola", nombre, "tienes", edad, "años");*/

// let precio = 50000;
// let cantidad = 3;
// let answer = precio * cantidad

// console.log(answer)

// let price = 80000;
// let discount = 10000;
// let finalPrice = price - discount;
// console.log(finalPrice)

// let totalPrice = 120000;
// let quantity = 4;
// let pricePerUnit = totalPrice / quantity;
// console.log(pricePerUnit);

// let age = 29;
// let isAdult = age >= 18;
// console.log(isAdult);
// console.log(25 === 25)
// console.log(25 === 30)
// console.log(25 === "25")

// let userAge = 16;
// let hasAccount = false;

// let canAccess = userAge >= 18 && hasAccount;
// console.log(canAccess)

// let userAge = 16;
// let hasPermission = true;

// let canAccess = userAge >= 18 || hasPermission;
// console.log(canAccess)

// let isRaining = false

// console.log(!isRaining)

//Acceso a una película
// Un cine tiene estas condiciones para permitir el ingreso:
// - La persona debe tener 18 años o más.
// - O debe estar acompañada por un adulto.

// let age = 16
// let accompaniedByAdult = true

// let canwatchMovie = age >= 18 || accompaniedByAdult
// console.log(canwatchMovie)

// La compra es igual o superior a 100000.
// El cliente tiene una membresía especial y la compra es superior a 50000.

// let purchase = 40000;
// let hasMembership = true;
// let getsDiscount = (hasMembership && purchase > 50000) || (purchase >= 100000);
// console.log(getsDiscount)


//Condicionales
// const age = 18 
// if (age >= 18);
// console.log("you are of legal age")

//condicionales con else
//     const age = 17 
// if (age >= 18){
//     console.log("you are of legal age")
// }
// else{
//     console.log("you are not of legal age")
// }

//condicionales con else if

// let age = 16
// if(age >= 18){   // si se cumple la primera condición
//     console.log("you are of legal age")
// } 
// else if (age >= 16){  // si no se cumple la primera, evalua esta otra
//     console.log("you are almost of legal age")

// } else {             // si ninguna de las anteiores se cumple
//     console.log("you are not of legal age")
// }


// // funciones

//     function calcularPuntos (puntosBase){
//         let total = (puntosBase + 50);

//         console.log(total);
//     }

//     calcularPuntos(100)

// function calcularTotal (precioProducto){
//     let total = (precioProducto + 15)
//     console.log(total)
// }

// calcularTotal(100)

// function sumar(a, b) {
//     console.log(a + b); 
// }

// let resultado = sumar(5, 3); // Muestra 8 en consola, pero...
// console.log(resultado); // imprime undefined

// // ¿por qué? la función mostro el 8 en la consola, pero no se lo entrego a la variable resultado 0


// function con 2 parametros
// function calcularViaje (kilometrosPorHora, hora){
//     let totalRecorrido = kilometrosPorHora * hora;
//     console.log(totalRecorrido)
// }

// calcularViaje(10, 3)

