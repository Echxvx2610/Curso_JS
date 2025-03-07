// metodos numericos o matematicos
// raiz cuadrada sqrt()
let numero = Math.sqrt(25);
console.log("raiz cuadrada:" + numero);

// raiz cubica cbrt()
let numero2 =  Math.cbrt(9);
console.log(`raiz cubica: ${numero2}`);

// max
let numMaximo = Math.max(1,25,12,23,56,102);
console.log(`valor max: ${numMaximo}`);
//min
let numMinimo = Math.min(1,25,12,23,56,102);
console.log(`valor min: ${numMinimo}`);

// numero psudo aleatorio
let numRandom = Math.random() * 100;
// usar Math.round() para redondear el numero
console.log(`numero random: ${numRandom.toFixed(2)}`); // toFixed para configurar los decimales

// convertir de string a numero y viceversa
let numeroStr = '261016';
let numeroInt = 130921
console.log("conversion Str a Int: " + parseInt(numeroStr))
console.log("conversion Int a Str: " +numeroInt.toString())
