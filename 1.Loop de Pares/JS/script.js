//Loop de pares
//Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
//En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.

function loopDePares (n) {

  for(let i=0; i<=100; i++) {
  
    if ((i+n)%2!==0) {
     console.log (i)
     }
     else {
      console.log ("El numero "+i+"+"+n+" es par")
     }
  }
}

loopDePares (4) 