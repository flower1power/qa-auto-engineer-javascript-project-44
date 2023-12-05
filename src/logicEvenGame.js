import readlineSync from 'readline-sync';
import welcomeUser from './cli.js';

const MAX_CORRECT_ANSWERS = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 1000;

export function printRule() {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rule);
}

function getRandomIntInclusive(min, max) {
  const localMin = Math.ceil(min);
  const localMax = Math.floor(max);
  return Math.floor(Math.random() * (localMax - localMin + 1)) + localMin;
}

export function printQuestion() {
  const user = welcomeUser();
  printRule();
  let correctAnswerCount = 0;

  while (correctAnswerCount < MAX_CORRECT_ANSWERS) {
    const randomNumber = getRandomIntInclusive(MIN_NUMBER, MAX_NUMBER);

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${user}!`);
      correctAnswerCount = 0;
      break;
    }
  }

  if (correctAnswerCount === MAX_CORRECT_ANSWERS) {
    console.log(`Congratulations, ${user}!`);
  }
}
