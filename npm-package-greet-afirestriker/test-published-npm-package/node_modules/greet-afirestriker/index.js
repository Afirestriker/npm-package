var classNames = require('classnames');

function greet(name = '') {
    console.log(`Hello ${name}, Welcome To Node-JS`);
    console.log( classNames('foo', {'bar': true}));  // => 'foo bar'
}

greet("Ashish");

module.exports = greet;