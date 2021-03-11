
// 4. Doble Filtro II

// Ahora deben refactorizar la función doubleFilter, que recibirá los mismos tres parámetros pero en vez de devolver un arreglo con los nombres de los países que cumplan con las condiciones, devolverá un objeto con una key ‘nombres’ que tendrá como valor un arreglo con los nombres de los países y otra llamada ‘población total’ cuyo valor sea la suma de las poblaciones de los países filtrados.

// Ejemplo:
// doubleFilter(paises, ‘sudamerica’, 30000000) debe retornar {
// 									nombres: [‘argentina’, ‘brasil],
// 									poblacion total: 340000000
// }


let base = [
    {
        nombre: "argentina",
    continente: "sudamerica",
    poblacion: 40000000
    },
    {
        nombre: "brasil",
    continente:  "sudamerica",
    poblacion: 300000000
    },
    {
        nombre: "venezuela",
    continente: "sudamerica",
    poblacion: 25000000
    },
    {
        nombre: "chile",
    continente: "sudamerica",
    poblacion: 10000000
    },
    {
        nombre: "australia",
    continente: "oceania",
    poblacion: 18000000
    },
    {
        nombre: "nueva zelanda",
    continente: "oceania",
    poblacion: 8000000
    },
    {
        nombre: "china",
    continente: "asia",
    poblacion: 1000000000
    },
    {
        nombre: "tailandia",
    continente: "asia",
    poblacion: 32000000
    },
    {
        nombre: "vietnam",
    continente: "asia",
    poblacion: 23000000
    },
    {
        nombre: "españa",
    continente: "europa",
    poblacion: 29000000
    },
    {
        nombre: "alemania",
    continente: "europa",
    poblacion: 33000000
    },
    {
        nombre: "francia",
    continente: "europa",
    poblacion: 65000000
    },
    {
        nombre: "portugal",
    continente: "europa",
    poblacion: 4000000
    },
    {
        nombre: "grecia",
    continente: "europa",
    poblacion: 12000000
    },
    ]
    
    // doubleFilter(paises, ‘sudamerica’, 30000000) debe retornar {
    //     // 									nombres: [‘argentina’, ‘brasil],
    //     // 									poblacion total: 340000000


    function doubleFilter (Data, C, num) {

    let paises=[]
    let poblacionTotal=0
    let objeto={}
    
        for (let i=0; i<Data.length;i++) {

            if (Data[i]["continente"]==C && Data[i]["poblacion"]>=num) {

                paises.push(Data[i]["nombre"])
                poblacionTotal=poblacionTotal+Data[i]["poblacion"]
            }

        }

        objeto["nombres"]=paises
        objeto["poblacionTotal"]=poblacionTotal

console.log(objeto)

}


doubleFilter (base, "europa", 0)