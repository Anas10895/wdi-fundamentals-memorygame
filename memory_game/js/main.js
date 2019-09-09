
var cards = ["queen", "queen", "king", "king"];
var cardInPlay = [];

function checkForMatch(){
	if (cardInPlay[0] === cardInPlay[1]){
		console.log("you found a match !! ")
	}

	 else {
	 	console.log("Sorry, try again ");
	}
}

function flipCard(cardId){
console.log("User flipped " + cards[cardId]);
	cardInPlay.push(cards[cardId]);
if (cardInPlay.length === 2){
checkForMatch();
}

}


flipCard(0);
flipCard(1);
