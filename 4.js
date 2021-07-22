const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('input: ', (word) => {
  const array = word.split('');
  console.log(array.reverse().join(''));
  readline.close();
});
