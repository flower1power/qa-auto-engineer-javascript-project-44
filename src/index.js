import readlineSync from 'readline-sync';

export function printRule(GAME) {
  switch (GAME) {
    case 'even':
      return console.log('Answer "yes" if the number is even, otherwise answer "no".');
    case 'calc':
      return console.log('What is the result of the expression?');
    case 'gcd':
      return console.log('Find the greatest common divisor of given numbers.');
    default:
      return console.log('Нет такой игры');
  }
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

  return {
    expression, correctAnswer, randomNumber1, randomNumber2,
  };
}

export function NOD(randomNumber1, randomNumber2) {
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

export function askQuestion() {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}
