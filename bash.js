var commands = require('./commands.js');

process.stdout.write('prompt: ');

process.stdin.on('data', function(data) {
  var cmd = data.toString().trim();
  commands[cmd]();
  // if(cmd === 'pwd'){
  //   commands.pwd();
  // } if(cmd === 'date'){
  //   commands.date();
  // }
  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt: ');
})
