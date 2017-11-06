var commands = require('./commands.js');

process.stdout.write('prompt: ');

process.stdin.on('data', function(data) {
  var input = data.toString().trim().split(' ');
  cmd = input[0];
  args = input.slice(1).join(' ');
  commands[cmd](args);
  setTimeout(function(){
    process.stdout.write('\nprompt: ');
  }, 1000);
  // process.stdout.write('You typed: ' + cmd);
})
