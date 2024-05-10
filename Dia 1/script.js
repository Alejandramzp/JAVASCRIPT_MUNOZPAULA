/*--------------------Ejercicios de clase-------------------- */
let a = 25;
var b = 15;
const c = "Paula";
console.log((a+b)/2);
console.log("%c Holi "+c ,"color : #D36582");

let d = true;
let e = false;
console.log("True y False:",(d && e), "\nTrue o False:", d || e);

//-------------------------FUNCIONES-------------------------

//SIN PARAMETROS Y SIN RETORNO-------------------------------

function saludar(){
    console.log("Hola soy una funcion");
}

saludar();

//CON PARAMETROS y SIN RETORNO
function suma(a,b){
    console.log("Hola soy otra función :D")
    console.log(a+b+1)
}
suma(a,b)

//CON PARAMETROS y CON RETORNO
function susuma(a,b){
    return (a+b+5)
}
console.log(susuma(a,b))

//SIN PARAMETROS y CON RETORNO
function salonjiji(){
    return "P1"
}
console.log(salonjiji())

//----------------------Bucles--------------------------------

arreglito=["Tengo sueño",43,false]

tamanioo=arreglito.length

for (let i=0; i<tamanioo; i=i+1){
    console.log(arreglito[i])
}