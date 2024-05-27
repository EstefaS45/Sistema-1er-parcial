function calcularPuntaje() {
    // Definir un arreglo con las respuestas correctas
    const respuestasCorrectas = ["Paris", "1492", /* Agregar respuestas correctas para las otras preguntas */];

    // Inicializar una variable para llevar el registro del puntaje
    let puntaje = 0;

    // Obtener las respuestas proporcionadas por el usuario
    const respuestasUsuario = [
        document.getElementById("answer1").value,
        document.getElementById("answer2").value,
        /* Obtener respuestas para las otras preguntas */
    ];
  // Comparar las respuestas del usuario con las respuestas correctas
  for (let i = 0; i < respuestasCorrectas.length; i++) {
    if (respuestasUsuario[i].toLowerCase() === respuestasCorrectas[i].toLowerCase()) {
        puntaje++; // Incrementar el puntaje si la respuesta es correcta
    }
}

// Mostrar el puntaje final en el elemento con id "score"
document.getElementById("score").textContent = puntaje;
}