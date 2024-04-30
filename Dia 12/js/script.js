function fetchCards(){
    let xhr = new XMLHttpRequest();
    let url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8`; //Barajar las cartas definiendo la cantidad de cartas a usar
    xhr.open('Get',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            let xhr = new XMLHttpRequest();
            let url = `https://deckofcardsapi.com/api/deck/${response.deck_id}/draw/?count=8`; //se entra con el ID para que muestre las cartas 
            xhr.open('Get',url,true);
            xhr.onreadystatechange = function(){
                if (this.readyState === 4 && this.status === 200){
                    let response = JSON.parse(this.responseText);
                    console.log(response);
                    let cardsOriginal = response.cards;
                    let cardsDupli = JSON.parse(JSON.stringify(response.cards)); //JSON.stringify(response.cards): convierte el array de cartas(response.cards) en una cadena JSON
                    //JSON.parse(): convierte la cadena JSON en un array de js(nueva instancia del array con sus elementos independiente del array principal)---  let cardsDupli: contiene la copia exacta del array completamente independiente
                    let finalCards = cardsOriginal.concat(cardsDupli); //se concatena el array(cardsDupli) con el array principal(response.cards) esto crea un nuevo array que contiene todos los elementos (principales y los duplicados) y los añade al array principal
                    for (let i = finalCards.length-1; i > 0 ; i--) {//comienza desde el ultimo elemento en el array(longitud-1) hasta 0 y se va restando de uno en uno 
                        const j = Math.floor(Math.random()*(i+1));//se genera un numero aleatorio en j entre 0 e i,
                        if (i !== j) {
                        [finalCards[i],finalCards[j]]= [finalCards[j],finalCards[i]];//intercambiando posiciones i y j del arreglo y se asigna en un nuevo arreglo en las posiciones i y j.
                        }
                    }
                    containerCard.innerHTML = '';
                    for (let i = 0; i < finalCards.length; i++) {
                        displayCards(finalCards[i]); //se da la ruta para que ingrese a las caracteristicas de la carta 
                    }
                } else if(this.readyState == 4){
                    console.log("Error:",this.statusText);
                }
            };
            xhr.send();
        } else if(this.readyState == 4){
            console.log("Error:",this.statusText);
        }
    };
    xhr.send();
}

function displayCards(card){
    let containerCard= document.getElementById("containerCard");
    let CardElement = document.createElement("img");
    CardElement.src = card.image;//ruta para buscar la imagen de la carta
    containerCard.appendChild(CardElement);
}
document.getElementById("buttonFetch").addEventListener("click", fetchCards);

