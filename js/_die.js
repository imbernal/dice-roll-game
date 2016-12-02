
function moveDode(numTotal){

	var num = Math.floor(Math.random() * numTotal) + 1;
		$('#dieContainer h4').html(num);
}
module.exports.die = moveDode;