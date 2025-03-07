console.log(`..........::::: Metodos de array  ::::::::...........`)
console.log(`\n...::: Transformaciones :::...`)
let frutas = ["Banana","Manzana","Pera"];
//pop() elimina el ultimo elemento y lo muestra
console.log(`Resultado de pop(): ${frutas.pop()}`)
//shift() elimina el primer elemento y lo muestra
console.log(`Resultado de shift(): ${frutas.shift()}`)
//push() agrega un elemento al array al final 
frutas.push("Melon")
console.log(frutas)
//reverse() invierte el orden del array
frutas.reverse()
console.log(frutas)
//unshift() agrega los elementos al array en este caso forma un array de array
verduras = ["Pepino","Tomate"]
frutas.unshift(verduras)
console.log(frutas)
// sort() ordena el array
frutas.sort()
// splice(indice, cantidadAEliminar, elemento1, elemento2, ...) cambia el contenido de un array
frutas.splice(2, 2, "Banana", "Pera"); 
// elimina ["Pepino","Tomate"] y en su lugar "Banana","Pera"
console.log(frutas); // ["Manzana", "Melon","Banana","Pera"]"

console.log(`\n....::: Accesores :::....`)
let A = [1,2,3,4,5]
// join() agregar un separador al array
console.log(A.join([0]))
// slice() puede ser con inicio o inicio y fin
let B = [1, 2, 3, 4, 5];
console.log(B.slice(1, 4)); // [2, 3, 4] (desde el índice 1 hasta el 4, sin incluir el 4)
console.log(`\n....::: Repeticion :::....`)
// filter()
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar números pares
let pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares); // [2, 4, 6, 8, 10]

let items = ["Manzana", "Banana", "Pera", "Melon"];

// Imprimir cada fruta en mayúsculas
items.forEach((item) => {
  console.log(item.toUpperCase());
});
// Salida:
// MANZANA
// BANANA
// PERA
// MELON
