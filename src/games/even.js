import { getRandomInt } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionWithAnswer = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  const question = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const answer = (question % 2 === 0) ? 'yes' : 'no';

  return { question, answer };
};

export { getQuestionWithAnswer, description };
