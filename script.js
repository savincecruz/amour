// script.js
const quotes = [
  "you're the love i've always dreamed of ♡",
  "you are my heart, my life, my one and only thought ʚɞ",
  "i love you more than words could ever tell !!",
  "your voice is the sweetest music ♪",
  "you’re the reason why i believe in love. ",
  "love me, that's all i ask of you ✧₊⁺",
  "wise men say, only fools rush in. but i can't help falling in love with you.",
  "baby, i'm yours!",
  "i love you 3000",
  "whenever i dream of my future, its you i see ᶻ 𝗓 𐰁 .ᐟ",
  "i'll be yours until the stars fall from the sky !! ⋆.˚",
  "away from you, there is no pleasure in life: away from you, the world is a desert in which i am all alone, without even the solace of expressing my feelings. you have robbed me of more than my heart: all my thoughts are about you alone..",
  "everyday since i have met you i have loved you a thousand times more. "
];

// Function to show a random quote
function showQuote() {
  const quoteBox = document.getElementById("quote");  // Get the quote box
  const randomNumber = Math.floor(Math.random() * quotes.length);  // Pick random quote
  quoteBox.textContent = quotes[randomNumber];  // Change the text to the selected quote
}
