var obj = {
    nombre: 'Objeto',
    log   : function(){
      this.nombre = 'Cambiado'; // this se refiere a este objeto, a `obj`
      console.log(this); // obj
      var that = this; // Guardo la referencia a this
      var cambia = function( str ){
        that.nombre = str;  // Uso la referencia dentro de esta funcion
      }
      cambia('Otra vez!');
      console.log(this);
    }
  }