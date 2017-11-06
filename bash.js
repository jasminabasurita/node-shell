process.stdout.write('prompt: ');

process.stdin.on('data', function(data) {
  var cmd = data.toString().trim();

  if(cmd === 'pwd'){
    process.stdout.write(process.execPath);
  }
  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt: ');
})
