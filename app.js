// Lista para guardar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Obtiene el valor del campo de entrada
    let nombre = input.value.trim(); // Elimina espacios extras al inicio y al final

    if (nombre === "") { // Valida que el campo no esté vacío
        alert("Por favor, escribe un nombre.");
        return;
    }

    if (listaDeAmigos.includes(nombre)) { // Verifica si el nombre ya está en la lista
        alert("Ese nombre ya está en la lista.");
        return;
    }

    listaDeAmigos.push(nombre); // Agrega el nombre a la lista
    mostrarLista(); // Muestra la lista actualizada en la pantalla
    input.value = ""; // Limpia el campo de entrada
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtiene el <ul> de la lista
    lista.innerHTML = ""; // Limpia cualquier contenido anterior

    // Recorre la lista de amigos y crea <li> para cada uno
    for (let i = 0; i < listaDeAmigos.length; i++) {
        lista.innerHTML += `<li>${listaDeAmigos[i]} <button onclick="eliminarAmigo(${i})" class="button-remove">X</button></li>`;
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) { // Valida que haya al menos un amigo
        alert("No hay suficientes amigos para realizar el sorteo. Agrega al menos uno.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length); // Elige un índice al azar
    let amigoSorteado = listaDeAmigos[indiceAleatorio]; // Obtiene el nombre del amigo
    document.getElementById("resultado").textContent = "El amigo secreto es: " + amigoSorteado; // Muestra el resultado
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(indice) {
    listaDeAmigos.splice(indice, 1); // Elimina el amigo por su posición en la lista
    mostrarLista(); // Muestra la lista actualizada
}

// Función para limpiar toda la lista de amigos
function limpiarLista() {
    listaDeAmigos = []; // Vacía la lista
    mostrarLista(); // Limpia la lista en la pantalla
    document.getElementById("resultado").textContent = ""; // Borra el resultado del sorteo
}
