var quoteHolder = document.querySelector('#quote');
var quoteBtn = document.querySelector('#quote_btn');
var twitterBtn = document.querySelector('#twit_btn');

var quotes = ["Du ska inte döda", "Var som en fisk", "Du är ett ägg"];
var rand = 0;
var lastRand;

function randomizeQuote() {
	
	rand = Math.floor(Math.random() * quotes.length);
	lastRand =+ rand;
	console.log("rand ", rand);
	console.log("Last ", lastRand);
	
		return quotes[rand];
	
		
	 
}

function getRandomQuote() {

	quoteHolder.innerHTML = randomizeQuote();
	
};

quoteBtn.addEventListener("click", getRandomQuote);

