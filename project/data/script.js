

const registroForm = document.getElementById('registroForm');
registroForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const calificacion = document.getElementById('txtCalificacion').value;

    if (calificacion < 5 && calificacion >= 0) {
        alert("CALIFICACIÓN INSUFICIENTE");
    }
    else if (calificacion >= 5 && calificacion <= 7) {
        alert("calificación suficiente");
    }
    else if (calificacion >= 8 && calificacion <= 10) {
        alert("calificación Excelente");
    }
    else {
        alert("calificación no valida");
    }
    alert("Registro exitoso");
});


