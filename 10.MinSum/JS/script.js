//10. Mínima Suma
//Debés crear una función llamada `minSum` que reciba un arreglo de números desordenados  y devuelva la suma entre los dos números más chicos.

//Ejemplo: 
//minSum([7, 6, 5, 4, 3, 2, 1]) debe retornar 3 (2 + 1)
//minSum([1, 10, 43, 900, 20, 8]) debe retornar 9





function minSum (n) {
   
   let min= [] //Arreglo que se completara con 2 minimos
   let reciclo= n[0]

while (min.length<2) {  
         
      
      reciclo= n[0]

      for(let i=0; i<n.length;i++){
               
         if(n[i]<reciclo) {
            
            reciclo=n[i]
         }
              
      }
       
      min.push(n.splice(n.indexOf(reciclo),1))
      
   }
 console.log(min[0][0]+min[1][0])  //Por qué me da en formato de Arreglo dentro de Arreglos????
}
     
minSum ([1, 10, 43, 3, 20, 8])

