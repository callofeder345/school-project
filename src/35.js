// Example 1: Simple counter
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
console.log("Finished counting!");

// Example 2: Sum of numbers from 1 to n
function sumNumbers(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

sumNumbers(5); // Output: 15
