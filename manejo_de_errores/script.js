suma = (a, b) => {
    return parseInt(a) + parseInt(b);
}

try {
    // Código que puede lanzar una excepción
    let resultado = suma(5, "a");
    console.log(resultado);
} catch (error) {
    // Código que se ejecuta si ocurre una excepción
    console.error("Ocurrió un error:", error.message);
} finally {
    // Código que se ejecuta siempre, haya o no una excepción
    console.log("Este bloque se ejecuta siempre");
}

