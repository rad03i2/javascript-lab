export class QuizEngine {
  constructor(questions){ if(!Array.isArray(questions)||questions.length===0) throw new TypeError('questions must be a non-empty array'); this.questions=questions.map(validate); this.reset(); }
  answer(choice){ if(this.finished) throw new Error('quiz is finished'); const q=this.questions[this.index]; const correct=choice===q.answer; if(correct)this.score++; this.answers.push({question:q.question,choice,correct}); this.index++; return correct; }
  get current(){ return this.finished?null:this.questions[this.index]; }
  get finished(){ return this.index>=this.questions.length; }
  get progress(){ return {answered:this.index,total:this.questions.length,score:this.score}; }
  reset(){this.index=0;this.score=0;this.answers=[];}
}
function validate(q){ if(!q||typeof q.question!=='string'||!Array.isArray(q.options)||q.options.length<2||!q.options.includes(q.answer)) throw new TypeError('invalid question'); return Object.freeze({...q,options:Object.freeze([...q.options])}); }
