import initGame from '../../src/index.js';
import { getQuestionWithAnswer } from '../../src/games/gcd.js';

const description = 'Find the greatest common divisor of given numbers.';

initGame(getQuestionWithAnswer, description);
