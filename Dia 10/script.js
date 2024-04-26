function fetchStarWars(){
    let xhr = new XMLHttpRequest();
    let peopleID = document.getElementById("peopleId").value;
    let url = `https://swapi.py4e.com/api/people/${peopleID}`;
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
        //------------------------------------------PEOPLE------------------------------------
        peopleInfo.innerHTML = `
        <table class="table-dark table-sm table-bordered border-danger">
            <tr>
                <th scope="row">Name:</th>
                <td>${data.name}</td>
            </tr>
            <tr>
                <th scope="row">Height:</th>
                <td>${data.height}</td>
            </tr>
            <tr>
                <th scope="row">Mass:</th>
                <td>${data.mass}</td>
            </tr>
            <tr>
                <th scope="row">Hair color:</th>
                <td>${data.hair_color}</td>
            </tr>
            <tr>
                <th scope="row">Skin color:</th>
                <td>${data.skin_color}</td>
            </tr>
            <tr>
                <th scope="row">Eye color:</th>
                <td>${data.eye_color}</td>
            </tr>
            <tr>
                <th scope="row">Birth year:</th>
                <td>${data.birth_year}</td>
            </tr>
            <tr>
                <th scope="row">Gender:</th>
                <td>${data.gender}</td>
            </tr>
            <tr id = "homeworld"><tr>
            <tr id = "films"></tr>
            <tr id = "species"></tr>
            <tr id = "vehicles"></tr>
            <tr id = "starships"></tr>
            <tr>
                <th scope="row">Created:</th>
                <td>${data.created}</td>
            </tr>
            <tr>
                <th scope="row">Edited:</th>
                <td>${data.edited}</td>
            </tr>
            <tr>
                <th scope="row">Url:</th>
                <td>${data.url}</td>
            </tr>
        </table> `;
        //------------------------------------------HOMEWORLD------------------------------------
        fetch(data.homeworld)
            .then(response => response.json())
            .then(homeworldData =>{
                let homeworldInfo = document.getElementById("homeworld");
                homeworldInfo.innerHTML = `
                <table class=" table-bordered border-danger">
                <tr>
                    <th scope="row">Homeworld:</th>
                    <td>
                        <table class=" table-bordered border-danger">
                            <tr>
                                <th scope="row">Name:</th>
                                <td>${homeworldData.name}</td>
                            </tr>
                            <tr>
                                <th scope="row">Rotation period:</th>
                                <td>${homeworldData.rotation_period}</td>
                            </tr>
                            <tr>
                                <th scope="row">Orbital period:</th>
                                <td>${homeworldData.orbital_period}</td>
                            </tr>
                            <tr>
                                <th scope="row">Diameter:</th>
                                <td>${homeworldData.diameter}</td>
                            </tr>
                            <tr>
                                <th scope="row">Climate:</th>
                                <td>${homeworldData.climate}</td>
                            </tr>
                            <tr>
                                <th scope="row">Gravity:</th>
                                <td>${homeworldData.gravity}</td>
                            </tr>
                            <tr>
                                <th scope="row">Terrain:</th>
                                <td>${homeworldData.terrain}</td>
                            </tr>
                            <tr>
                                <th scope="row">Surface water:</th>
                                <td>${homeworldData.surface_water}</td>
                            </tr>
                            <tr>
                                <th scope="row">population:</th>
                                <td>${homeworldData.population}</td>
                            </tr>
                            <tr>
                                <th scope="row">created:</th>
                                <td>${homeworldData.created}</td>
                            </tr>
                            <tr>
                                <th scope="row">edited:</th>
                                <td>${homeworldData.edited}</td>
                            </tr>
                            <tr>
                                <th scope="row">url:</th>
                                <td>${homeworldData.url}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                </table>
                `;
        })
        .catch(error => {
            console.error('Error fetching homeworld:', error);
        });
        //------------------------------------------FILMS------------------------------------
        let filmsInfo = document.getElementById("films");
        filmsInfo.innerHTML = '';         
        
        for (let i = 0; i <= data.films.length; i++) {
    
        fetch(data.films[i])
            .then(response => response.json())
            .then(filmsData =>{
                filmsInfo.innerHTML += `
                <table class=" table-bordered border-danger">
                <tr>
                    <th scope="row">Films:</th>
                    <td>
                        <table class=" table-bordered border-danger">
                            <tr>
                                <th scope="row">title:</th>
                                <td>${filmsData.title}</td>
                            </tr>
                            <tr>
                                <th scope="row">Episode id:</th>
                                <td>${filmsData.episode_id}</td>
                            </tr>
                            <tr>
                                <th scope="row">Opening crawl:</th>
                                <td>${filmsData.opening_crawl}</td>
                            </tr>
                            <tr>
                                <th scope="row">Director:</th>
                                <td>${filmsData.director}</td>
                            </tr>
                            <tr>
                                <th scope="row">Producer:</th>
                                <td>${filmsData.producer}</td>
                            </tr>
                            <tr>
                                <th scope="row">Release date:</th>
                                <td>${filmsData.release_date}</td>
                            </tr>
                            <tr>
                                <th scope="row">Created:</th>
                                <td>${filmsData.created}</td>
                            </tr>
                            <tr>
                                <th scope="row">Edited:</th>
                                <td>${filmsData.edited}</td>
                            </tr>
                            <tr>
                                <th scope="row">url:</th>
                                <td>${filmsData.url}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                </table>
                `;
        })
        .catch(error => {
            console.error('Error fetching films:', error);
        });
        }
        //----------------------------------------SPECIES------------------------------------
        fetch(data.species[0])
        .then(response => response.json())
        .then(speciesData =>{
            let speciesInfo = document.getElementById("species");
            speciesInfo.innerHTML = `
            <table class=" table-bordered border-danger">
            <tr>
                <th scope="row">Species:</th>
                <td>
                    <table class=" table-bordered border-danger">
                        <tr>
                            <th scope="row">Name:</th>
                            <td>${speciesData.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Classification:</th>
                            <td>${speciesData.classification}</td>
                        </tr>
                        <tr>
                            <th scope="row">Designation:</th>
                            <td>${speciesData.designation}</td>
                        </tr>
                        <tr>
                            <th scope="row">Average height:</th>
                            <td>${speciesData.average_height}</td>
                        </tr>
                        <tr>
                            <th scope="row">Skin colors:</th>
                            <td>${speciesData.skin_colors}</td>
                        </tr>
                        <tr>
                            <th scope="row">Hair colors:</th>
                            <td>${speciesData.hair_colors}</td>
                        </tr>
                        <tr>
                            <th scope="row">Eye colors:</th>
                            <td>${speciesData.eye_colors}</td>
                        </tr>
                        <tr>
                            <th scope="row">Average lifespan:</th>
                            <td>${speciesData.average_lifespan}</td>
                        </tr>
                        <tr>
                            <th scope="row">Language:</th>
                            <td>${speciesData.language}</td>
                        </tr>
                    </table>
                </td>
            </tr>
            </table>
            `;
        })
        .catch(error => {
        console.error('Error fetching species:', error);
        });
        //----------------------------------------VEHICLES-----------------------------------
        fetch(data.vehicles[0])
        .then(response => response.json())
        .then(vehiclesData =>{
            let vehiclesInfo = document.getElementById("vehicles");
            vehiclesInfo.innerHTML = `
            <table class=" table-bordered border-danger">
            <tr>
                <th scope="row">Vehicles:</th>
                <td>
                    <table class=" table-bordered border-danger">
                        <tr>
                            <th scope="row">Name:</th>
                            <td>${vehiclesData.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Model:</th>
                            <td>${vehiclesData.model}</td>
                        </tr>
                        <tr>
                            <th scope="row">Manufacturer:</th>
                            <td>${vehiclesData.manufacturer}</td>
                        </tr>
                        <tr>
                            <th scope="row">Cost in credits:</th>
                            <td>${vehiclesData.cost_in_credits}</td>
                        </tr>
                        <tr>
                            <th scope="row">Length:</th>
                            <td>${vehiclesData.length}</td>
                        </tr>
                        <tr>
                            <th scope="row">Max atmosphering speed:</th>
                            <td>${vehiclesData.max_atmosphering_speed}</td>
                        </tr>
                        <tr>
                            <th scope="row">Crew:</th>
                            <td>${vehiclesData.crew}</td>
                        </tr>
                        <tr>
                            <th scope="row">Passengers:</th>
                            <td>${vehiclesData.passengers}</td>
                        </tr>
                        <tr>
                            <th scope="row">Cargo capacity:</th>
                            <td>${vehiclesData.cargo_capacity}</td>
                        </tr>
                        <tr>
                            <th scope="row">Consumables:</th>
                            <td>${vehiclesData.consumables}</td>
                        </tr>
                        <tr>
                            <th scope="row">Vehicle class:</th>
                            <td>${vehiclesData.vehicle_class}</td>
                        </tr>
                    </table>
                </td>
            </tr>
            </table>
            `;
        })
        .catch(error => {
        console.error('Error fetching vehicles:', error);
        });
        //---------------------------------------STARTSHIPS---------------------------------
        fetch(data.starships[0])
        .then(response => response.json())
        .then(starshipsData =>{
            let starshipsInfo = document.getElementById("starships");
            starshipsInfo.innerHTML = `
            <table class=" table-bordered border-danger">
            <tr>
                <th scope="row">Starships:</th>
                <td>
                    <table class=" table-bordered border-danger">
                        <tr>
                            <th scope="row">Name:</th>
                            <td>${starshipsData.name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Model:</th>
                            <td>${starshipsData.model}</td>
                        </tr>
                        <tr>
                            <th scope="row">Manufacturer:</th>
                            <td>${starshipsData.manufacturer}</td>
                        </tr>
                        <tr>
                            <th scope="row">Cost in credits:</th>
                            <td>${starshipsData.cost_in_credits}</td>
                        </tr>
                        <tr>
                            <th scope="row">Length:</th>
                            <td>${starshipsData.length}</td>
                        </tr>
                        <tr>
                            <th scope="row">Max atmosphering speed:</th>
                            <td>${starshipsData.max_atmosphering_speed}</td>
                        </tr>
                        <tr>
                            <th scope="row">Crew:</th>
                            <td>${starshipsData.crew}</td>
                        </tr>
                        <tr>
                            <th scope="row">Passengers:</th>
                            <td>${starshipsData.passengers}</td>
                        </tr>
                        <tr>
                            <th scope="row">Cargo capacity:</th>
                            <td>${starshipsData.cargo_capacity}</td>
                        </tr>
                        <tr>
                            <th scope="row">Consumables:</th>
                            <td>${starshipsData.consumables}</td>
                        </tr>
                        <tr>
                            <th scope="row">Hyperdrive rating:</th>
                            <td>${starshipsData.hyperdrive_rating}</td>
                        </tr>
                        <tr>
                            <th scope="row">MGLT:</th>
                            <td>${starshipsData.MGLT}</td>
                        </tr>
                        <tr>
                            <th scope="row">Starship class:</th>
                            <td>${starshipsData.starship_class}</td>
                        </tr>
                    </table>
                </td>
            </tr>
            </table>
            `;
        })
        .catch(error => {
        console.error('Error fetching starships:', error);
        });

    }
}