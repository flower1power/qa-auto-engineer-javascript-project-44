import { getRandomInt } from '../index.js';

function NOD(randomNumber1, randomNumber2) {
  let num1 = randomNumber1;
  let num2 = randomNumber2;

  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const result = num1 + num2;
  return result;
}

export function getQuestionWithAnswer() {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;

  const randomNumber1 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const randomNumber2 = getRandomInt(MIN_NUMBER, MAX_NUMBER);

  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = NOD(randomNumber1, randomNumber2);

  return { question, answer };
}

export { initGame } from '../index.js';
