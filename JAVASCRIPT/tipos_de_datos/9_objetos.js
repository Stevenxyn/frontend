//El objeto puede tener varias claves de cualquier tipo de dato
const _9_steven = {
  //clave:"valor",
  nombre: "Steven Lopez",
  edad: 23,
  soltero: true,
  pasatiempos: ["Escuchar musica ", "Jugar juegos ", "Ver anime"],
  contacto:{
    email: "csteven.lopez@gmail.com",
    facebook: "n/a",
    instagram: "n/a",
    telefono: [3210490192, 32039288194],
  },
  saludar: function (){
    document.write("Esto es un saludo! desde el objeto :) <br>");
  },
  presentarme: function () {
    document.write(`Hola que tal soy ${this.nombre} tengo ${this.edad} puedes contactarte conmigo al ${this.contacto.telefono[1]} o mi ${this.contacto.email} <br>`);
  },
  nacionalidad: "colombiano"
}

//Mostrar nombre del objeto
document.write(_9_steven.nombre + "<br>");
//Mostrar estado civil
document.write(_9_steven.soltero + "<br>");
//Mostrar Pasatiempos
document.write(_9_steven.pasatiempos + "<br>");
document.write(_9_steven.pasatiempos[2] + "<br>");
//Mostrar contactos
/*console.log(_9_steven.contacto);
console.log(_9_steven.pasatiempos);*/

//Invocar las funciones del arreglo
_9_steven.saludar();

//Invocacion funcion de presentacion objeto
_9_steven.presentarme();


//Algunos metodos para objetos
/*console.log( Object.keys(_9_steven));
console.log(Object.values(_9_steven));*/

//Saber si existen propiedades dentro del objeto

/*console.log(_9_steven.hasOwnProperty("nombre"));
console.log(_9_steven.hasOwnProperty("edad"));
console.log(_9_steven.hasOwnProperty("altura"));
console.log(_9_steven.hasOwnProperty("contacto"));*/



 
