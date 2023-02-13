//Adiccion
let numero1 = 10;
document.writeln("ADICCION: " + (numero1 += 2) + "<br>");

//Sustraccion
let numero2 = 10;
document.write("SUSTRACCION: " + (numero2 -= 5) + "<br>");

//Multiplicacion
let numero3 = 10;
document.write("MULTIPLICACION: " + (numero3 *= 2) + "<br>");

//Division
let numero4 = 10;
document.write("DIVISION: " + (numero4 /= 2) + "<br>");

//Resto da el resto de la division 10 / 6 
let numero5 = 10;
document.write("RESTO:" + (numero5 %= 6) + "<br>")

//Exponencializacion  110**=2   10*10*10*10
let numero6 = 10;
document.write("EXPONENCIALIZACION:" + (numero6 **= 4) + "<br>")

//sumar y restar de manera mas rapida

let numero7 = 15;
let numero8 = 5;
//Antes de mostrarlo se debe realizar la RESTA de lo contrario no sirve
numero7--
document.writeln("RESTAR DE A UNO: " + (numero7--)  + "<br>")

//Antes de mostrarlo se debe realizar la SUMA de lo contrario no sirve
numero8++
document.writeln("SUMA DE A UNO: " + (numero8++))


