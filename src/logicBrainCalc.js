import welcomeUser from './cli.js';
import {
  printRule,
  randomGenerateNum,
  askQuestion,
} from './index.js';

const MAX_CORRECT_ANSWERS = 3;
const GAME = 'calc';

function printQuestion() {
  const user = welcomeUser();
  printRule(GAME);
  let correctAnswerCount = 0;

  while (correctAnswerCount < MAX_CORRECT_ANSWERS) {
    const randomNumber = randomGenerateNum();

    console.log(`Question: ${randomNumber.expression}`);
    const userAnswer = askQuestion();

    if (parseInt(userAnswer, 10) === randomNumber.correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${randomNumber.correctAnswer}'.`,
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
