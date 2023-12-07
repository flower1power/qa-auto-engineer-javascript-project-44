import welcomeUser from './cli.js';
import {
  printRule,
  randomGenerateNum,
  askQuestion,
  NOD,
} from './index.js';

const MAX_CORRECT_ANSWERS = 3;
const GAME = 'gcd';

function logicBrainGcd() {
  const user = welcomeUser();
  printRule(GAME);
  let correctAnswerCount = 0;

  while (correctAnswerCount < MAX_CORRECT_ANSWERS) {
    const randomNumber = randomGenerateNum();

    console.log(`Question: ${randomNumber.randomNumber1} ${randomNumber.randomNumber2}`);
    const userAnswer = askQuestion();

    const correctAnswer = NOD(randomNumber.randomNumber1, randomNumber.randomNumber2);

    if (parseInt(userAnswer, 10) === correctAnswer) {
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

export default logicBrainGcd;
