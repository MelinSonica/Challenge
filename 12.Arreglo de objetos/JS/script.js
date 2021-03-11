// 12. Arreglo de objetos 
// Debés crear una función llamada `arregloDeObjetos` que reciba un número y una palabra como parámetro y devuelva un arreglo de objetos que tenga: una propiedad llamada como la palabra pasada por parámetro y el valor del número y sus anteriores.

// Ejemplo:
// arregloDeObjetos(5, “hola”) debe retornar [{ hola: 1}, {hola: 2}, {hola: 3}, {hola: 4},{hola: 5 }]
// arregloDeObjetos(3, “chau”) debe retornar [{ chau: 1, chau: 2, chau: 3 }]


function arregloDeObjetos (n,p) {

let arreglo=[]
let objeto={}
 
        for (let i=0; i<n;i++) {
           
            objeto[p]=i+1
            arreglo[i]=objeto
            objeto={}
           
        }
console.log (arreglo)
}

arregloDeObjetos (5,"hola")

//     if (p=="hola") {

//         for (let i=0; i<n;i++) {

//             arreglo[i]={hola: i+1}
//         }
    
//         console.log(arreglo)
//     }
    
//     else if (p=="chau"){
         

//         for (let i=0; i<n;i++) {
            
          
//             objeto[p+(i+1)]=i+1
            
//         }

        
//         console.log(objeto)

//         for (let x in objeto) {
               
//             x="chau"   
//             console.log(objeto[x])
//         }
    

//         arreglo[0]=objeto
//         console.log(arreglo)


//     }

    

// }




//MALO PORQUE DEVUELVE UN STING
    
    // else if (p=="chau") {

    // let acum="{chau: "

    //         for (let i=0; i<n-1;i++) {

    //            acum=acum+(i+1)+", chau: "          
            
    //          }
    //            acum=acum+n+"}"
      
    //     arreglo[0]=acum

    //     console.log(arreglo)

    // }