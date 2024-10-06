import HashMap from './hashmap';
import Hashset from './hashSet';

const test = new HashMap();
const test2 = new Hashset();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('moon', 'silver');

test2.add('apple', 'red');
test2.add('banana', 'yellow');
test2.add('carrot', 'orange');
test2.add('dog', 'brown');
test2.add('elephant', 'gray');
test2.add('frog', 'green');
test2.add('grape', 'purple');
test2.add('hat', 'black');
test2.add('ice cream', 'white');
test2.add('jacket', 'blue');
test2.add('kite', 'pink');
test2.add('lion', 'golden');
test2.add('moon', 'silver');

console.table(test.entries());
console.log(test2);
