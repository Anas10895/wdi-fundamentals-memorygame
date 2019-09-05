
var cards = ["queen", "queen", "king", "king"];
const cardInPlay = [];

var cardOne = cards[3];
cardInPlay.push(cardOne)
console.log("User flipped " + cardOne );


var cardTow = cards[1];
cardInPlay.push(cardTow)
console.log("User flipped " + cardTow );

if (cardInPlay.length === 2 && cardInPlay[0] === cardInPlay[1]){
	alert("you found a match !! ");

}
 else {
 	alert("Sorry, try again ")
 }

