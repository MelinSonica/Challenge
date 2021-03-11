//2. Index o Value? 
// Crea una función llamada "min" que tome dos parámetros. Un arreglo de números desordenados y un string que va a valer "index" o "value". Si el string es "value", la función deberá devolver el número más chico del array. Si el string es "index", la función deberá devolver el índice (la posición) del número más chico en el array. 
// 	Ejemplo:
// - min([5,8,2,3,4,9,1,18], “index”) debe retornar 6 (porque es el índice del 1 que es el menor)
// - min([5,8,2,3,4,9,1,18], “value”) debe retornar 1 (porque 1 es el menor número)


function min (x,y) {
  

   let reciclo=x[0]

  for (let i=0; i<x.length ; i++) {
    
    if (x[i]<reciclo) {

        reciclo = x[i]
    }
  }
  
  if(y=="value") {
  console.log (reciclo)
  }

  else if (y=="index") {
    console.log (x.indexOf(reciclo))
  }


  }
  
min ([5,8,2,3,4,9,100,18], "value")

