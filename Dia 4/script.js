//-----------------DECLARACIÓN DE OBJETOS------------------
console.log("%c\n-------------------OBJETOS PERSONA--------------------\n","color: #8a0bd2");

function persona(nombre, edad, sexo) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
};

var Roronoa = new persona("Roronoa Zoro", 33, "M");
var Shrek = new persona("Shrek Patricio", 45, "F");

console.log(Roronoa);
console.log(Shrek);
//--------------------------CARRO---------------------------
console.log("%c\n-------------------OBJETOS CARRO-------------------\n","color: #8a0bd2");

var carrito = {
    marca: "Jeep",
    modelo: "Wrangler Dragon",
    año: 2012,
};

console.log(carrito);

//-------------------------LIBRO----------------------------
console.log("%c\n-------------------OBJETOS LIBRO-------------------\n","color: #8a0bd2");

var libro = {
    nombre: "Orgullo y Prejuicio",
    autor: "Jane Austen",
    genero: 1813,
};

console.log(libro);

//-------------------------NÚMERO---------------------------
console.log("%c\n-------------------OBJETOS NÚMERO-------------------\n","color: #8a0bd2");

var numero = {
    numerito: 26,
    clasificación: "Entero",
    digitos: 2,
};

console.log(numero);

//-------------------------FUNCION--------------------------
console.log("%c\n-------------------OBJETOS FUNCIÓN-------------------\n","color: #8a0bd2");

var animalito = {
    type: "Cucaracha iuu", // Valor predeterminado de las propiedades
    displayType: function () {
      
      console.log(this.type);// Método que mostrará el tipo de Animal
    },
  };
  
  // Crea un nuevo tipo de animal llamado animal1
  var animal1 = Object.create(animalito);// Crea un nuevo tipo de animal llamado animal1
  animal1.displayType(); // Muestra: el type
  
 
  var fish = Object.create(animalito); // Crea un nuevo tipo de animal 
  fish.type = "Perrito Bonito";
  fish.displayType(); // Muestra: type