#!/usr/bin/env node
import { initGame } from '../../src/index.js';
import { description, getQuestionWithAnswer } from '../../src/games/calc.js';

initGame(getQuestionWithAnswer, description);
