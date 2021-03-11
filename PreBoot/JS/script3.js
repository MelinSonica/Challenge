var creaFuncion = function() {
  var arreglo = [];
  for (var i=0; i < 3; i++) {
    arreglo.push(
      function(){   //i en esta funcion anidada es reemplazada por el contexto mas cercano de ejecución)
        console.log(i); 
      }
    )
  }
  return arreglo;
}
var arr = creaFuncion();
