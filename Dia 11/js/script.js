let pokemonID = document.getElementById("pokemonId").value;
function fetchPokemon(pokemonID){
    let xhr = new XMLHttpRequest();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
    xhr.open('Get',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayPokemon(response);
        } else if(this.readyState == 4){
            console.log("Error:",this.statusText);
        }
    };
    xhr.send();
}

document.getElementById("pokemonId").addEventListener("keyup", function(event) {
    
    if (event.key === "Enter") { 
      event.preventDefault();
      let pokemonId = document.getElementById("pokemonId").value;
      fetchPokemon(pokemonId);
    }
});
document.getElementById("next").addEventListener("click", function() {
    pokemonID++; 
    fetchPokemon(pokemonID);
});
document.getElementById("prev").addEventListener("click", function() {
    if (pokemonID > 1){
        pokemonID--; 
        fetchPokemon(pokemonID);
    }
});

function displayPokemon(data){

    let pokemonInfo = document.getElementById("pokemon");
    if (data.response === "error"){
        pokemonInfo.innerHTML = `<p>Error: ${data.error}</p>`
    }else{
        pokemonInfo.innerHTML = `
        <p>${data.id} - ${data.name}</p>
        `;
    }

    let pokemonGif = document.getElementById("pokeGif");
    if (data.response === "error"){
        pokemonGif.innerHTML = `<img class="pGif" src ="storage/llave.png">`
    }else{
        pokemonGif.innerHTML = `
        <img class="pGif" src ="${data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]}">
        `;
    }

}
fetchPokemon(pokemonID);