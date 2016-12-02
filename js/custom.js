const die = require('./_die.js');

const player = require('./_playerClass.js');

const play = require('./_play.js');

var player1 = new player.player("hillary" , 0 , 0, 0 , true,0);

var player2 = new player.player("trump" , 0 , 0 , 0 , false,0);

var winNum = 0;
var loseNum = 0;

var whoPLay = null;

var numberRandom = 12;

$('#gameAgain').click(function(){
	player1.setPlayer();
	player1.setIsmyTurn(true);
	player2.setPlayer();
	player2.setIsmyTurn(false);
	

	for(let i = 1; i <=12 ; i++){

		$(`#sec${i}`).css('background-image' , "url('img/tile.jpg')");

	}
	$('.modal').modal("hide");
	$('#dieContainer img, #dieContainer h4').on('click' ,playing);
	$('#dieContainer h4').html('');
});

function playing(){
	$('#dieContainer img').attr('src' , 'img/Dodecahedron3.gif');
	$('#dieContainer h4').html("");
	
	if (player1.isMyTurn){
		whoPLay = player1;
		player1.setRivalPosition(player2.currentPosition);
		player1.iPlayed(false);
		player2.iPlayed(false);
	}else {
		whoPLay = player2;
		player2.setRivalPosition(player1.currentPosition);
		player1.iPlayed(true);
		player2.iPlayed(false);
	}


	setTimeout(function(){
		die.die(numberRandom);
	}, 1900);

	setTimeout(function(){
		var starGame = play.play(parseInt($('#dieContainer h4').html()) , whoPLay);
		
		whoPLay.playerCurrentPosition(starGame);

		if(whoPLay.name == "hillary")
			numberRandom = 12 - player2.currentPosition;
		else
			numberRandom = 12 - player1.currentPosition;


		setTimeout(function(){
			if (whoPLay.currentPosition == 12){
				$('#dieContainer img, #dieContainer h4').off('click');

				if(whoPLay.name=="hillary"){
					whoPLay.addWinsCont();
					player2.addloseCant();
				}else{
					whoPLay.addWinsCont();
					player1.addloseCant();
				}
				$('#trumpStadistics').html(`Trump has ${player2.winsCant} games won and ${player2.loseCant} games lost`);
				$('#hillaryStadistics').html(`Hillary has ${player1.winsCant} games won and ${player1.loseCant} games lost`);
				$('.modal').modal("show");
			}
		},3000);


	} , 2000);

	


	
	// if(player1.currentPosition == 12){
	// 		alert("gane");
	// 	}

}

$('#dieContainer img, #dieContainer h4').on('click' , playing);




