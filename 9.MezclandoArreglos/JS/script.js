// 9. Mezclando arreglos I
// Debés crear una función llamada `mezclarArreglos` que reciba dos arreglos como parámetros y devuelva uno nuevo con los elementos de ambos, de 1 en 1.

// Ejemplo: 
// mezclarArreglos([1,2,3,4],[“h”,”o”,”l”,”a”]) debe retornar [1, “h”, 2,”o”, 3,”l”,4,”a”]
// mezclarArreglos([1,2,3,4], [“h”,”p”]) debe retornar [1, “h”, 2, “p”, 3 , 4]
// mezclarArreglos([“h”,”p”], [1,2,3,4]) debe retornar [“h”, 1, “p”, 2, 3 , 4]


function mezclarArreglos (x,y) {

    let arreglo=[]
    let j=0
    
    if (x.length > y.length) {

               
        for (let i=0; i<y.length;i++) {

            arreglo[j]=x[i]
            arreglo[j+1]=y[i]
            j=j+2
        }

        for (let i=y.length; i<x.length;i++) {
            
            arreglo[j]=x[i]
            j=j+1

        }

    console.log (arreglo)
    }

    else if (x.length <= y.length) {

               
        for (let i=0; i<x.length;i++) {

            arreglo[j]=x[i]
            arreglo[j+1]=y[i]
            j=j+2
        }

        for (let i=x.length; i<y.length;i++) {
            
            arreglo[j]=y[i]
            j=j+1

        }

    console.log (arreglo)
    }


}

mezclarArreglos ([1,2,3,4],["h","p"])
mezclarArreglos ([1,2,3,4],["h","o","l","a"])
mezclarArreglos (["h","p"], [1,2,3,4])