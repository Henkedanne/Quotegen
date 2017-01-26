var quoteHolder = document.querySelector('#quote');
var quoteBtn = document.querySelector('#quote_btn');
var twitterBtn = document.querySelector('#twit_btn');

var quotes = ["Du ska inte döda", "Var som en fisk", "Du är ett ägg"];
var rand;
var lastRand = rand;
function randomizeQuote() {
	
	rand = Math.floor(Math.random() * quotes.length);
	return quotes[rand];

}

function getRandomQuote() {
	quoteHolder.innerHTML = randomizeQuote();
	console.log(lastRand);
};

quoteBtn.addEventListener("click", getRandomQuote);

