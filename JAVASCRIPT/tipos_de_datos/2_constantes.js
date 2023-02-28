const _2_PI = 3.141617
//Una variable const no puede ser modificada en cuanto a tipos de datos primitivos
// PI = "holis"; ERROR TypeERROR

document.write(`Llamada de una constante ${_2_PI} <br>`);

//array
const _2_Colores = ["blanco", "rojo", "azul"];

/*para tipos de datos compuestos esta regla no aplica porque siguen siendo en si lo mismo solo se les agrega o quita elementos*/
document.write(`Llamando un objeto con const: ${_2_Colores} <br>`);

//Agregando elemento al array
_2_Colores.push("Anaranjado");
document.write(`Agregando elemento al array CONST: ${_2_Colores}`)
