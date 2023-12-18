import { getRandomInt } from '../index.js';

const description = 'What is the result of the expression?';

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomInt(0, operators.length - 1);
  return operators[randomIndex];
}

function calculateExpression(randomNumber1, randomNumber2, operator) {
  switch (operator) {
    case '+':
      return randomNumber1 + randomNumber2;
    case '-':
      return randomNumber1 - randomNumber2;
    case '*':
      return randomNumber1 * randomNumber2;
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
}

function getQuestionWithAnswer() {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;

  const randomNumber1 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const randomNumber2 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const operator = getRandomOperator();

  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const answer = calculateExpression(randomNumber1, randomNumber2, operator);

  return { question, answer };
}

export { getQuestionWithAnswer, description };
