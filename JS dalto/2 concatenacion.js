//Concatenacion de strings
let nombreUsuario = "Steven";
let apellidoUsuario = " Lopez";
document.write(
  "Asi se concatenan strings: " + (nombreUsuario + apellidoUsuario) + "<br>");

//Forzar concatenacion de numeros
let n1 = 5;
let n2 = 5;
document.write("Asi se suman numeros normales: " + (n1 + n2) + "<br>");
document.write("Asi se fuerza a convertir numeros a strings y no se suman se concatenan: " + n1 + n2 + "<br>")

//Template strings y uso de backticks
document.write(`Bienvenido ${nombreUsuario + apellidoUsuario} nuevamente.`)

