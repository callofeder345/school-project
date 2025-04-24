function calculateGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findMedian(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  if (sortedArr.length % 2 === 1) {
    return sortedArr[Math.floor(sortedArr.length / 2)];
  } else {
    return (sortedArr[(sortedArr.length - 1) / 2] + sortedArr[sortedArr.length / 2]) / 2;
  }
}
