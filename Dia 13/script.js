const json = `{
        "name": "Batman",
        "nombreActor": "pepe",
        "edadActor": "35",
        "ubicacion": "cra 15",
        "poster": "lalala",
        "fecha": "12/12/2015",
        "productora": "comics"   
}`;
console.log(json);
const heroe = JSON.parse(json);
console.log(typeof heroe);

function guardar(event) {
    let nombre = document.getElementById("nombrePer").value;
    let nombreActor = document.getElementById("nombreAct").value;
    let edadActor = document.getElementById("edad").value;
    let ubicacion = document.getElementById("ubicacion").value;
    let poster = document.getElementById("poster").value;
    let fecha = document.getElementById("fecha").value;
    let productora = document.getElementById("productora").value;
    let pregunta = JSON.stringify({nombre, nombreActor, edadActor, ubicacion,poster,fecha, productora});
    console.log(pregunta);
    heroe.push(pregunta);
    console.log(heroe);
}    

document.getElementById("guardar").addEventListener('click', guardar);
