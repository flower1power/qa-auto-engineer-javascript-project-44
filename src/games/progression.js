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
    if (i === hiddenElementPosition) {
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

  console.log('firstElement:', firstElement);
  console.log('step:', step);
  console.log('hiddenElementPosition:', hiddenElementPosition);

  const answer = String(firstElement + (hiddenElementPosition) * step);
  console.log('answer:', answer);

  const question = getQuestionGame(firstElement, hiddenElementPosition, step).join(' ');
  console.log('question:', question);

  return { question, answer };
};

export { initGame } from '../index.js';
