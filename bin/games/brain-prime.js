import { initGame } from '../../src/index.js';
import { getQuestionWithAnswer } from '../../src/games/prime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

initGame(getQuestionWithAnswer, description);
