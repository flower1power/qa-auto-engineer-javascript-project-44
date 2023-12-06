import welcomeUser from './cli.js';
import {
  printRule,
  getRandomIntInclusive,
  askQuestion,
} from './index.js';

const MAX_CORRECT_ANSWERS = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

function printQuestion() {
  const user = welcomeUser();
  printRule();
  let correctAnswerCount = 0;

  while (correctAnswerCount < MAX_CORRECT_ANSWERS) {
    const randomNumber = getRandomIntInclusive(MIN_NUMBER, MAX_NUMBER);

    console.log(`Question: ${randomNumber}`);
    const userAnswer = askQuestion();
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

export default printQuestion;
