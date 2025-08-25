// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declarar las variables para capturar los elementos del DOM 

const amigo = document.getElementById('amigo');
const listAmigos = document.getElementById("listaAmigos");

//Declararcion de variable para los nombres de los amigos
let nombresAmigos = [];

function limpiarTexto() {
//Limpia el campo de texto despues de agregar
       amigo.value = "";
//Vuelve a enfocar el campo de texto
       amigo.focus();
}

function agregarAmigo() {
   const nombreNuevo = document.getElementById("amigo").value;
   const nombre = nombreNuevo.toUpperCase();
   
   //Verifica que el nombre no este vacio
   if (nombre === "") {
    
    //Alerta si el campo esta vacio
    alert("Por favor ingresa un nombre válido");   
    
     
   //return;  
   } else {
      if (nombresAmigos.includes(nombre)){
         alert("El nombre ya existe, ingrese otro por favor");
      //Limpia el campo de texto despues de agregar
      limpiarTexto();
      return;
      }
      
    //Añada el nombre al array
    //nombresAmigos.push(nombreNuevo);
      nombresAmigos.push(nombre);
    //Crea un nuevo elemento a la lista de amigos
      const listaNombres = document.createElement("li");
      limpiarTexto(); 
      //Establece el texto del elemento de la lista
      //listaNombres.textContent = nombreNuevo;
      listaNombres.textContent = nombre;
       //Añade el nuevo elemento en la lista en la pagina
      listAmigos.appendChild(listaNombres);
       //Limpia el campo de texto despues de agregar
          
      }

}
  
   
  //console.log(nombresAmigos);

function sortearAmigos() {
    //console.log(nombresAmigos);
    //nombresAmigos = [];

    if (nombresAmigos.length > 0 ){
       const indiceAleatorio = (Math.floor(Math.random() * nombresAmigos.length));
       //console.log(nombresAmigos[indiceAleatorio]);
      
       const elementoHTML =  document.getElementById("resultado");
      
        //listAmigos.innerHTML ="";
        elementoHTML.innerHTML =  `Nuestro amigo secreto es: ${(nombresAmigos[indiceAleatorio])} `;
      
      
       limpiarCampo();
       const boton = document.getElementById("sortear");
       boton.innerHTML = "Volver a Sortear";
           

       } else {
        alert("La lista esta vacia");
        resultado.innerHTML ="";
        const boton = document.getElementById("sortear");
        boton.innerHTML = "Sortear amigo";
    
                   
   }
   return;



  function limpiarCampo() {
  listAmigos.innerHTML ="";
  nombresAmigos =[];
  nombresAmigos.innerHTML="";
 
     
  }
  

}

