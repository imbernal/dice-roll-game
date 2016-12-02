function play(currentNum , player){

		
		var totalMovePositions = 0;
		
		
		var currentPosition = player.currentPosition;

		if (currentNum + currentPosition > 12){
			totalMovePositions = 12;
		}else
			totalMovePositions = currentNum+currentPosition;

		for (let i = currentPosition ; i <= totalMovePositions ; i++){

			
			

			setTimeout(function(){
				var aux = i-1;

				if(player.name=="hillary"){
					$(`#sec${i}` ).css("background-image",  "url('img/hillary.png')");
			
					if(i == player.rivalPosition + 1){
						$(`#sec${aux}`).css("background-image",  "url('img/trump.png')");
					}else
						$(`#sec${aux}`).css("background-image",  "url('img/tile.jpg')");
					

				}else{
					$(`#sec${i}`).css("background-image",  "url('img/trump.png')");
					
					if(i == player.rivalPosition + 1){
						$(`#sec${aux}`).css("background-image",  "url('img/hillary.png')");
					}else
						$(`#sec${aux}`).css("background-image",  "url('img/tile.jpg')");
				}

			} , 200 * i);
			
	

			setTimeout(function(){
				$('#Statistics').click(function(){
					var a = "Trump Has " + player.winsCant + " game won and " + player.loseCant + " game lost.";
					$('#data').html(a);
				});
			}, 250*i);
			
		}

	return totalMovePositions;


}

module.exports.play = play;