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
  }
}



