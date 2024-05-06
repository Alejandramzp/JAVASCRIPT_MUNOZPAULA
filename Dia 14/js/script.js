
function guardar() {
    let nombre = document.getElementById("nombrePer").value; // Obtener los valores del formulario
    let nombreActor = document.getElementById("nombreAct").value;
    let edad = document.getElementById("edad").value;
    let ubicacion = document.getElementById("ubicacion").value;
    let poster = document.getElementById("poster").value;
    let fecha = document.getElementById("fecha").value;
    let productora = document.getElementById("productora").value;

    let info = {    // Crear un objeto para almacenar la información
        nombre: nombre,
        nombre_actor : nombreActor,
        edad : edad,
        ubicacion : ubicacion,
        poster : poster,
        fecha : fecha,
        productora : productora
    };

    let informacionJSON = JSON.stringify(info); // Convertir el objeto a JSON

    localStorage.setItem("informacion", informacionJSON); // Guardar la información en el almacenamiento local
    alert("Información guardada correctamente."); // Opcionalmente, podrías mostrar un mensaje de éxito
}    

