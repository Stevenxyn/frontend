let condicion1 = 45;
let condicion2 = 50;
let condicion3 = "50";
let condicion4 = 18; 

//Creacion de condicionales con (==)
if (condicion2 == condicion3) {
  document.write(`Estoy dentro de la condicion de <b>condicion2 == condicion3</b> <br>`);
} else {
  document.write(`Es falso! <br>`);
}

//Creacion de condicionales con (===)
if (condicion1 === condicion3) {
  document.write(`Estoy dentro de la condicion de <b>condicion1 === condicion3</b> <br>`)
} else {
  document.write(`<b>condicion1 === condicion3</b> No son iguales <br>`);
}

//Creacion de condicionales con (!=)
if (false != true) {
  document.write(`Estoy dentro de la condicion de <b>false != true</b> <br>`)
} else {
  document.write(`<b>otro valor != true</b> No son iguales  <br>`);
}

//Creacion de condicionales con (>=)
if (condicion4 >= 18) {
  document.write(`Eres mayor de edad! <br>`);
} else {
  document.write(`Aun eres menor de edad tienes ${condicion4} años<br>`);
}
