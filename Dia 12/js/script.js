function fetchCards(){
    let xhr = new XMLHttpRequest();
    let url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`; //Barajar las cartas definiendo la cantidad de cartas a usar "count=1" 
    xhr.open('Get',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            let xhr = new XMLHttpRequest();
            let url = `https://deckofcardsapi.com/api/deck/${response.deck_id}/draw/?count=1`; //se entra con el ID para que muestre las cartas 
            xhr.open('Get',url,true);
            xhr.onreadystatechange = function(){
                if (this.readyState === 4 && this.status === 200){
                    let response = JSON.parse(this.responseText);
                    console.log(response);
                   displayCards(response.cards[0]);  // 
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
    CardElement.src = card.image;
    containerCard.innerHTML = '';
    containerCard.appendChild(CardElement);
}
document.getElementById("buttonFetch").addEventListener("click", fetchCards);