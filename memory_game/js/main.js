

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

function createBoard(){
	for(var i = 0; i< cards.length; i++){
		var createElement = document.createElement('img');
		createElement.setAttribute('src','images/back.png');
		createElement.setAttribute('data-id',i);
		createElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(createElement);

	}
}

function checkForMatch(){
	if (cardInPlay[0] === cardInPlay[1]){
		alert("you found a match !! ")
	}
	 else {
	 	alert("Sorry, try again ");
	}
};

function flipCard(){
	var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  this.setAttribute('src' , cards[cardId].cardImage);
  cardInPlay.push(cards[cardId].rank);
if (cardInPlay.length === 2){
  checkForMatch();
}

};


createBoard();
