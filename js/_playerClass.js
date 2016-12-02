class PLayer{
	constructor(name,winsCant, loseCant,currentPosition , isMyTurn , rivalPosition){
		this.winsCant = winsCant;
		this.loseCant = loseCant;
		this.name = name;
		this.currentPosition = currentPosition;
		this.isMyTurn = isMyTurn;
		this.rivalPosition = rivalPosition;
	}

	addWinsCont(){
		this.winsCant += 1;
	}

	addloseCant(){
		this.loseCant +=1;
	}

	playerCurrentPosition(currentPosition){

		this.currentPosition = currentPosition;	

	}

	setRivalPosition(rivalPosition){

		this.rivalPosition = rivalPosition;	

	}

	iPlayed(isMyTurn){
		this.isMyTurn = isMyTurn;
	}

	setPlayer(){
		this.currentPosition =0;
		this.rivalPosition = 0;
	}

	setIsmyTurn(val){
		this.isMyTurn = val;
	}
}

module.exports.player = PLayer;