
function ListaDeFuncionesInvitados(x,y) {

  var Arreglo = []

  for (let i=0; i<x.length;i++) {

      Arreglo[i]= function (z) {
          
          var invitado
         
          if (z===y){
              
              invitado=x[i]
              }

          else {

              invitado="código secreto: invalido"
          }

          return(invitado)
      }
  }

  return (Arreglo)


}

function armarListaDeInvitados(x,y) {
  
  var Arreglo = []

  for (let i=0; i<x.length;i++) {
      
      Arreglo[i]=x[i](y)
      
  }


  return (Arreglo)
  }





var arregloInvitados = ['Facu', 'Santi', 'Toni', 'Guille', 'Solano', 'Leo']
var codigoSecreto = 404
var funcionesInvitados = ListaDeFuncionesInvitados(arregloInvitados, codigoSecreto)
var listaOficial = armarListaDeInvitados(funcionesInvitados, codigoSecreto)