const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('email : ', (email) => {
  if (email.length > 1 && email.includes('@')) {
    let test = email.split('@');
    if (test[0].length < 20) {
      if (test[1].includes('.') && test[1].split('.')[0].length > 1) {
        const dot = test[1];
        const indeksDot = dot.indexOf('.');
        const domain = dot.slice(Number(indeksDot));
        if (domain === '.co.id' || domain === '.id') {
          console.log('Congrats, your email has followed the standard format ');
        } else {
          console.log('Please use co.id or id domain!');
        }
      } else {
        console.log('after @ must contain .');
      }
    } else {
      console.log('character before @ must be less than 20');
    }
  } else console.log('Your input is not an email!');
  readline.close();
});
