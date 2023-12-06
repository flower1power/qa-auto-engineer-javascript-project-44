import readlineSync from 'readline-sync';

export function printRule() {
  const rule = 'What is the result of the expression?';
  console.log(rule);
}

export function getRandomIntInclusive(min, max) {
  const localMin = Math.ceil(min);
  const localMax = Math.floor(max);
  return Math.floor(Math.random() * (localMax - localMin + 1)) + localMin;
}

export function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomIntInclusive(0, operators.length - 1);
  return operators[randomIndex];
}

export function calculateExpression(randomNumber1, randomNumber2, operator) {
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

export function randomGenerateNum() {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;

  const randomNumber1 = getRandomIntInclusive(MIN_NUMBER, MAX_NUMBER);
  const randomNumber2 = getRandomIntInclusive(MIN_NUMBER, MAX_NUMBER);
  const operator = getRandomOperator();

  const expression = `${randomNumber1}${operator}${randomNumber2}`;
  const correctAnswer = calculateExpression(randomNumber1, randomNumber2, operator);

  return { expression, correctAnswer };
}

export function askQuestion() {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}
