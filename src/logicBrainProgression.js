import welcomeUser from './cli.js';
import {
  printRule,
  askQuestion,
  generateArithmeticProgression,
} from './index.js';

const MAX_CORRECT_ANSWERS = 3;
const GAME = 'progression';

function logicBrainProgression() {
  const user = welcomeUser();
  printRule(GAME);
  let correctAnswerCount = 0;

  while (correctAnswerCount < MAX_CORRECT_ANSWERS) {
    const randomNumber = generateArithmeticProgression();

    console.log(`Question: ${randomNumber.stringProgression}`);
    const userAnswer = askQuestion();

    if (parseInt(userAnswer, 10) === parseInt(randomNumber.stringSecretNumProgression, 10)) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${randomNumber.stringSecretNumProgression}'.`,
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

export default logicBrainProgression;
