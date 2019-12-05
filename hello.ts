import set from 'lodash/set';
import fpSet from 'lodash/fp/set';

const obj = {};

const obj1 = set(obj, 'aaa', 'normal-set');
console.log('set:', obj, obj1);

const obj2 = fpSet('bbb', 'normal-set', obj);
console.log('fp set:', obj, obj2);
