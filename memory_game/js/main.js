
var cards = ["queen", "queen", "king", "king"];
var cardInPlay = [];



function flipCard(cardId){
console.log("User flipped " + cards[cardId]);
	cardInPlay.push(cards[cardId]);
if (cardInPlay.length === 2){
checkForMatch();
}

};
function checkForMatch(){
	if (cardInPlay[0] === cardInPlay[1]){
		console.log("you found a match !! ")
	}

	 else {
	 	console.log("Sorry, try again ");
	}
}

flipCard(0);
flipCard(3);
