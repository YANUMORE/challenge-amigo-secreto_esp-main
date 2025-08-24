// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declarar las variables para capturar los elementos del DOM 
let listAmigos = document.getElementById("listaAmigos");
//Declararcion de variable array para los nombres de los amigos
let nombresAmigos = [];

function limpiarTexto() {
//Limpia el campo de texto despues de agregar
       amigo.value = "";
//Vuelve a enfocar el campo de texto
       amigo.focus();
}
function agregarAmigo() {
    let nombreNuevo = document.getElementById("amigo").value;
   //console.log(nombresAmigos);
   //Verifica que el nombre no este vacio
   if (nombreNuevo === "") {
    //Alerta si el campo esta vacio
       alert("Por favor ingresa un nombre válido");   
       
   return;  
   } else {
      if (nombresAmigos.includes(nombreNuevo)){
         alert("El nombre ya existe, ingrese otro por favor");
      //Limpia el campo de texto despues de agregar
      limpiarTexto();
      return;
      }
       //Añada el nombre al array
      nombresAmigos.push(nombreNuevo);
       //Crea un nuevo elemento a la lista de amigos
       let listaNombres = document.createElement("li");
      limpiarTexto(); 
       //listaNombres.innerHTML=""; BORRAR
       //nombresAmigos.forEach(amigo) BORRAR
       
       //Establece el texto del elemento de la lista
      listaNombres.textContent = nombreNuevo;
       //Añade el nuevo elemento en la lista en la pagina
      listAmigos.appendChild(listaNombres);
       //Limpia el campo de texto despues de agregar

          
      }
      //limpiarTexto(); BORRAR
}
  
   
  console.log(nombresAmigos);