import readlineSync from 'readline-sync';

function welcomeUser() {
  const welcome = 'Welcome to the Brain Games!';
  console.log(welcome);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export default welcomeUser;
