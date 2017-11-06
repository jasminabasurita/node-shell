var commands = require('./commands.js');

process.stdout.write('prompt: ');

process.stdin.on('data', function(data) {
  var cmd = data.toString().trim();
  commands[cmd]();
  setTimeout(function(){
    process.stdout.write('\nprompt: ');
  }, 10);
  // process.stdout.write('You typed: ' + cmd);
})
