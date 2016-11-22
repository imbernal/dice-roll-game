const die = require('./_die.js');


$('#dieContainer img, #dieContainer h4').click(function(){
	$('#dieContainer img').attr('src' , 'img/Dodecahedron3.gif');
	$('#dieContainer h4').html("");
	
	setTimeout(die.die, 1900);
})
