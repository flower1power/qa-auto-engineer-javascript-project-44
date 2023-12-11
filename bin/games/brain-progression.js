#!/usr/bin/env node
import { initGame } from '../../src/index.js';
import { getQuestionWithAnswer } from '../../src/games/progression.js';

const description = 'What number is missing in the progression?';

initGame(getQuestionWithAnswer, description);
