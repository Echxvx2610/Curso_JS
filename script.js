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
let verduras = ["lechuga","tomate","zanahoria"];
let vegetales = frutas.concat(verduras);
document.write("contenido: " + vegetales + "<br>");
document.write("longitud: " + vegetales.length + "<br>");

// let colores_backgroud = ["#f3e5d3", "#abe890bd", "#abe890bd"];
// let timer = 0;

// // Usamos setInterval para repetir el cambio de color cada 3 segundos
// setInterval(() => {
//     let index = 0;
//     colores_backgroud.forEach(color => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//         }, index * 1000); // Establece el retraso de cada color
//         index++;
//     });
// }, colores_backgroud.length * 1000);  // Esto repetirá el ciclo cada 3 segundos (la duración total)

// Array Asociativos
document.write("<h2>Array Asociativos ('Diccionarios en Python')</h2>");

let mascotas = {
    // clave:valor
    "gato": "felino",
    "perro": "canino",
    "loro": "ave"
};

document.write("<ul><strong>Claves (mediante for i):</strong></ul>");

// imprimir claves
for (let i in mascotas) {
    if (mascotas.hasOwnProperty(i)) {  // Asegurarse de que no se estén iterando propiedades heredadas
        document.write("<li style=margin-left:50px;>" + i + "</li>");
    }
}

document.write("<ul><strong>Claves (mediante Object.keys()):</strong></ul>");

// Obtener las claves usando Object.keys()
Object.keys(mascotas).forEach(key => {
    document.write("<li style=margin-left:50px;>" + key + "</li>");
});

document.write("<ul><strong>Valores (mediante for i):</strong></ul>");
for(let i in mascotas){
    document.write("<li style=margin-left:50px;>" + mascotas[i] + "</li>");
}

document.write("<ul><strong>Valores (mediante Object.values()):</strong></ul>");
Object.values(mascotas).forEach(value => {
    document.write("<li style=margin-left:50px;>" + value + "</li>");
})

document.write("<h2>Modificar Arrays Asociativos</h2>");
//agregar 
document.write("<p>Agregar:</p>");
mascotas.perra = "canina";
mascotas["paloma"] = "pajarraco";
for (i in mascotas){
    document.write(`mascota: ${i} - ${mascotas[i]} <br>`);
}
// modificar 
document.write("<p>Modificar:</p>");
mascotas.perra = "perra voladora";
mascotas["paloma"] = "rata voladora";
for (i in mascotas){
    document.write(`mascota: ${i} - ${mascotas[i]} <br>`);
}
// eliminar 
document.write("<p>Eliminar:</p>");
delete mascotas.perra;
delete mascotas["paloma"];
for (i in mascotas){
    document.write(`mascota: ${i} - ${mascotas[i]} <br>`);
}


// Ejemplo Array asociativos
document.write("<h2>Ejemplo Array asociativos</h2>");
let pc = {
    "marca": "Asus",
    "modelo": "ROG",
    "procesador": "i7",
    "ram": "8gb",
}

let pc2 = ["Intel", "THINKPAD", "i5", "16gb"];

document.write("<p> la forma en la que accedemos a los dos array es diferente:</p>");
document.write(`Array asociativos: ${pc["marca"]}<br>`);
document.write(`Array asociativos: ${pc2[0]}<br>`);