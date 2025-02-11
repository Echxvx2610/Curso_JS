document.getElementById("btn-api").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById("result");

        // Limpiar el contenido previo
        resultDiv.innerHTML = '';

        // Recorremos todos los elementos de la respuesta (que son objetos)
        data.forEach(item => {
            const itemDiv = document.createElement('div');
            
            itemDiv.innerHTML = `
                <p><strong>Usuario:</strong> ${item.userId}</p>
                <p><strong>ID:</strong> ${item.id}</p>
                <p><strong>Título:</strong> ${item.title}</p>
                <p><strong>Completado:</strong> ${item.completed}</p>
            `;
            
            // Agregar cada nuevo div al contenedor
            resultDiv.appendChild(itemDiv);
        });
    })
    .catch(error => {
        console.log(error);
    });
});
