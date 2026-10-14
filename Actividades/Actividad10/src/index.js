
//1. Estructuras de control CONDICIONALES
//Utilizando la estructura de control if, else if o else

// a. Escriba un programa que verifique si la variable edad, definida con un número entero, es mayor o igual a 18. 
// Si lo es, imprime "Es mayor de edad", de lo contrario, imprime "Es menor de edad"

let edad = 20;

if (edad >= 18) {

    console.log("es mayor de edad")
    
}

// b. Escriba un programa que verifique si la variable numero es par o impar. 
// Si es par, imprime "El número es par", de lo contrario, imprime "El número es impar"

let numero = 5;

if (numero % 2 == 0) {

    console.log("el numero es par")
    
}

else{
    
    console.log("el numero es impar")

}

//c. Escriba un programa que compruebe la variable nota y escriba por consola si es "Aprobado", "Reprobado", o "Excelente" 
// según los siguientes criterios:
    //- Menor a 4: "Reprobado"
    //- Entre 4 y 7: "Aprobado"
    //- Mayor a 7: "Excelente"

let nota = 8;

if (nota < 4) {
    console.log("Reprobado");
} else if (nota <= 7) {
    console.log("Aprobado");
} else {
    console.log("Excelente");
}


// 2. Estructuras de control BUCLES
//Utilizando la estructura de control for

// a. Escriba un programa que imprima los números del 1 al 10 usando un bucle for

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//  b. Escriba un programa que imprima los números del 10 al 1 
// en orden descendente usando un bucle for

for ( let i = 10; i >= 1; i--) {
    console.log(i)
}

// c. Escriba un programa que utilice un bucle for (20 iteraciones comenzando con let i = 0) 
//  combinarlo  con condicionales para saber si la variable declarada en el bucle es par o impar.
//  Si es par, imprime "El número es par", de lo contrario imprime "El número es impar"
//  (utilizar operación de módulo)

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

//d. Modifique el programa del punto anterior, y concatena con template literals el número a lo que se imprime por consola 
// por ejemplo: "El número 3 es impar"

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}
