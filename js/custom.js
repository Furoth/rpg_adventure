var draw = SVG('tablero')
var ava;
ava = new avatar(100, 380);

var num;

draw.attr({id: 'prueba'})

var add = ['bonus', 'vacia', 'lucha'];

var casillas = draw.group()

casillas.attr({id: 'casillas'})

var casillas_class = [];
casillas_class.push(casillas.image('img/casillas/inicio.svg',60 ,80).attr({id: 'cas0'}));

var xval = '100';
for (var i = 1 ; i <= 10; i++) {
	casillas_class.push(casillas.image('img/casillas/'+add[Math.floor(Math.random()*3)]+'.svg',60 ,80));
	casillas_class[i].attr({
		x:xval,
		id: 'cas'+i
	});
	xval = parseInt(xval) + 100;
	xval = xval.toString();
}
casillas_class.push(casillas.image('img/casillas/jefe.svg',60 ,80).attr({
	x: '1100', 
	id: 'cas'+i
}))
i++
casillas_class.push(casillas.image('img/casillas/inicio.svg',60 ,80).attr({
	x: '1200',
	id: 'cas'+i
}))

for (var i = casillas_class.length - 1; i >= 0; i--) {
	casillas_class[i].addClass('inactiva')
}

casillas.move(100, 425)		
		
$(".inactiva").mouseout(function(){
	$(this).attr("opacity", "0.3");
});


/*Viewbox*/
var view = draw.viewbox(ava.x, ava.y, 600, 600);

$("#zoom").change(function(){
	view.viewbox(ava.x, ava.y, $(this).val(), $(this).val());
})
/*Desactivar introducción manual del Viewbox*/
$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
});