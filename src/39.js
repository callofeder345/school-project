function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const numbers = [];

for (let i = 0; i < 5; i++) {
  const randomNumber = getRandomInt(10);
  if (randomNumber <= 5) {
    numbers.push(randomNumber);
  }
}

console.log(numbers);
