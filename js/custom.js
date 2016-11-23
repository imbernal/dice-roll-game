const die = require('./_die.js');

const player = require('./_playerClass.js');

const play = require('./_play.js');

var player1 = new player.player("hillary" , 0 , 0, 1 , true);

var player2 = new player.player("trump" , 0 , 0 , 1 , false);

var whoPLay = null;

$('#dieContainer img, #dieContainer h4').click(function(){
	$('#dieContainer img').attr('src' , 'img/Dodecahedron3.gif');
	$('#dieContainer h4').html("");
	
	if (player1.isMyTurn){
		whoPLay = player1;
		player1.iPlayed(false);
		player2.iPlayed(false);
	}else {
		whoPLay = player2;
		player1.iPlayed(true);
		player2.iPlayed(false);
	}

	setTimeout(die.die, 1900);

	setTimeout(function(){
		var starGame = play.play(parseInt($('#dieContainer h4').html()) , whoPLay);
		
		whoPLay.playerCurrentPosition(starGame);

		setTimeout(function(){
			if (whoPLay.currentPosition == 12){
				if(whoPLay.name=="hillary"){
					whoPLay.addWinsCont();
					player2.addloseCant();
				}else{
					whoPLay.addWinsCont();
					player1.addloseCant();
				}
			}
		},3000);


	} , 2000);

	


	
	// if(player1.currentPosition == 12){
	// 		alert("gane");
	// 	}

});




