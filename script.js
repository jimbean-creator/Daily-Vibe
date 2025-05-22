const quotes = [
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    songTitle: "Sun Is Shining",
    artist: "Bob Marley",
    songUrl: "https://open.spotify.com/track/5T8EDUDqKcs6OSOwEsfqG7"
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    songTitle: "95",
    artist: "Pouya",
    songUrl: "https://open.spotify.com/track/3TLjS6K5D0eG5XvQsy2Gzj"
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso",
    songTitle: "Space Bound",
    artist: "Eminem",
    songUrl: "https://open.spotify.com/track/0G2c4d2G5U2meuK1V5f8Zz"
  }
];

function getTodayIndex() {
  const today = new Date();
  return today.getDate() % quotes.length;
}

function loadContent() {
  const todayContent = quotes[getTodayIndex()];
  document.getElementById('quote').textContent = `"${todayContent.quote}"`;
  document.getElementById('author').textContent = `- ${todayContent.author}`;
  document.getElementById('song-title').textContent = todayContent.songTitle;
  document.getElementById('artist').textContent = todayContent.artist;
  document.getElementById('spotify-link').href = todayContent.songUrl;
}

window.onload = loadContent;
