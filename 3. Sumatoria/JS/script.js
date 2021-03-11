//3. Sumatoria
//	Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

  //Ejemplo: 
  //sumattion(3) debe retornar 6 por que hace (1 +2 +3)
  //sumattion(8) debe retornar 36
  

function sumattion (n) {

  let resultado = 0

  for(let i=1; i<=n; i++) {
  
  resultado+=i
  }
console.log (resultado)

}

sumattion (10) 