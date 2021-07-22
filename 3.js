const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const convertDate = (date) => {
  if (date[2] === ':' && date[5] === ':' && date.length === 11) {
    const splitedDate = date.split(' ');
    const ext = splitedDate[1];
    const time = splitedDate[0].split(':');
    let convertedDate = '';
    if (Number(time[0]) < 13 && Number(time[1]) < 61 && Number(time[2]) < 61) {
      if (ext.toLowerCase() === 'am') {
        if (time[0] === '12') {
          convertedDate = `00:${time[1]}:${time[2]}`;
        } else {
          convertedDate = `${time[0]}:${time[1]}:${time[2]}`;
        }

        return convertedDate;
      } else if (ext.toLowerCase() === 'pm') {
        if (time[0] === '12') {
          convertedDate = `${time[0]}:${time[1]}:${time[2]}`;
        } else {
          const convertHour = String(Number(time[0]) + 12);
          convertedDate = `${convertHour}:${time[1]}:${time[2]}`;
        }

        return convertedDate;
      }
    } else {
      return 'Time limit excedeed';
    }
  } else {
    return 'Please follow the example format';
  }
};

readline.question('Date ( example : 10:00:00 AM): ', (date) => {
  console.log(convertDate(date));
  readline.close();
});
