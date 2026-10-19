// 1. Funciones de declaracion

// Ejercicio a

function saludar() {
    console.log("¡Hola, bienvenido!");
}

saludar();

//Ejercicio b

function saludarPersona(nombre) {
    console.log("¡Hola"+ " " +  nombre + " " +  "bienvenido!");
}

saludarPersona("Andrés");

//Ejercicio c

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

let resultado = esMayorDeEdad(20);

console.log(resultado);


// 2. Funciones de flecha

// Ejercicios a

const esMayorDeEdad1 = (edad) => {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
};

let resultadoFlecha = esMayorDeEdad1(16);

console.log(resultado);

// Ejercicio b


const compararNumeros = (numero1, numero2) => {
    if (numero1 < numero2) {
        console.log("El número"+ " "+  numero1 + " " +  "es menor que"  , numero2);
    } else if (numero1 == numero2) {
        console.log("El número"+ " "+  numero1 + " "+  "es igual que" ,numero2);
    } else {
        console.log("El número" + " " + numero1 + " "+  "es mayor que" ,numero2);
    }
};

for (let i = 1; i <= 5; i++) {
    compararNumeros(i, 3);
}


// Funciones Callback

// Ejercicio a


const operacion = (numero1, numero2, callback) => {
    callback(numero1, numero2);
};

function suma(numero1, numero2) {
    let resultado = numero1 + numero2;
    console.log("El resultado de la suma es" + " " + resultado);
}

function resta(numero1, numero2) {
    let resultado = numero1 - numero2;
    console.log(" El resultado de la resta es"+ " " +  resultado);
}

operacion(10, 5, suma);
operacion(10, 5, resta);

// Ejercicio b


const operacion2 = (numero1, numero2, callback) => {
    if (typeof numero1 == "number" && typeof numero2 == "number") {
        callback(numero1, numero2);
    } else {
        console.log("Debe ingresar solo números.");
    }
};

function suma(numero1, numero2) {
    let resultado = numero1 + numero2;
    console.log(`El resultado de la suma es ${resultado}`);
}

function resta(numero1, numero2) {
    let resultado = numero1 - numero2;
    console.log(`El resultado de la resta es ${resultado}`);
}

operacion(10, 5, suma);
operacion(10, 5, resta);

operacion(100, 5, suma);
operacion("hola", 5, resta);