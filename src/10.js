<script>
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateCode() {
  const code = [];
  for (let i = 0; i < 10; i++) {
    code.push(getRandomInt(10));
  }
  return code.join("");
}
</script>