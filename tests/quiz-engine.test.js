import test from 'node:test'; import assert from 'node:assert/strict'; import {QuizEngine} from '../projects/quiz-engine/quiz.js';
const questions=[{question:'2+2?',options:['3','4'],answer:'4'},{question:'Capital of Iraq?',options:['Baghdad','Mosul'],answer:'Baghdad'}];
test('quiz scores, progresses and resets',()=>{const q=new QuizEngine(questions);assert.equal(q.current.question,'2+2?');assert.equal(q.answer('4'),true);assert.equal(q.answer('Mosul'),false);assert.deepEqual(q.progress,{answered:2,total:2,score:1});assert.equal(q.finished,true);assert.equal(q.current,null);q.reset();assert.equal(q.score,0);});
test('quiz validates questions',()=>assert.throws(()=>new QuizEngine([{question:'x',options:['a','b'],answer:'c'}]),TypeError));
