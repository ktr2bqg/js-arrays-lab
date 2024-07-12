// Exercise 1: Define an empty array
const foods = [];
console.log("Exercise 1 result:", foods);

// Exercise 2: Add strings to the array
foods.push('pizza', 'cheeseburger')
console.log('Exercise 2 result:', foods);

// Exercise 3: Insert at the beginning
foods.unshift('taco')
console.log('Exercise 3 result:', foods);

// Exercise 4: Access an array element
const favFood = foods[1]
console.log('Exercise 4 result:', favFood);

// Exercise 5: Insert an element between two others
foods.splice(2, 0,"tofu")
console.log('Exercise 5 result:', foods);

// Exercise 6: Replace elements
foods.splice(1, 1, 'sushi', 'cupcake')
console.log('Exercise 6 result:', foods);


// Exercise 7: Using the `slice()` method
const yummy = foods.slice(1, 3)
console.log('Exercise 7 result:', yummy);

// Exercise 8: Finding an index
const soyIdx = foods.indexOf('tofu')
console.log('Exercise 8 result:', soyIdx);

// Exercise 9: Joining elements
const allFoods = foods.join(' -> ')
console.log('Exercise 9 result:', allFoods);

// Exercise 10: Check for an element
const hasSoup = foods.includes('soup')
console.log('Exercise 10 result:', hasSoup);


// Exercise 11: Odd numbers from an array
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = [];
for (const num of nums) {
  if (!!(num & 1)) {
    odds.push(num);
  }
}
console.log("Exercise 11 result:", odds);

// 
/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

const fizz = []
const buzz = []
const fizzbuzz = []

for (let idx = 0; idx < nums.length; idx++) {
  let num = nums[idx]
  if (num % 3 === 0) {
    fizz.push(num)
  } if (num % 5 === 0) {
    buzz.push(num)
  } else if (num % 3 === 0 && num % 5 === 0) {
  } fizzbuzz.push(num)
}
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

// Exercise 13: Retrieve the Last Array
const numArray = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numList = numArray.splice(3)
console.log('Exercise 13 result:', numList);

// Exercise 14: Accessing within nested arrays
const num = numArray[2].shift()
console.log('Exercise 14 result:', num);

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

const sum = 0;
const total = {}
for (let i = 0; i < numArray.total; i++) {
  sum += numArray[i]
}
console.log('Exercise 15 result:\n', total);







