let seleccionadas=[];
let numSeleccionadas = 0;

fetchCards();

function fetchCards(){
    let xhr = new XMLHttpRequest();
    let url = `https://deckofcardsapi.com/api/deck/new/draw/?count=10`; //Barajar las cartas definiendo la cantidad de cartas a usar
    xhr.open('Get',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            let cardsOriginal = response.cards;
            let cardsDupli = JSON.parse(JSON.stringify(response.cards)); //JSON.stringify(response.cards): convierte el array de cartas(response.cards) en una cadena JSON
            //JSON.parse(): convierte la cadena JSON en un array de js(nueva instancia del array con sus elementos independiente del array principal)---  let cardsDupli: contiene la copia exacta del array completamente independiente
            let finalCards = cardsOriginal.concat(cardsDupli); //se concatena el array(cardsDupli) con el array principal(response.cards) esto crea un nuevo array que contiene todos los elementos (principales y los duplicados) y los añade al array principal
            finalCards.sort(() => Math.random() - 0.5);
            containerCard.innerHTML = '';
            for (let i = 0; i < finalCards.length; i++) {
                finalCards[i].id = i;
                displayCards(finalCards[i]); //se da la ruta para que ingrese a las caracteristicas de la carta 
            }
        } else if(this.readyState == 4){
            console.log("Error:",this.statusText);
        }
    };
    xhr.send();
}

function displayCards(card){
    let containerCard= document.getElementById("containerCard");
    let cardCont = document.createElement("div");
    cardCont.classList.add("cartaCont");
    containerCard.appendChild(cardCont); //contenedor de las cartas por los dos lados

    let cardElement = document.createElement("img");
    cardElement.src = card.image;//ruta para buscar la imagen de la carta
    cardElement.classList.add("frente");
    cardElement.setAttribute("data-id", card.code);
    cardCont.appendChild(cardElement);

    let backElement = document.createElement("img");
    backElement.src = "storage/carta.png";
    backElement.classList.add("atras");
    cardCont.appendChild(backElement);

    cardCont.addEventListener("click", function() {
        if (numSeleccionadas === 2 || cardCont.classList.contains("seleccionada")) return;

        cardCont.classList.add("girar");
        seleccionadas.push(card.code); // Usamos el código de la carta como identificador
        numSeleccionadas++;

        if (numSeleccionadas === 2) {
            setTimeout(compararCartas, 1000);
        }
    });
}

function compararCartas() {
    console.log("Comparando cartas...");
    if (seleccionadas.length === 2) {
        let codigo1 = seleccionadas[0];
        let codigo2 = seleccionadas[1];
        console.log("Código de la carta 1:", codigo1);
        console.log("Código de la carta 2:", codigo2);

        if (codigo1 === codigo2) {
            console.log("¡Las cartas son parejas!");
            // Si las cartas son pareja, agregamos una clase adicional a cada carta
            let card1 = document.querySelector(`[data-id="${codigo1}"]`);
            let card2 = document.querySelector(`[data-id="${codigo2}"]`);
            console.log("Carta 1 seleccionada:", card1);
            console.log("Carta 2 seleccionada:", card2);
            card1.classList.add("seleccionada");
            card2.classList.add("seleccionada");
        } else {
            console.log("Las cartas no son parejas, volteando...");
            // Si las cartas no son pareja, las volteamos
            let card1 = document.querySelector(`[data-id="${codigo1}"]`);
            let card2 = document.querySelector(`[data-id="${codigo2}"]`);
            setTimeout(() => {
                card1.parentElement.classList.remove("girar");
                card2.parentElement.classList.remove("girar");
            }, 1000);
        }
        
        setTimeout(resetSeleccionadas, 1000);
    }
}

function resetSeleccionadas() {
    let cards = document.querySelectorAll(".cartaCont");
    cards.forEach(cardCont => {
        cardCont.classList.remove("girar");
    });

    seleccionadas = [];
    numSeleccionadas = 0;
}
document.getElementById("buttonFetch").addEventListener("click", fetchCards);
