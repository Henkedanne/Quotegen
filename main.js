var quoteHolder = document.querySelector('#quote');
var quoteBtn = document.querySelector('#quote_btn');
var twitterBtn = document.querySelector('#twit_btn');

var quotes = ["Du ska inte döda", "Var som en fisk", "Du är ett ägg"];
var randNum = [];


function randomizeQuote() {
	if (!randNum.length) {
		for (var i = 0; i < quotes.length; i++) {
			randNum.push(i);
			}
		}
	var index = Math.floor(Math.random() * randNum.length);
	var rand = randNum[index];
	console.log(randNum);
	randNum.splice(index, 1);
	console.log(randNum);
	return quotes[rand];
};		
	 


function getRandomQuote() {
	quoteHolder.innerHTML = randomizeQuote();
	};

quoteBtn.addEventListener("click", getRandomQuote);

