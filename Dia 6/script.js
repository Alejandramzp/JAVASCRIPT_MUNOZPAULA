//---------------EJERCICIOS DE POO-------------------
console.log("%c\n-------------------1.PERSON--------------------\n","color: #8a0bd2; font-size:20px;");
function Person(name,age,country){
    this.name = name;
    this.age = age;
    this.country =country;
};

var Rononoa = new Person("Roronoa Zoro", 33, "Japan");
var Mulan = new Person("Mulan Patricia", 26, "China");

console.log(Rononoa);
console.log(Mulan);
//-----------------------Ejercicio 2 -------------------
console.log("%c\n-------------------2.RECTANGLE--------------------\n","color: #8a0bd2;font-size:20px;");

function Rectangle(width,height){
    this.width = width;
    this.height = height;
};
var rectangle = new Rectangle(15, 10);

var Rectangle = {
    width : 15,
    height : 10,
    calculateArea: function(){
        console.log("El área de el rectangulo es: "+(this.width*this.height));
    },
    calculatePerimeter: function(){
        console.log("El valor del perímetro es: " + ((2*this.width)+(2*this.height)));
    },

}
console.log(rectangle);
Rectangle.calculateArea();
Rectangle.calculatePerimeter();
//-----------------------Ejercicio 3 -------------------
console.log("%c\n-------------------3.VEHICLE--------------------\n","color: #8a0bd2;font-size:20px;");

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    details() {
      console.log("Make: "+this.make, "Model: "+this.model, "Year :" +this.year);
    }
}
  
class Car extends Vehicle {
    constructor(make, model, year, doors) {
      super(make, model, year);
      this.doors = doors;
    }
  
    details() {
      super.details();
      console.log("Doors: " +this.doors);
    }
  }
  
const carrito = new Car("Jeep", "Wrangler Dragon", 2022, 4);
carrito.details();
//-----------------------Ejercicio 4 ------------------- 
console.log("%c\n-------------------4.VEHICLE--------------------\n","color: #8a0bd2;font-size:20px;");