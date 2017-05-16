class avatar{
	constructor(pos_x, pos_y){
		this.x = pos_x;
		this.y = pos_y;
		this.pj = draw.rect(20, 20).attr({ 
			fill: '#f06',
			x: this.x,
			y: this.y
		});		
	}

	move(x){
		this.x = this.x + x*100;
		this.pj.attr({x : this.x.toString()})
	}
}

$(document).ready(function(){
	ava = new avatar(100, 380);
})
