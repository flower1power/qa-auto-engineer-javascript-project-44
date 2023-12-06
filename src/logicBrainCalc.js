import welcomeUser from './cli.js';
import {
  printRule,
  randomGenerateNum,
  askQuestion,
} from './index.js';

const MAX_CORRECT_ANSWERS = 3;

function printQuestion() {
  const user = welcomeUser();
  printRule();
  let correctAnswerCount = 0;

  while (correctAnswerCount < MAX_CORRECT_ANSWERS) {
    const random = randomGenerateNum();

    console.log(`Question: ${random.expression}`);
    const userAnswer = askQuestion();

    if (parseInt(userAnswer, 10) === random.correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${random.correctAnswer}'.`,
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
