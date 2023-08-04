function getRandomValue() {
  return Math.floor(Math.random() * 13) + 1;
}

function getRandomSuit() {
  let suits = ['♥', '♦', '♠', '♣'];
  let randomIndex = Math.floor(Math.random() * suits.length);
  return suits[randomIndex];
}

function generateRandomCard() {
  let randomValue = getRandomValue();
  let randomSuit = getRandomSuit();

  document.getElementById('center-value').innerText = randomValue;
  document.getElementById('top-left').innerText = randomSuit;
  document.getElementById('bottom-right').innerText = randomSuit;
}

window.onload = generateRandomCard;
