

var cardInPlay = [];
var cards =[
	{
		rank:'queen',
		suit:'hearts',
		cardImage:"images/queen-of-hearts.png"
	},
	{
		rank:'queen',
		suit:'diamonds',
		cardImage:"images/queen-of-diamonds.png"

	},
	{
		rank:'king',
		suit:'hearts',
		cardImage:"images/king-of-hearts.png"
	},
	{
		rank:'king',
		suit:'diamonds',
		cardImage:"images/king-of-diamonds.png"
	}

];


function checkForMatch(){
	if (cardInPlay[0] === cardInPlay[1]){
		console.log("you found a match !! ")

	}

	 else {
	 	console.log("Sorry, try again ");
	}
};

function flipCard(cardId){
	console.log(cards[cardId].suit )
	console.log(cards[cardId].cardImage )
console.log("User flipped " + cards[cardId].rank);
	cardInPlay.push(cards[cardId].rank);
if (cardInPlay.length === 2){
checkForMatch();
}

};


flipCard(3);
flipCard(2);
