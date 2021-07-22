const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Palindrome(str) {
  let len = Math.floor(str.length / 2);
  for (let i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1]) return false;
  return true;
}

readline.question('input: ', (word) => {
  isPalindrome = Palindrome(word);
  isPalindrome
    ? console.log('Input is palindrome')
    : console.log('Input is not palindrome');
  readline.close();
});
