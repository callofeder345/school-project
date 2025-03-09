<script>
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(getRandomInt(10));
}
console.log(numbers);
</script>