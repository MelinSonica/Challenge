//19. Consecutivos similares
//Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos consecutivos similares hay en un string. 

//Ejemplo: 
//consecutivosSimilares(“AAAA”) debe retornar 3
//consecutivosSimilares(“BBBBB”) debe retornar 4
//consecutivosSimilares(“ABABABAB”) debe retornar 0
//consecutivosSimilares(“BABABA”) debe retornar 0
//consecutivosSimilares(“AAABBB”) debe retornar 4



function consecutivosSimilares (n) {
    let j=0

    for(let i=0;i<n.length;i++) {
        
            
        if(n[i]==n[i+1]){

         j++

        }
    }
    
console.log(j)
 
}
      
 consecutivosSimilares ("AABBCC")