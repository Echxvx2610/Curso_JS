// Clase Array
// escribir en el html con markdown
document.write("<h1>Arrays</h1>");

let frutas = ["manzana",'banana','pera',"guayaba"];

document.write("<h2>Acceder por indice</h2>");
document.write("Indice 0: " + frutas[0] + "<br>");
document.write("Indice 1: " + frutas[1] + "<br>");
document.write("......" + "<br>");
// bucle for i in array (for in)
document.write("<h2>Bucle for in</h2>");
for (i in frutas) {
    document.write(frutas[i] + "<br>");
}

document.write("<h2>Bucle foreach</h2>");
//bucle foreach ( array.forEach)
frutas.forEach(fruta => {
    document.write(fruta + "<br>");
});

// Alterar Arrays ( Agregar, quitar, modificar)
document.write("<h2>Alterar Arrays ( agregar al final )</h2>");

// Agregar
frutas.push("naranja");
document.write("contenido: " + frutas + "<br>");
document.write("longitud: " + frutas.length + "<br>");

// Agregar por indice
document.write("<h2>Alterar Arrays por indice</h2>");
frutas[3] = "uva";
document.write("contenido: " + frutas + "<br>");
document.write("longitud: " + frutas.length + "<br>");

// Quitar
frutas.pop();
document.write("contenido: " + frutas + "<br>");
document.write("longitud: " + frutas.length + "<br>");

// Quitar por indice
frutas.splice(1,3); // empieza en indice 1 y elimina  3
document.write("contenido: " + frutas + "<br>");
document.write("longitud: " + frutas.length + "<br>");

// para vaciar un array podemos declararlo como .length = 0

// Fusionar Arrays
document.write("<h2>Fusionar Arrays (Vegetales = frutas + verduras)</h2>");
verduras = ["lechuga","tomate","zanahoria"];
Vegetales = frutas.concat(verduras);
document.write("contenido: " + Vegetales + "<br>");
document.write("longitud: " + Vegetales.length + "<br>");