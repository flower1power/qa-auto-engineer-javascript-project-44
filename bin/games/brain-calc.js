#!/usr/bin/env node
import initGame from '../../src/index.js';
import { getQuestionWithAnswer } from '../../src/games/calc.js';

const description = 'What is the result of the expression?';

initGame(getQuestionWithAnswer, description);
