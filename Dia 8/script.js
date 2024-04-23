function fetchStarWars(){
    let xhr = new XMLHttpRequest();
    let url = `https://swapi.py4e.com/api/people/1`;
    xhr.open('Get',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayPeople(response);
        } else if(this.readyState == 4){
            console.log("Error:",this.statusText);
        }
    };
    xhr.send();
}

function displayPeople(data){

    let peopleInfo = document.getElementById("peopleStartWarsInfo");
    if (data.response === "error"){
        peopleInfo.innerHTML = `<p>Error: ${data.error}</p>`
    }else{
        homeworld = data.homeworld;

        peopleInfo.innerHTML = `
        <h1>People</h1>
        <p>Name: ${data.name}</p>
        <p>Height: ${data.height}</p>
        <p>Mass: ${data.mass}</p>
        <p>Hair color: ${data.hair_color}</p>
        <p>Skin color: ${data.skin_color}</p>
        <p>Eye color: ${data.eye_color}</p>
        <p>Birth year: ${data.birth_year}</p>
        <p>Gender: ${data.gender}</p>
        
        <p>Homeworld: ${homeworld.name}</p>
        <p>Films: ${data.films}</p>
        <p>Species: ${data.species}</p>
        <p>Vehicles: ${data.vehicles}</p>
        <p>Starships: ${data.starships}</p>
        <p>Created: ${data.created}</p>
        <p>Edited: ${data.edited}</p>
        <p>Url: ${data.url}</p>

        `
    }
}

