// 16. {value: key} kelue: vay
// Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado como input y por qué no es válido.
// Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas las propiedades que sean un string puestas como key y el value deberá ser el key anterior.
// 	Ejemplo:
// reverseKeys(344) debería devolver “error, input can’t be a number”
// reverseKeys([ ]) debería devolver “error, input can’t be an Array”
// reverseKeys(‘hola’) debería devolver “error, input can’t be a string”
// var prueba = {
// 	nombre: ‘santi’,
// 	edad: 22,
// 	nacionalidad: ‘de otro planeta’,
// 	documento: 44444444
// }
// reverseKeys(prueba) debería devolver:
// {
// santi: ‘nombre’, 
// edad: 22,
// ‘’de otro planeta”: nacionalidad,
//  44444444: ‘documento’
// }
function reverseKey(x) {

    if (typeof (x) === "number") {

        console.log("error, input can’t be a number")
    }

    else if (Array.isArray(x)) {

        console.log ("error, input can’t be an array")
    }
    else if (typeof (x) === "string") {

        console.log ("error, input can’t be a String")
    }

    else {
//La gracia es crear un Objeto nuevo iterando propiedad por propiedad!!!!!
        newx={}
        
        
        for (let y in x) {
            
            if (typeof(x[y])==="string") {
             
                newx[x[y]]=y
                          
            }

            else {
                newx[y]=x[y]
            }
        }
       
        console.log (newx)

    }
}
    



reverseKey({
    	nombre: "santi",
    	edad: 22,
    	nacionalidad:"de otro planeta",
    	documento: 44444444
    })
