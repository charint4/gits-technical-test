const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Input a number : \n', (number) => {
  const input = parseInt(number);
  if (isNaN(input)) {
    console.log('input is not a number');
  } else {
    if (input % 3 === 0 && input % 5 === 0) {
      console.log('Hello World');
    } else if (input % 5 === 0) {
      console.log('World');
    } else if (input % 3 === 0) {
      console.log('Hello');
    } else {
      console.log('input is not divisible by 3 or 5');
    }
  }
  readline.close();
});
