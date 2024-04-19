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
console.log("%c\n------------------2.RECTANGLE-------------------\n","color: #8a0bd2;font-size:20px;");

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

};
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
};
  
class Car extends Vehicle {
    constructor(make, model, year, doors) {
      super(make, model, year);
      this.doors = doors;
    }
  
    details() {
      super.details();
      console.log("Doors: " +this.doors);
    }
};
  
var carrito = new Car("Jeep", "Wrangler Dragon", 2022, 4);
console.log(carrito);
carrito.details();
//-----------------------Ejercicio 4 ------------------- 
console.log("%c\n-------------------4.BANKACCOUNT-------------------\n","color: #8a0bd2;font-size:20px;");

function BankAccount(accountNumber,balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
  this.deposit = function(balance,deposit){
    return BankAccount.balance = balance + deposit
  }
  this.withdraw = function(balance,withdraw){
    return BankAccount.balance = balance - withdraw
  }
};

var account = new BankAccount(195, 2000000);
console.log(account);

console.log("\n Depósito a la cuenta de $50000 y ahora el saldo es:",account.deposit(account.balance,150000));

console.log("\n Retiro a la cuenta de $50000 y ahora el saldo es:",account.withdraw(account.balance,50000));

//-----------------------Ejercicio 5 ------------------- 
console.log("%c\n------------5.ÁREA CIRCLE AND TRIANGLE-------------\n","color: #8a0bd2;font-size:20px;");

class Shape {
  calculate(){
    throw new Error("Método de cálculo del área anulado");
  }
};

class Circle extends Shape{
  constructor(radio){
    super();
    this.radio = radio;
  }

  calArea(){
    var area = 3.14 *(this.radio*this.radio);
    return area
  }
};

class Triangle extends Shape{
  constructor(base,height) {
    super();
    this.base = base;
    this.height = height;
  }

  calArea() {
    var area = (this.base*this.height) / 2;
    return area
  }
};

var circle = new Circle(10);
console.log(circle);
var areaCircle = circle.calArea();
console.log("El área del círculo es:", areaCircle);

var triangle = new Triangle(6,10);
console.log(triangle);
var areaTriangle = triangle.calArea();
console.log("El área del triángulo es:", areaTriangle);

//-----------------------Ejercicio 6 ------------------- 
console.log("%c\n----------------6.-----------------\n","color: #8a0bd2;font-size:20px;");

