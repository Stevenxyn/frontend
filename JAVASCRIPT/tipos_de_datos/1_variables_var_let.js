let _1_musica = "rock";
var _1_musica2 = "piano";

document.write("Llamando una variable de bloque fuera de bloque " + _1_musica + "<br>");
//Llamando variables de bloques dentro de un bloque inicializada fuera del bloque
{
  //Si sobre escribimos esta variable solo se vera afectada en en bloque no fuera de el
 let _1_musica = "metal";
  document.write("Variable de bloque dentro de un bloque y modificandola " + _1_musica + "<br>");
}
document.write("Llamando variable previamente modificada dentro del bloque, fuera del bloque " + _1_musica);


document.write("<br><br>")


//Llamada a variable global fuera de bloques
document.write(`Llamando variable global fuera de bloques ${_1_musica2} <br>`);
{
  //Llamada y modificacion de variable global dentro de bloque
  var _1_musica2 = "guitarra";
  document.write("Dentro de bloque llamada a variable global " + _1_musica2 + "<br>");
}
//Llamada de variable global fuera de bloque
document.write("Variable global llamandola fuera del bloque se sobreescribio globalmente " + _1_musica2)

