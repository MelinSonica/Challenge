// 17. Palindromo
// Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.

// Definición de palíndromo aquí.

// Ejemplo: 

// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false

function palindromo (palabra) {

arregloDer=[]
arregloIzq=[]
palabraDer=""
palabraIzq=""

let largo=palabra.length


        for (let i=0; i<palabra.length;i++) {

            arregloDer[i]=palabra[i]

        }

        console.log (arregloDer)

        for (let i=0; i<palabra.length;i++) {

            
            arregloIzq[i]=palabra[largo-1]

        largo=largo-1
            
        }

        console.log (arregloIzq)


        for(let i=0; i<palabra.length; i++) {
           
           
            palabraDer=palabraDer+arregloDer[i]
            palabraIzq=palabraIzq+arregloIzq[i]

        }

        if (palabraDer==palabraIzq) {

            console.log(true)
        }

        else {

            console.log(false)
        }

}


palindromo ("ana")