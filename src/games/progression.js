import { getRandomInt } from '../index.js';

const settingProgression = {
  start: {
    min: 2,
    max: 20,
  },
  step: {
    min: 2,
    max: 5,
  },
  maxLength: 10,
};

const getQuestionGame = (firstElement, hiddenElementPosition, step) => {
  const result = [];
  for (let i = 0; i < settingProgression.maxLength; i += 1) {
    if (i === hiddenElementPosition - 1) {
      result.push('..');
    } else {
      const nextElementProgression = `${i * step + firstElement}`;
      result.push(nextElementProgression);
    }
  }
  return result;
};

export const getQuestionWithAnswer = () => {
  const firstElement = getRandomInt(settingProgression.start.min, settingProgression.start.max);
  const step = getRandomInt(settingProgression.step.min, settingProgression.step.max);
  const hiddenElementPosition = getRandomInt(0, settingProgression.maxLength);

  const answer = String(firstElement + (hiddenElementPosition + 1) * step);
  const question = getQuestionGame(firstElement, hiddenElementPosition, step).join(' ');
  return { question, answer };
};

export { initGame } from '../index.js';
