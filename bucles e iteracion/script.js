document.write(`<h1>Bucles e iteraciones</h1>`);

// if
document.write(`<h2>If</h2>`);
let isOn = true //prompt("Ingrese true o false [1,0]");
if (isOn) {
    document.write("isOn: Verdadero");
}else{
    document.write("isOn: Falso");
}

// for i
document.write(`<h2>For</h2>`);
for (let i = 0; i < 10; i++) {
    document.write(i + " ");
}
document.write("<br>");
//for ... of
let verduras = ["lechuga","tomate","zanahoria"];
for(let item of verduras){
    document.write(item + ",");
}
//label
document.write(`<h2>Label</h2>`);
array1 = [1,2,3,4,5];
array2 = [11,12,13,14,15,array1];
forStop:
for(let array in array2){
    if (array == 5) {
        for (let array of array1){
            forStop
        }
        }
    document.write(array2[array] + " ");
}


// while
document.write(`<h2>While</h2>`); 
let i = 0;
while (i < 10){
    document.write(i + " ");
    i++;
}



