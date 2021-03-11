// 15. Prefijos Telefónicos
// 	Utils:
// 	var prefijos = [54, 55, 56, 57, 58]
//  var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
// Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:

// Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los números de prefijos, y como valor, el país correspondiente a cada prefijo.
// ejemplo : 

// {
// 	54: “Argentina”,
// 	55: ”Brasil”,
// 	56: ”Ecuador”,
// 	57: ”Bolivia”
// }


// Validar si los dos primeros números del pasado por parámetro existen en el objeto de prefijos telefónicos. En caso de ser correcto, deberá retornar “Este número pertenece a X”.
// En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”

// Ejemplo: 
// validarPrefijo(“5412345678”) debe retornar “Este número pertenece a Argentina”
// validarPrefijo(“5712345678”) debe retornar “Este número pertenece a Bolivia”
// validarPrefijo(“8012345678”) debe retornar “El número no pertenece a nuestros países”


function validarPrefijo (n) {
  
   let paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
   let prefijos=[54,55,56,57,58]
   let agendatelefonica={}
   let numde2=[]
   let numde3=n.toString() //como numero no puedo extraerlos
   let numde4=0

for (let i=0; i<prefijos.length;i++) {

    agendatelefonica[prefijos[i]]=paises[i]
}

console.log (agendatelefonica)

for(let j=0; j<2;j++) {

    numde2[j]=numde3[j]
  
}

console.log (numde2)

numde4=numde3.substring(0, 2)

console.log (numde4)

if (numde4 in agendatelefonica) {

    console.log("Este número pertenece a " + agendatelefonica[numde4])
}

else {
    console.log("Este número no pertenece a ningun pais del Objeto")
}

}

validarPrefijo (544363456576)
validarPrefijo(5712345678)
validarPrefijo(8012345678)

// function validarPrefijo(numero){

//     var prefijos = [54, 55, 56, 57, 58]
//     var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
//     var prefijo, numeroIngresado;
//     resultado ={}
  
//     if(typeof numero=="number"){numeroIngresado=numero.toString()
//     console.log("convertí a string")} else{numeroIngresado=numero}

//     // genero objeto
//     for (i=0; i<prefijos.length;i++){
//         {resultado[prefijos[i]] = paises[i]}
//     }    

//     // separo prefijo de número
//     prefijo=numeroIngresado.substr(0,2)
//     if(prefijo in resultado){console.log("prefijo "+ prefijo+" Este número corresponde a  "+resultado[prefijo])}
//     else {console.log("El número no pertenece a nuestros países")}
// }


