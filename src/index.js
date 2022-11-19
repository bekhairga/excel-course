import './module.js';
import './scss/index.scss';

async function test() {
  await Promise.resolve(console.log('test'));
}

test().then((res) => console.log(res));
class SOmeone {
  name = 'hello';
  getName() {
    return this.name;
  }
}

const sm = new SOmeone();
console.log(sm.getName());
console.log('Working');
