function randomizeQuote(quotes) {
  const max = quotes.length;
  return quotes[Math.floor(Math.random() * Math.floor(max))];
}

async function getQuotes(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export { getQuotes, randomizeQuote };
