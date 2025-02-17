let currentInput = '';  // Almacena el número o la expresión actual
let currentOperation = '';  // Almacena la operación actual

// Función para agregar números al input
for (let i = 0; i < 10; i++) {
    let button = document.getElementById("button" + i);
    if (button) {
        button.addEventListener("click", () => {
            currentInput += i;  // Agrega el número presionado al resultado actual
            document.getElementById("result").innerHTML = currentInput;  // Muestra el número actualizado
        });
    }
}

// Operaciones matemáticas usando switch
document.querySelectorAll('#buttonSumar, #buttonRestar, #buttonDividir,#buttonMultiplicar').forEach(button => {
    button.addEventListener("click", () => {
        // Determinar la operación seleccionada
        switch (button.id) {
            case 'buttonSumar':
                currentOperation = '+';
                break;
            case 'buttonRestar':
                currentOperation = '-';
                break;
            case 'buttonDividir':
                currentOperation = '/';
                break;
            case 'buttonMultiplicar':
                currentOperation = '*';
                break;
        }
        currentInput += currentOperation;  // Agregamos la operación al resultado
        document.getElementById("result").innerHTML = currentInput;  // Muestra la expresión
    });
});

// Botón igual (=) para evaluar la expresión
document.getElementById("buttonIgual").addEventListener("click", () => {
    try {
        // Usamos eval para evaluar la expresión matemática en currentInput
        let result = eval(currentInput);  // Esto convierte la expresión en un valor numérico
        document.getElementById("result").innerHTML = result;
        currentInput = result.toString();  // Guardamos el resultado como texto para seguir operando
        document.getElementById("result").setAttribute("style", "color:rgb(50, 247, 67);");
    } catch (error) {
        document.getElementById("result").innerHTML = "Error";
        document.getElementById("result").setAttribute("style", "color: crimson;");
        currentInput = '';  // Reiniciamos la entrada si ocurre un error
    }
});

// Botón de limpieza (C)
document.getElementById("buttonLimpiar").addEventListener("click", () => {
    currentInput = '';  // Limpiamos la entrada
    document.getElementById("result").innerHTML = '0000';  // Mostramos "0000" cuando esté vacío
    document.getElementById("result").setAttribute("style", "color: ghostwhite;");
});
