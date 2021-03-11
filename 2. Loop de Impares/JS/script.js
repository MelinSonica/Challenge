//Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
//Ahora, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.


function loopDeImpares (n,x) {

  for(let i=0; i<=100; i++) {
  
    if ((i+n)%2!==0) {
     console.log (x)
     }
     else {
      console.log (i)
     }
  }
}

loopDeImpares (4,"Chan") 