#!/usr/bin/env node
import initGame from '../../src/index.js';
import { getQuestionWithAnswer } from '../../src/games/even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

initGame(getQuestionWithAnswer, description);
