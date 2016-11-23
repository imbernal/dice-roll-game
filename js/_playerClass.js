class PLayer{
	constructor(name,winsCant, loseCant,currentPosition , isMyTurn){
		this.winsCant = winsCant;
		this.loseCant = loseCant;
		this.name = name;
		this.currentPosition = currentPosition;
		this.isMyTurn = isMyTurn;
	}

	addWinsCont(){
		return this.winsCant++;
	}

	addloseCant(){
		return this.loseCant++;
	}

	playerCurrentPosition(currentPosition){

		this.currentPosition = currentPosition;	

	}

	iPlayed(isMyTurn){
		this.isMyTurn = isMyTurn;
	}
}

module.exports.player = PLayer;