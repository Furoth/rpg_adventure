class dadico {
  constructor() {
    $(".wrap").append("<div id='dice_mask'></div>");
  }

  random(){
    $('#dice').animate({left: '+2px'}, 100,function(){
			$('#dice').addClass("dice_t");
		}).delay(200).animate({top:'-2px'},100,function(){
			var sound = new Audio("sounds/dice.wav");
			sound.play();
			$('#dice').removeClass("dice_t").addClass("dice_s");
		}).delay(200).animate({opacity: 'show'},600,function(){
			$('#dice').removeClass("dice_s").addClass("dice_e");
		}).delay(100).animate({left:'-2px',top:'2px'},100,function(){
		      var random = Math.floor(Math.random()*6+1);
		      this.num = random;

		    $('#dice').removeClass();
		    $('#dice').addClass("dice");
			$('#dice').addClass("dice_"+this.num);
			$("#result").html("Numero de movimientos: <span>"+this.num+"</span>");
			$('#dice').css('cursor','pointer');
			$("#dice_mask").remove();//remove mask
			ava.move(parseInt(this.num));
		});
  }
}

$('#dice').click(function(){
	var dice = new dadico();
	dice.random();
});