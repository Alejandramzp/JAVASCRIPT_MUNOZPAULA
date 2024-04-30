function fetchCards(){
    let xhr = new XMLHttpRequest();
    let url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=5`; //Barajar las cartas definiendo la cantidad de cartas a usar
    xhr.open('Get',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            let xhr = new XMLHttpRequest();
            let url = `https://deckofcardsapi.com/api/deck/${response.deck_id}/draw/?count=5`; //se entra con el ID para que muestre las cartas 
            xhr.open('Get',url,true);
            xhr.onreadystatechange = function(){
                if (this.readyState === 4 && this.status === 200){
                    let response = JSON.parse(this.responseText);
                    console.log(response);
                    let cardsDupli = JSON.parse(JSON.stringify(response.cards)); //JSON.stringify(response.cards): convierte el array de cartas(response.cards) en una cadena JSON
                    //JSON.parse(): convierte la cadena JSON en un array de js(nueva instancia del array con sus elementos independiente del array principal)---  let cardsDupli: contiene la copia exacta del array completamente independiente
                    response.cards = response.cards.concat(cardsDupli); //se concatena el array(cardsDupli) con el array principal(response.cards) esto crea un nuevo array que contiene todos los elementos (principales y los duplicados) y los añade al array principal
                    containerCard.innerHTML = '';
                    for (let i = 0; i < response.cards.length; i++) {
                        displayCards(response.cards[i]); //se da la ruta para que ingrese a las caracteristicas de la carta 
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
    //containerCard.innerHTML = '';
}
document.getElementById("buttonFetch").addEventListener("click", fetchCards);

