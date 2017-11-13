/*=============================================
EL OBEJETO CON LAS PROPIEDADES DEL MOUSE
=============================================*/
var p = {

	zona: document.querySelector("#efectoMouse"),
	figuras: document.querySelectorAll("#efectoMouse figure"),
	mouseX: 0,
	mouseY: 0
}


/*=============================================
EL OPJETO CON LOS METODOS DEL MOUSE
=============================================*/

var m = {

	inicioMouse: function() {

		p.zona.addEventListener("mousemove", m.movimientoMouse)

		for (var i = 0; i < p.figuras.length; i++) {

			p.figuras[i].innerHTML = '<img src="img/mouse/plano0' + i + '.png">';
			p.figuras[i].style.zIndex = -i;

		}

		setTimeout(function() {
			p.zona.style.height = p.figuras[0].childNodes[0].height + "px";

		}, 100)

	},
	movimientoMouse: function(mouse) {

		p.mouseX = mouse.offsetX;
		p.mouseY = mouse.offsetY;

		for (var i = 0; i < p.figuras.length; i++){

			p.figuras[i].style.left = -p.mouseX / (i*100 +50)+"%";
			p.figuras[i].style.top = -p.mouseY / (i*100 +50)+"%";

		}

	}

}

m.inicioMouse();