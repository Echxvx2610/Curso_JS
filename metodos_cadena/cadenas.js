
// Metodos de cadena
let nombre = "Cristian"
let apellido = " Echevarria"

let nombreCompleto = nombre.concat(apellido)
console.log("..........::::: Metodos de cadena  ::::::::...........")
//concat()
console.log(`Resultado de concat(): ${nombreCompleto}`)
//starsWith()
console.log(`Resultado de startsWith(): ${nombre.startsWith("C")}`)
//endsWith() 
console.log(`Resultado de startsWith(): ${nombre.endsWith("A")}`)
//includes()
console.log(`Resultado de includes() ${nombre.includes("tian")}`)

// indexOf() si devuelve -1 significa que no lo encontro izq a der
console.log(`Resultado de indexof() ${nombre.indexOf("x")}`)
// lastIndexOf()
console.log(`Resultado de lastIndexOf() ${nombre.lastIndexOf("i")}`) // devulve la ultima posicion del valor encontrado en Cristian der a izq

// repeat()
console.log(`Resultado de repeat() ${nombre.repeat(3)}`)


let frase = "Buen dia"
// split() dividir segun el parametro
console.log(`Resultado de split() "${frase.split(" ")}"`)
//substring() definimos inicio y cierre 
console.log(`Resultado de substring(): "${frase.substring(0,4)}"`)
//toLowerCase()
console.log(`Resultado de toLowerCase(): "${frase.toLowerCase()}"`)
//toUpperCase()
console.log(`Resultado de toUpperCase(): "${frase.toUpperCase()}"`)
// trim() Elimina los espacios al inicio y al final.
console.log(`Resultado de trim(): "${frase.trim("")}"`)
// trimStart() Elimina solo los espacios al inicio.
console.log(`Resultado de trimStart(): "${frase.trimStart()}"`)
// trimEnd() Elimina solo los espacios al final.
console.log(`Resultado de trimEnd(): "${frase.trimEnd("")}"`)
// toSting() convierte a un objeto string
let frutas = ["Banana","Fresa"]
console.log(`Resultado de toString(): ${frutas.toString()}`)
//valueOf
console.log(`Resultado de valueof(): ${nombre.valueOf()}`)
