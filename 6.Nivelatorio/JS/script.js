// 6. Carácter del medio
// Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.

// Ejemplo: 
// middleCharacter(“plataforma5”) debe retornar “f”
// middleCharacter(“hola”) debe retornar “ol”
// middleCharacter(“cosas”) debe retornar “s”

function  middleCharacter(X) {

let nom2=[]
let nom3=[]

if (X.length%2==0) {
 let a= (X.length)/2-1
 let b= (X.length)/2

    nom2[0]=X[a]
    nom3[0]=X[b]
    console.log(nom2+nom3)
}

else {

    let a= (X.length+1)/2-1
    console.log (X[a])
}

}

middleCharacter ("Pamela")