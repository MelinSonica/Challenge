// 5. Similar String.split()
// Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original Si no sabés cómo funciona, Google puede ayudarte..

// Importante: No podés usar el String.split()

// Ejemplo: 
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

function StringSplit (n) {

    let acum=[]

   for (let i=0; i<n.length ;i++) {

    acum.push(n[i])

   }

console.log (acum)
}

StringSplit ("Pamela")