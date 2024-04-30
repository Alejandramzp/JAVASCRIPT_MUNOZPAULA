function fetchCards(){
    let xhr = new XMLHttpRequest();
    let url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    xhr.open('Get',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayCards(response);
            let xhr = new XMLHttpRequest();
            let url = `https://deckofcardsapi.com/api/deck/${response.deck_id}/draw/?count=1`;
            xhr.open('Get',url,true);
            xhr.onreadystatechange = function(){
                if (this.readyState === 4 && this.status === 200){
                    let response = JSON.parse(this.responseText);
                    console.log(response);
                    displayCards(response);
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

function displayCards(data){
    let imageCard = document.getElementById("imgCard");
    console.log(data.cards);
    cartasA = data.cards;
    cartasA.forEach(cartas => {
        console.log(cartas)
        if (data.response === "error"){
            imageCard.innerHTML = `<p>Error:</p>`
        }else{
            imageCard.innerHTML = `<img src="${cartas.images.svg}">`;
        }
    });
}
