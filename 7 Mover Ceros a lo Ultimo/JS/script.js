// 7. Mover ceros a lo último
// Debés crear una función llamada `moveZeros` que reciba un arreglo como parámetro y devuelva otro con los números `0` ordenados al final.

// Ejemplo: 
// moveZeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
// moveZeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]

function moveZeros (x) {

    let ceros=[]
    let otros=[]
    let completo=[]

    for (let i=0; i<x.length;i++) {

        if (x[i]==0) {

            ceros.push(x[i])
        }

        else if (x[i]!=0) {
            otros.push(x[i])
        }
    }
   
   
   console.log (otros.concat(ceros))


}

moveZeros ([1,2,0,1,0,1,0,3,0,1])