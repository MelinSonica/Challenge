// 5.. Doble Filtro III

// Ahora, la función doubleFilter debe retornar un objeto que, además de tener las keys nombres y población total, tenga una key mayor y una menor en la que guarde el nombre de los países con mayor y menor población respectivamente.

// Ejemplo:
// doubleFilter(paises, ‘sudamerica’, 30000000) debe retornar {
// 									nombres: [‘argentina’, ‘brasil],
// 									poblacion total: 340000000,
// 									mayor: ‘brasil’,
// 									menor: ‘argentina’
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
    
  // 5.. Doble Filtro III

// Ahora, la función doubleFilter debe retornar un objeto que, además de tener las keys nombres y población total, tenga una key mayor y una menor en la que guarde el nombre de los países con mayor y menor población respectivamente.

// Ejemplo:
// doubleFilter(paises, ‘sudamerica’, 30000000) debe retornar {
// 									nombres: [‘argentina’, ‘brasil],
// 									poblacion total: 340000000,
// 									mayor: ‘brasil’,
// 									menor: ‘argentina’
// }



    function doubleFilter (Data, C, num) {

    let paises=[]
    let poblacionTotal=0
    let poblacion=[]
    let recicloMax=0
      let objeto={}
    
        for (let i=0; i<Data.length;i++) {

            if (Data[i]["continente"]==C && Data[i]["poblacion"]>=num) {

                paises.push(Data[i]["nombre"])
                poblacion.push(Data[i]["poblacion"])
                poblacionTotal=poblacionTotal+Data[i]["poblacion"]

            }

        }

        for (let i=0; i<paises.length;i++) {

            if (poblacion[i]>recicloMax) {
                
                recicloMax=poblacion[i]
                objeto["mayor"]=paises[i]
            }
        }

        for (let i=0; i<paises.length;i++) {

            if (poblacion[i]>recicloMax) {
                
                recicloMax=poblacion[i]
                objeto["mayor"]=paises[i]
            }
        }

        let recicloMin=poblacion[0]
       
        for (let i=0; i<paises.length;i++) {

            if (poblacion[i]<recicloMin) {
                
                recicloMin=poblacion[i]
                objeto["menor"]=paises[i]
            }
        }


        objeto["nombres"]=paises
        objeto["poblacionTotal"]=poblacionTotal
       


console.log(objeto)

}


doubleFilter (base, "asia", 0)