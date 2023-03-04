document.write("<h3>Funciones Declaradas </h3>")

function _7_estoEsUnaFuncion() {
  document.write(`Uno <br>`);
  document.write(`Dos <br>`);
  document.write(`Tres <br>`);
}
//Invocacion de la funcion
_7_estoEsUnaFuncion();

document.write("<br>************<br>")

//Funcion que devuelva valores
function _7_funcionQueDevuelveValores() {
  document.write("Esta funcion devuelve valores <br>");
  return "Funcion ha retornado un string"
}
//Guardamos el resultado del return de la funcion en una variable y asi podemos acceder al valor que nos retorno
let _7_retornoDeFuncion = _7_funcionQueDevuelveValores();
document.write("<b>Valor que nos retorna la funcion:</b> " + _7_retornoDeFuncion);

document.write("<br>************<br>")

//Funcion que recibe parametros y podemos poner valores por defecto para que si no le asignamos nada al llamarla tenga algo por defecto.
function saludar(nombre = "Desconocido", edad = 0) {
  document.write(`Hola mi nombre es ${nombre} y tengo ${edad} años! <br>`);
}
//Invocar la funcion y asignarle los dos parametros o la cantidad de parametros que le hayamos puesto.
saludar("Steven Lopez", 27);
//En dado caso que invoquemos la funcion sin los parametros asignados nos mostrada Undefined
saludar();
//Al asignarle ya parametros, los valores que pusimos por defecto en los parametros de la funcion seran sobrescritos.
saludar("Danna", 22);

//Funciones Anonimas
document.write("<h3>Funciones Anonimas o Funciones expresadas</h3>")
document.write("<p>Estas funciones no se pueden invocar antes de ser inicializadas</p>")

//Funciones expresadas dan error si se llaman antes de estar inicializadas
//funcionAnonima();
const funcionAnonima = function () {
  document.write(`Esta es una funcion Anonima que no se puede invocar antes de estar inicializada o nos mostrara ERROR!!🧨`)
}
funcionAnonima();

