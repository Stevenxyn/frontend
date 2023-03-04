//Arreglos de 1 dimension
const _8_frutas = ["Manzana", " Pera", " Bananos", " Fresas"];

//Llamando un array
document.write(_8_frutas + "<br>");

//Llamar ciertos elementos del array
document.write(_8_frutas[3] + "<br>");

const _8_variado = [1, true, false, 6, ["A", "B", "C", ["Audi", "Porsche", "Toyota"], "D", "E"], "Hola"];

document.write(`Llamar elementos de la primera dimension: <b>${_8_variado[5]}</b> <br>`);
document.write(`Llamar elementos de la segunda dimension: <b>${_8_variado[4][4]}</b> <br>`);
document.write(`Llamar elementos de la tercera dimension: <b>${_8_variado[4][3][1]}</b> <br>`);

//Aregar elementos a un arrray al final
_8_frutas.push("Mandarinas");
document.write(_8_frutas + "<br>");
//Eliminar ultimo elemento de un array
_8_frutas.pop();
document.write(_8_frutas + "<br>");
_8_frutas.pop();

//Agregar elementos a la primera dimension
_8_variado.push("Agregando a la Primera Dimension");
//console.log(_8_variado);

//Agregar elementos a la segunda dimension
_8_variado[4].push("Agregando a la Segunda Dimension");
//console.log(_8_variado);

//Agregar elementos a la tercera dimension
_8_variado[4][3].push("Agregando a la Tercera Dimension");
//console.log(_8_variado);


//Pintar en el HTML
_8_frutas.forEach(function (elemento, indice) {
  document.write(`
  <ul>
    <li id="${indice}">${elemento}</lis>
  </ul>
  `)
})
