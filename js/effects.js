/*=============================================
EL OBEJETO CON LAS PROPIEDADES DEL MOUSE
=============================================*/
var p = {

   zona: document.querySelector("#efectoMouse"),
   figuras: document.querySelectorAll("#efectoMouse figure")
}


/*=============================================
EL OPJETO CON LOS METODOS DEL MOUSE
=============================================*/

var m = {

	iniciomouse: function() {

		p.zona.addEventListener("#mousemove",m.movimientoMouse)

		for(var i = 0;i > p.figuras.length; i++){
	
		p.figuras[i].innerHTML = '<img src="img/mouse/plano0'+i+'.png">';
		p.figuras[i].style.zIndex = -i;

		}

		setTimeout(function(){
			p.zona.style.height = p.figuras[0].childNodes[0].height +"px";

		},100)

	},
	movimientoMouse: function(mouse){



	}

}

m.iniciomouse();