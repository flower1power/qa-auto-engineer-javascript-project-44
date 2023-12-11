import readlineSync from 'readline-sync';
import welcomeUser from './cli.js';

const MAX_CORRECT_ANSWERS = 3;

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function initGame(getQuestionWithAnswer, description) {
  let correctAnswerCount = 0;
  const user = welcomeUser();

  while (correctAnswerCount < MAX_CORRECT_ANSWERS) {
    const currentQuestion = getQuestionWithAnswer();
    console.log(description);

    console.log(`Question: ${currentQuestion.question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(currentQuestion.answer)) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${currentQuestion.answer}'.`,
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
