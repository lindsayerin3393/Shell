const pwd = require('./pwd')

const ls = require('./ls')


process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd === 'pwd') {
   pwd();
  }
  if (cmd === 'ls') {
    ls();
   }
   if (cmd === `cat ${data}`) {
    cat(data);
   }
  process.stdout.write('\nprompt > ');
});

