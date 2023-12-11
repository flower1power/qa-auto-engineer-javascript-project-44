import { getRandomInt } from '../index.js';

function primeNumb(num) {
  if (num > 1) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  }
  return 'Число должно быть больше 1';
}

export function getQuestionWithAnswer() {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;

  const randomNumber1 = getRandomInt(MIN_NUMBER, MAX_NUMBER);

  const question = `${randomNumber1}`;
  const answer = primeNumb(randomNumber1);

  return { question, answer };
}

export { initGame } from '../index.js';
