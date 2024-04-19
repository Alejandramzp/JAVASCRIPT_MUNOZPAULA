
let tablero = [
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
];
console.log("%c--------------TABLERO------------","color:purple; font-size:20px;");
console.log("%c"+tablero.join("\n"),"font-size:15px;" +"\n\n");

let fila = prompt("Ingrese la fila de la primera reina(0-7)");
let columna = prompt("Ingrese la columna de la primera reina(0-8)"); 
  
tablero[fila][columna] = "R";
console.log("%c"+tablero.join("\n"),"font-size:25px;");
  