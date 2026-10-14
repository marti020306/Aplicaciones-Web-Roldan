//console.log('Hola JS') //Imprime por consola

//Tipado
//let nombre='Andres'
//nombre='Jose'


let nombre = 'Andres'
nombre = 'Jose'
//nombre=1
//console.log(typeof nombre)


let esMayotDeEdad = true


//Operadores aritmeticos
const edad = 25
const mayoriaEdad = 18

const aumentoEdad = edad + 1

//console.log(aumentoEdad)

//Operadores Logicos

let esMayorDeEdad = edad >= mayoriaEdad
console.log(esMayorDeEdad)


//Estructura de control -> de flujo

//for (let i = 0; i < 10; i++) {
// console.log(i)
//}

//Arreglos
//const numeros = [1,2,3,4,5,[1,2,3]]
//console.log(numeros[5][1])
//numeros[2] = 5 

//for ( i = 0 ; i < numeros.length; i++)
//{console.log(numeros[i])}

//objetos

const persona = {
    edad: 20,
    estudia: true,
    nombre: "Andres",
    redes: ["instagram", "tiktok", "youtube"],
    otros: {pasatiempo: "pintar", mascotas: 2},
    caminar: function name(params){
        //
    }



}

persona.nacionalidad = "Argentina"

console.log(persona.redes[1])
console.log(persona.otros.pasatiempo)