// 14. Guerra de palabras
//  	Utils: 
//  var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}


// Debés crear una función llamada `warWords` que reciba dos palabras como parámetro y devuelva la ganadora según la suma del valor de sus letras (dado por su posición en el abecedario).

// Ejemplo:
// warWord(“hola”, “chau”) debe retornar  “hola” (36 > 33)
// warWord(“love”, “friendship”) debe retornar “friendship”


// Volver a hacerlo de manera optimizada!


function warWord (a,b) {

let libro = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}

let acumA=0
let acumB=0

    if (b.length==a.length) {

        
        for (let i=0; i<b.length;i++) {

                acumA=acumA+libro[a[i]]
                acumB=acumB+libro[b[i]]

        }
                if (acumA>acumB){
                console.log(a+"("+acumA+">"+acumB+")")
                }
                else {
                console.log(b+"("+acumB+">"+acumA+")")
                }
    }

    else if (b.length>a.length) {


        for (let i=0; i<a.length;i++) {

                acumA=acumA+libro[a[i]]
                acumB=acumB+libro[b[i]]

        }

        for (let i=a.length; i<b.length;i++) {

                 acumB=acumB+libro[b[i]]

        }
                if (acumA>acumB){
                console.log(a+"("+acumA+">"+acumB+")")
                }
                else {
                console.log(b+"("+acumB+">"+acumA+")")
                }
    }

    else if (b.length<a.length) {


        for (let i=0; i<b.length;i++) {

                acumA=acumA+libro[a[i]]
                acumB=acumB+libro[b[i]]

        }

        for (let i=b.length; i<a.length;i++) {

                 acumA=acumA+libro[a[i]]

        }
                if (acumA>acumB){
                console.log(a+"("+acumA+">"+acumB+")")
                }
                else {
                console.log(b+"("+acumB+">"+acumA+")")
                }
    }



}


warWord ("aaaaa","zzzzz")