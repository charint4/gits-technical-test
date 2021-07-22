const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const reversed = (str) => {
  let len = str.length;
  let reversed = '';
  for (let i = len - 1; i >= 0; i--) {
    reversed += str[i];
  }

  console.log(reversed);
};

readline.question('input: ', (word) => {
  reversed(word);
  readline.close();
});
