let fields = document.getElementById("frmDataHero").getElementsByTagName('*');
    for(var i = 0; i < fields.length; i++){
        fields[i].disabled = true;
    }
function nuevo(){
    let regisTrajes = document.getElementById("grpSuites");
        regisTrajes.innerHTML = `
        <div class="col">
            <div class="card border-primary mb-3" style="max-width: 100%;">
                <div class="card-header">
                    Registro de Trajes
                </div>
                <div class="card-body text-primary">
                    <h5 class="card-title">Traje del personaje</h5>
                    <p>En esta seccion podras registrar los nombres de los trajes usados por el actor en cada 
                        una de las peliculas.
                    </p>
                    <a class="btn btn-warning" href="#" id="addSuite">+</a>
                    <div class="" style="width: 100%;">
                        <div class="container body-detail"></div>
                    </div>
                </div>
            </div>
        </div>
        `;
    let fields = document.getElementById("frmDataHero").getElementsByTagName('*');
    for(var i = 0; i < fields.length; i++){
        fields[i].disabled = false;
    }
}

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
    console.log(info);
    alert("Información guardada correctamente.");
}    

function cancelar(){
    let fields = document.getElementById("frmDataHero").getElementsByTagName('*');
    for(var i = 0; i < fields.length; i++){
        fields[i].disabled = true;
    }
    let regisTrajesCan = document.getElementById("grpSuites");
    regisTrajesCan.disabled = true;
}

function mostrar(){
    let informacionJSON = localStorage.getItem("informacion"); // traer la información del almacenamiento local
    if(informacionJSON){
        let info = JSON.parse(informacionJSON); // Convertir la información JSON a un objeto JavaScript
        let infoGuardada = document.getElementById("mostarInfo");
        infoGuardada.innerHTML = `
        <div class="col">
            <div class="card border-success mb-3" style="max-width: 100%;">
                <div class="card-header">
                    Informacion de los Heroes
                </div>
                <div class="card-body text-success">
                    <h5 class="card-title">Heroe</h5>
                    <p>Nombre: ${info.nombre}</p>
                    <p>Nombre del actor: ${info.nombre_actor}</p>
                    <p>Edad: ${info.edad}</p>
                    <p>Ubicación: ${info.ubicacion}</p>
                    <p>Poster: ${info.poster}</p>
                    <p>Fecha: ${info.fecha}</p>
                    <p>Productora: ${info.productora}</p>
                </div>
            </div>
        </div>
        `;
    } else {
        alert("No hay información guardada.");
    }
}
