#!/usr/bin/env node
import { initGame } from '../../src/index.js';
import { getQuestionWithAnswer, description } from '../../src/games/even.js';

initGame(getQuestionWithAnswer, description);
