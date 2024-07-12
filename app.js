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




