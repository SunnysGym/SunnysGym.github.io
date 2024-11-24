const gameContainer = document.getElementById('roddyusedtoberichbox');

fetch('/assets/json/games.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('network response wasn\'t ok :c');
    }
    return response.json();
  })
  .then(games => {
    games.sort((a, b) => a.img.localeCompare(b.img));

    games.forEach(game => {
      const gameLink = document.createElement('a');
      gameLink.href = `/frame.html?url=${encodeURIComponent(game.link)}`;
      const gameImage = document.createElement('img');
      gameImage.src = `/assets/img/game/${game.img}`;
      gameImage.id = 'game';
      gameLink.appendChild(gameImage);
      gameContainer.appendChild(gameLink);
    });
  })
  .catch(error => {
    console.error('something went wrong when parsing or fetching the file:', error);
  });
