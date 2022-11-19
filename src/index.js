import './module.js';
import './scss/index.scss';

class SOmeone {
  name = 'hello';
  getName() {
    return name;
  }
}

const sm = new SOmeone();
console.log(sm.getName());
console.log('Working');
