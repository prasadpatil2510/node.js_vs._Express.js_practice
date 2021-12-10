const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);
console.log('This is ↓ chunking -- Making groups of x items(x is the number)');
console.log(_.chunk(newItems,3));
console.log('This is ↓ droping -- dropping x items from list(x is the number)');
console.log(_.drop(newItems,2));
console.log('This is ↓ droping -- dropping x items from right of the list(x is the number)');
console.log(_.dropRight(newItems,2));
console.log('This is ↓ droping -- dropping x items from left of the list(x is the number)');
console.log(_.dropLeft(newItems,2));