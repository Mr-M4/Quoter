function getRandomQuote() {
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      color: "#FFC107"
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer",
      color: "#4CAF50"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      color: "#2196F3"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      color: "#9C27B0"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
      color: "#E91E63"
    }
  ];
  
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayRandomQuote() {
  const quote = getRandomQuote();
  document.getElementById('quote').textContent = quote.text;
  document.getElementById('author').textContent = '- ' + quote.author;
  document.body.style.backgroundColor = quote.color;
}
