
function moveDode(){

	var num = Math.floor(Math.random() * 12) + 1;
		$('#dieContainer h4').html(num);
	
}
module.exports.die = moveDode;