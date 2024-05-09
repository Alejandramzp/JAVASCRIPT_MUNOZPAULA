let ruta = 0;
let xhr = new XMLHttpRequest();
let url = `https://randomuser.me/api/`;
xhr.open('GET',url,true);
xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        let response = JSON.parse(this.responseText);
        console.log(response);
        ruta = response.results[0];
        let pict = document.getElementById("pic");
        pict.innerHTML = `
        <img src="${ruta.picture.large}">
    `;
    } else if(this.readyState == 4){
        console.log("Error:",this.statusText);
    }
};
xhr.send();

function displayName(){
    let name = document.getElementById("info");
    name.innerHTML = `
        <div>
        <h4>Hi, My name is</h4>
        <h1>${ruta.name.first} ${ruta.name.last}</h1>
        </div>
    `;
}

function displayEmail(){
    let email = document.getElementById("info");
    email.innerHTML = `
        <div>
        <h4>My email address is</h4>
        <h1>${ruta.email}</h1>
        </div>
    `;
}

function displayBirthday(){
    let birthday = document.getElementById("info");
    let cumple = ruta.dob.date;
    let fecha = cumple.slice(0,10);
    arrayFecha = fecha.split("-");
    year=arrayFecha[0]
    month=arrayFecha[1]
    day=arrayFecha[2]
    fechaFinal = month+"/"+day+"/"+year 
    birthday.innerHTML = `
        <div>
        <h4>My birthday is</h4>
        <h1>${fechaFinal}</h1>
        </div>
    `;
}

function displayAddress(){
    let address = document.getElementById("info");
    address.innerHTML = `
        <div>
        <h4>My address is</h4>
        <h1>${ruta.location.street.number} ${ruta.location.street.name}</h1>
        </div>
    `;
}

function displayPhone(){
    let phone = document.getElementById("info");
    phone.innerHTML = `
        <div>
        <h4>My phone number is</h4>
        <h1>${ruta.phone}</h1>
        </div>
    `;
}

function displayPassword(){
    let password = document.getElementById("info");
    password.innerHTML = `
        <div>
        <h4>My password is</h4>
        <h1>${ruta.login.password}</h1>
        </div>
    `;
}