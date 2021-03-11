// 18. Rotación de arreglo a la derecha
// Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera retornar un nuevo arreglo con los elementos rotados la cantidad de veces como sea el número a la derecha.

// Ejemplo: 
// rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
// rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2]
          0, 1, 2, 3, 4


function rotar (a,n) {

let arregloRotado=[]
let arregloFinal=[]
let x =0


arregloRotado.unshift(a.splice(a.length-n,a.length))
arregloRotado.push(a.splice(0,a.length))

            for (let i=0; i<arregloRotado.length;i++) {
                for (let j=0; j<arregloRotado[i].length;j++) {
                    
                    arregloFinal[x]=arregloRotado[i][j]
                    x=x+1
                }


            }

console.log(arregloFinal)

}

rotar ([1, 2, 3, 4, 5], 3)