let valorUno = true;
let valorDos = true;
let valorTres = false;
afirmacion1 = 5 >= 10;
afirmacion2 = afirmacion1 == false;

document.write(`(&&) : Devuelve true si solamente los dos valores son verdaderos <b>${valorUno && valorDos}</b> <br>`)
document.write(`(||) : Si almenos 1 es verdadero todo sera verdadero <b>${afirmacion1 || afirmacion2}</b> <br>`)
document.write(`(!) : Altera el valor booleano cambiandolo a lo opuesto <b>${!afirmacion1}</b>` )

