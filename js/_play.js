function play(currentNum , player){

		
		var totalMovePositions = 0;
		var currentPosition = player.currentPosition;

		if (currentNum + currentPosition > 12){
			totalMovePositions = 12;
		}else

			totalMovePositions = currentNum+currentPosition;

		for (let i = currentPosition ; i <= totalMovePositions ; i++){

			setTimeout(function(){
				var currentImage = $("#sec" + i).css("background-image");
				console.log($("#sec" + i).css("background-image"));
				if(currentImage.includes('hillary')){

					
					$("#sec" + i).css("background-image",  "url('img/hillary.png')");	
				}else
					$("#sec" + i).css("background-image",  "url('img/trump.png')");
				
			} , 200 * i);
			
			setTimeout(function(){
				$("#sec" + (i-1)).css("background-image",  "url('img/tile.jpg')");
			},230*i)

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