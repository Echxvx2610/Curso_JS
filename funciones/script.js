// //Funciones
// document.write("<h1>Funciones</h1>");

// //let a = parseInt(prompt("Ingrese un numero (a)"));
// //let b = parseInt(prompt("Ingrese un numero (b)"));
// function suma(a,b){
//     return a + b;
// }

// //document.write(suma(a,b)+"<br>")
// document.write(suma(1,3)+"<br>")


// //funciones recursivas
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// document.write(factorial(5)+"<br>")

function writeResult(){
    // recolectar id de botones
    for (let i = 0; i < 10; i++) {
        document.getElementById("button"+i).addEventListener("click", () => {
            document.getElementById("result").innerHTML = i;
        });
    }
}

writeResult();