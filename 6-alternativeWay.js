// Exporting can be done other way too. 
    // Instead of writing this ↓
// const items = [ 'item 1','item 2','item 3'];
// module.export = items;

    // we can directly write 
module.exports.items = ['item 1','item 2','item 3' ];

//-------------------------
// For exporting an array
const person = {
    names: 'bob',
    names: 'dean'
}

//Instead of writing this 
    // module.export = person;

//We can directly write this
module.exports.persons = person;