/*
//Monto que tiene cada uno
let roberto = 1.5;
let pedro = 1.7;
let cofla = 3;
totalMontos = roberto + pedro + cofla;




//Valor total que tienen todos
document.write(`El valor total de los tres niños es de: $<b>${totalMontos}</b>USD`);
*/

//Precios Helados
let hAgua = 0.6;
let hCrema = 1;
let hHeladix = 1.6;
let hHeladivich = 1.7;
let hHelardo = 1.8;
let hPotecito = 2.9;
let hUnCuarto = 2.9;

//Pedir dinero a cada niño

let dineroCofla = parseFloat(prompt("¿Que dinero tienes Cofla?: "));
/*
let dineroRoberto = prompt("¿Que dinero tienes Roberto?: ");
let dineroPedro = prompt("¿Que dinero tienes Pedro?: ");
*/


//Suma y conversion de strgins a number de los valores ingresados
//let totalMontos = dineroCofla + dineroPedro + dineroRoberto;

/* Que helado pueden comprar juntando todos su dinero
if(totalMontos >= 2.9){
  document.write(`Pueden comprar algunos de los siguientes helados su saldo es de <b>$${totalMontos}</b>: <br>
  Palito de helado de agua: $0.6 USD <br> 
  Palito de helado de crema: $1 USD <br>
  Bombon de helado marca heladix: $1.6 USD <br>
  Bombon de helado marca heladivich: $1.7 USD <br>
  Bombon de helado marca helardo: $1.8 USD<br>
  Potecito de helado: $2.9 USD <br>
  Pote de 1/4 KG: $2.9 USD`)
} else if (totalMontos < 0.6){
  document.write(`No les alcanza para ningun helado`)
}
*/

//Que puede comprar cofla y que vueltas le quedaria de cada helado
if (dineroCofla >= 0.6 && dineroCofla < 1) {
  document.write(`Si compras helado de agua: $0.6 USD te sobraria ${(dineroCofla - hAgua).toFixed(1)}`)
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  document.write(`Si compras helado de crema: $1 USD te sobraria ${(dineroCofla - hCrema).toFixed(1)}`)
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
  document.write(`Si compras Bombon de heladix: $1.6 USD te sobraria ${(dineroCofla - hHeladix).toFixed(1)}`)
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
  document.write(`Si compras Bombon de helavich: $1.7 USD te sobraria ${(dineroCofla - hHeladivich).toFixed(1)}`)
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
  document.write(`Si compras Bombon de helardo: $1.8 USD te sobraria ${(dineroCofla - hHelardo).toFixed(1)}`)
} else if (dineroCofla >= 2.9 ) {
  document.write(`Si compras el Potecito de helado: $2.9 USD o el pote de helado 1/4kg: $2.9 USD 
  te sobraria ${(dineroCofla - hPotecito).toFixed(1)}`)
} else {
  alert("No te alcanza para ningun helado")
}


