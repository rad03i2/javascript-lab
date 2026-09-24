import test from 'node:test'; import assert from 'node:assert/strict';
import {unique,groupBy,chunk,sortBy,sumBy,partition} from '../algorithms/array-utils.js';
test('array helpers preserve useful semantics',()=>{assert.deepEqual(unique([1,1,2]),[1,2]);assert.deepEqual(chunk([1,2,3],2),[[1,2],[3]]);assert.deepEqual(sortBy([{n:10},{n:2}],x=>x.n).map(x=>x.n),[2,10]);assert.equal(sumBy([{n:2},{n:3}],x=>x.n),5);assert.deepEqual(partition([1,2,3],x=>x%2===1),[[1,3],[2]]);assert.deepEqual(groupBy(['a','bb'],x=>x.length),{'1':['a'],'2':['bb']});});
test('chunk rejects invalid size',()=>assert.throws(()=>chunk([1],0),RangeError));
