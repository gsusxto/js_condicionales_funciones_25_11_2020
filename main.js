//condicional
/*let edad = prompt("Ingrese su edad");

if(edad >= 18){
    alert ("Usted es mayor de edad");
}else{
    alert("Usted es menor de edad");
}*/


//Inequilidad

/*let tarjeta = true;

if(tarjeta !== true){
    alert("Entro por la puerta");
}else{
    alert("No puede entrar a la puerta");
}   */

//Identilidad
/*let numero = true;
let numero2 = false;

if(numero === numero2){
    alert("Entro el número");
}else{
    alert("El número no entro");
}*/

/*let num = prompt("Ingrese un número mayor que (10)");
if(num > 10){
    alert("El número ingresado es: "+num+ " y es mayor a 10", num);
}else{
    alert("El número no es el correcto");
}*/


/*let num = prompt("Ingrese un número mayor que (10)");
if(num >= 10){
    alert("El número ingresado es: "+num+ " y es mayor a 10");
}else{
    alert("El número no es el correcto");
}*/

/*let num = prompt("Ingrese un número menor que (10)");
if(num < 10){
    alert("El número ingresado es: "+num+ " y es menor a 10");
}else{
    alert("El número no es el correcto");
}*/

/*let num = prompt("Ingrese un número menor que (10)");
if(num <= 10){
    alert("El número ingresado es: "+num+ " y es menor a 10");
}else{
    alert("El número no es el correcto");
}*/

//Operadores condición AND
/*let a = true;
let b = false;

if(a && b){
    alert(true);
}else{
    alert(false);
}*/

//Operadores condición OR
/*let a = true;
let b = true;

if(a |= b){
    alert(true);
}else{
    alert(false);
}*/


/*let num1 = 50;
let num2 = "";


if(num1 &= num2){
    alert(true);
}else{
    alert(false);
}*/


/*let edad = prompt("Ingrese su edad");

if(edad == 18){ 
    alert("Cumplio los 18 y es mayor de edad");
}else if((edad >= 19) && (edad <= 20)){  
    alert("Es mayor de edad y menor a 20");
}else if((edad >= 21) && (edad <= 25)){  
    alert("Es mayor de edad y menor a 25");
}else{ 
    alert("Es menor de edad");
}*/

/*let edad = prompt("Ingrese su edad");

if(edad == 18){ //si
    alert("Cumplió los 18 y es mayor de edad");
}else if((edad >= 19) || (edad <= 20)){  
    alert("Es mayor de edad y menor a 20");
}else if((edad >= 21) && (edad <= 25)){  
    alert("Es mayor de edad y menor a 25");
}else{ //no
    alert("es menor de edad");
}*/

//Funciones
function panadria(opcion){
    let plata = 1500;
    let pan = 1000;
    let salchichon = 500;
    let vueltos;
    
    switch (opcion) {

        case "Pagar Pan":
            vueltos = plata - pan;
            break;

        case "Pagar Salchichon":
            vueltos = plata - salchichon;
            break;

        case "Pagar Todo":
            vueltos = plata - pan - salchichon;
            break;
        default:
            break;


    }

    return "Sus vueltos son:" + vueltos;

}
console.log(panaderia(opcion));