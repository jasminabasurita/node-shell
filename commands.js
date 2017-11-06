module.exports = {
  pwd: function(){
    process.stdout.write(process.cwd());
  },
  date: function(){
    var date = new Date();
    process.stdout.write(date.toString());
  }
}



