function fetchSuperHero(){
    let xhr = new XMLHttpRequest();
    let heroID = document.getElementById("heroId").value;
    console.log(heroID)
    let apiKey ="f1cf7e7539ced48b42ccb4238f33cba2";
    let url = `https://superheroapi.com/api.php/${apiKey}/${heroID}`;
    xhr.open('Get',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayHero(response);
        } else if(this.readyState == 4){
            console.log("Error:",this.statusText);
        }
    };
    xhr.send();
}

function displayHero(data){

    let heroInfo = document.getElementById("superHeroInfo");
    if (data.response === "error"){
        heroInfo.innerHTML = `<p>Error: ${data.error}</p>`
    }else{
        heroInfo.innerHTML = `
        <h1>Héroe</h1>
        <p>Name: ${data.name}</p>

        <h2>Powerstats:</h2>
        <p>Intelligence: ${data.powerstats.intelligence}</p>
        <p>Strength: ${data.powerstats.strength}</p>
        <p>Speed: ${data.powerstats.speed}</p>
        <p>Durability: ${data.powerstats.durability}</p>
        <p>Power: ${data.powerstats.power}</p>
        <p>Combat: ${data.powerstats.combat}</p>
        <h2>Image :</h2>
        <br><img src="${data.image.url}"</br>

        <h2>Biography:</h2>
        <p>Full-name: ${data.biography["full-name"]}</p>
        <p>Alter-egos: ${data.biography["alter-egos"]}</p>
        <p>Aliases: ${data.biography["aliases"]}</p>
        <p>Place-of-birth: ${data.biography["place-of-birth"]}</p>
        <p>First-appearance: ${data.biography["first-appearance"]}</p>
        <p>Publisher: ${data.biography["publisher"]}</p>
        <p>Alignment: ${data.biography["alignment"]}</p>

        <h2>Appearance:</h2>
        <p>Gender: ${data.appearance["gender"]}</p>
        <p>Race: ${data.appearance["race"]}</p>
        <p>Height: ${data.appearance["height"]}</p>
        <p>Weight: ${data.appearance["weight"]}</p>
        <p>Eye-color: ${data.appearance["eye-color"]}</p>
        <p>Hair-color: ${data.appearance["hair-color"]}</p>

        <h2>Work:</h2>
        <p>Occupation: ${data.work["occupation"]}</p>
        <p>Base: ${data.work["base"]}</p>

        <h2>Connections:</h2>
        <p>Group-affiliation: ${data.connections["group-affiliation"]}</p>
        <p>Relatives: ${data.connections["relatives"]}</p>
        `
    }
}
