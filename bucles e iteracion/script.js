document.write(`<h1>Bucles e iteraciones</h1>`);

// if
document.write(`<h2>If</h2>`);
let isOn = true //prompt("Ingrese true o false [1,0]");
if (isOn) {
    document.write("isOn: Verdadero");
}else{
    document.write("isOn: Falso");
}

// for
document.write(`<h2>For</h2>`);
for (let i = 0; i < 10; i++) {
    document.write(i + " ");
}

// while
document.write(`<h2>While</h2>`); 
let i = 0;
while (i < 10){
    document.write(i + " ");
    i++;
}

