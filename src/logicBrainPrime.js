import welcomeUser from './cli.js';
import {
  printRule,
  primeNumb,
  askQuestion,
  randomGenerateNum,
} from './index.js';

const MAX_CORRECT_ANSWERS = 3;
const GAME = 'prime';

function logicBrainPrime() {
  const user = welcomeUser();
  printRule(GAME);
  let correctAnswerCount = 0;

  while (correctAnswerCount < MAX_CORRECT_ANSWERS) {
    const randomNumber = randomGenerateNum();

    console.log(`Question: ${randomNumber.randomNumber1}`);
    const userAnswer = askQuestion();
    const correctAnswer = primeNumb(randomNumber.randomNumber1);

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

export default logicBrainPrime;
