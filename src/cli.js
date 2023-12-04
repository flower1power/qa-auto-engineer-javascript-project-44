import readlineSync from "readline-sync";

export function welcomeUser() {
  const welcome = "Welcome to the Brain Games!";
  console.log(welcome);

  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
}
