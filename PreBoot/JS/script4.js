var creaFuncion = function() {
  var arreglo = [];
  for (var i=0; i < 3; i++) {
    arreglo.push(
      (function(j){
        return function() {console.log(j)}
      }(i)) //la llamo inmediatamente i es el parametro de j 
    )
  }
  return arreglo;
}
var arr = creaFuncion();