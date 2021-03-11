//Pares e Impares
//Deben crear una función llamada paresEimpares que reciba 3 parámetros.
//Los dos primeros números y el tercero una palabra (string).

//La función tiene que mostrar en la consola los números entre el cero y el primer parámetro que recibe pero debe en primer lugar mostrar todos los números pares y luego los impares.

//Además, cuando el número sea divisible por el segundo parámetro pasado a la función, en vez de loggearlo, debe imprimir la palabra que recibe como tercer parámetro. 

//Ejemplo: 
//paresEImpares(10,7,’prueba’) ====> 
//0
//2
//4
//6
//8
//10
//1
//3
//5
//’Prueba’
//9

function paresEimpares (x,y,z) {
  
let pares=[0]
let impares=[]

for (let i=1; i<=x;i++) {

            if (i%2==0 && i%y!=0) {

                pares.push(i)
            }
            else if (i%2==0 && i%y==0) {

                pares.push(z)
            }

            else if (i%2!=0 && i%y!=0) {

                impares.push(i)
            }

            else {

                impares.push(z)
            }

}

            for(i=0; i<pares.length;i++) {

                console.log(pares[i])
            }

            for(i=0; i<impares.length;i++) {

                console.log(impares[i])
            }

            console.log (pares+impares)
}
   
   
   paresEimpares (10,7,"SoyYo")