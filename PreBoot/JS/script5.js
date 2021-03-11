function hacerSaludo( lenguaje ){
  if ( lenguaje === 'en'){
    return function(){
      console.log('Hi!');
    }
  }

  if ( lenguaje === 'es'){
    return function(){
      console.log('Hola!');
    }
  }
}

var saludoIngles = hacerSaludo('en');
var saludoEspaniol = hacerSaludo('es');

saludoIngles ()