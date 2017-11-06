fs = require('fs')

module.exports = {
  pwd: function(){
    process.stdout.write(process.cwd());

  },
  date: function(){
    var date = new Date();
    process.stdout.write(date.toString());
  },
  ls: function(){
    fs.readdir('.', function(err, filesArr){
      if (err) throw err;
      filesArr.forEach(function(file){
        process.stdout.write(file.toString() + '\n');
      })
    })
  },
  echo: function(args){
    if(args[0] === '$' && process.env[args.slice(1)]) {
      process.stdout.write(process.env[args.slice(1)]);
    } else {
      process.stdout.write(args);
    }
  },
  head: function(args){
    fs.readFile(args, (err, data) => {
      if(err) throw err;
      process.stdout.write(data);
    })
  }
}



