import { getRandomInt } from '../index.js';

export const getQuestionWithAnswer = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  let answer;
  const question = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  if (question % 2 === 0) {
    answer = 'yes';
  }
  answer = 'no';

  return { question, answer };
};

export { initGame } from '../index.js';
