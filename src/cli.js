import readlineSync from 'readline-sync';

export default function greetings() {
  const name = readlineSync.question('What your name: ');

  console.log(`Hello, ${name}`);
}
