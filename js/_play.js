function play(currentNum , player){

		
		var totalMovePositions = 0;
		var hillaryHaveImage = false;
		var tileImage = false;
		var currentPosition = player.currentPosition;

		document.querySelectorAll('#sections td').forEach(function(item){
			console.log($(item).attr('id'));
		});

		if (currentNum + currentPosition > 12){
			totalMovePositions = 12;
		}else

			totalMovePositions = currentNum+currentPosition;

		for (let i = currentPosition ; i <= totalMovePositions ; i++){

			var currentImage = "";

			setTimeout(function(){
				
			},100);

			setTimeout(function(){
				var aux = i+1;

				if(player.name=="hillary"){
					$("#sec" + i).css("background-image",  "url('img/hillary.png')");	
				}else
					$("#sec" + i).css("background-image",  "url('img/trump.png')");

			} , 200 * i);
			
			setTimeout(function(){

				if(tileImage)
					$("#sec" + (i-1)).css("background-image",  "url('img/tile.jpg')");
				
			},230*i);

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