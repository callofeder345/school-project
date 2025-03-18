// Create an array of objects with names and ages
const students = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 25 }
];

// Filter out the students who are under 18 years old
const minors = students.filter(student => student.age < 18);

console.log(minors); // Output: [{ name: 'Alice', age: 15 }]
