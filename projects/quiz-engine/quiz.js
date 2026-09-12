const questions = [
  {
    text: 'Which language runs directly in the browser?',
    answers: ['Python', 'JavaScript', 'C#'],
    correct: 'JavaScript'
  },
  {
    text: 'Which technology styles web pages?',
    answers: ['CSS', 'SQL', 'Git'],
    correct: 'CSS'
  }
];

export function gradeQuiz(userAnswers) {
  return questions.reduce((score, question, index) => {
    return score + (userAnswers[index] === question.correct ? 1 : 0);
  }, 0);
}

export function getQuestions() {
  return questions.map(({ correct, ...safeQuestion }) => safeQuestion);
}

console.log('Quiz engine ready:', getQuestions());
