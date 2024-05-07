
const img = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const birthday = document.querySelector('#birthday');
const address = document.querySelector('#address');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');

const crearUsuario = async () => {
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    foto.src = datos.picture.large;
    nombre.textContent = datos.name.first;
    apellido.textContent = datos.name.last;
    email.textContent = datos.email;
    birthday.textContent = datos.dob.date;
    address.textContent = datos.location.street.number + ' ' + datos.location.street.name;
    phone.textContent = datos.phone;
    password.textContent = datos.login.password;
}

document.addEventListener('DOMContentLoaded', crearUsuario);

