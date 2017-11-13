/*=============================================
EL OBEJETO CON LAS PROPIEDADES DEL MOUSE
=============================================*/
var p = {

   zona: document.querySelector("#efectoMouse")

}


/*=============================================
EL OPJETO CON LOS METODOS DEL MOUSE
=============================================*/

var m = {

	iniciomouse: function() {

		p.zona.addEventListener("#mousemove",m.movimientoMouse)


	},
	movimientoMouse: function(mouse){



	}

}

m.iniciomouse();