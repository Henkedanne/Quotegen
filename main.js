var quoteHolder = document.querySelector('#quote');
var quoteBtn = document.querySelector('#quote_btn');
var twitterBtn = document.querySelector('#twit_btn');
var author = document.querySelector('#author');
var randNum = [];



function randomizeQuote() {
	if (!randNum.length) {
		for (var i = 0; i < quotes.length; i++) {
			randNum.push(i);
			}
		}
	var index = Math.floor(Math.random() * randNum.length);
	var rand = randNum[index];
	randNum.splice(index, 1);
	
	quoteHolder.innerHTML = quotes[rand].quote;
	author.innerHTML = "- " + quotes[rand].author;
	
};		
window.onload = randomizeQuote();
quoteBtn.addEventListener("click", randomizeQuote);

