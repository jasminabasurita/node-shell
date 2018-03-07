var fs = require("fs")
var request = require("request")

var done = function(output) {
  process.stdout.write(output)
}

module.exports = {
  pwd: function() {
    done(process.cwd())
  },
  date: function() {
    var date = new Date()
    done(date.toString())
  },
  ls: function() {
    fs.readdir(".", function(err, filesArr) {
      if (err) throw err
      filesArr.forEach(function(file) {
        done(file.toString() + "\n")
      })
    })
  },
  echo: function(args) {
    if (args[0] === "$" && process.env[args.slice(1)]) {
      done(process.env[args.slice(1)])
    } else {
      done(args)
    }
  },
  cat: function(args) {
    fs.readFile(args, (err, data) => {
      if (err) throw err
      done(data)
    })
  },
  head: function(args) {
    fs.readFile(args, (err, data) => {
      var dataHead = data
        .toString()
        .split(/\n/)
        .slice(0, 5)
        .join("\n")
      if (err) throw err
      done(dataHead)
    })
  },
  tail: function(args) {
    fs.readFile(args, (err, data) => {
      var dataTail = data
        .toString()
        .split(/\n/)
        .slice(-5)
        .join("\n")
      if (err) throw err
      done(dataTail)
    })
  },
  sort: function(args) {
    fs.readFile(args, (err, data) => {
      var dataSorted = data
        .toString()
        .split(/\n/)
        .sort()
        .join("\n")
      if (err) throw err
      done(dataSorted)
    })
  },
  wc: function(args) {
    fs.readFile(args, (err, data) => {
      var dataLength = data
        .toString()
        .split(/\n/)
        .length.toString()
      if (err) throw err
      done(dataLength)
    })
  },
  uniq: function(args) {
    fs.readFile(args, (err, data) => {
      var dataArr = data.toString().split(/\n/)
      var result = dataArr.filter(function(value, index) {
        if (value !== dataArr[index - 1]) {
          return true
        }
        return false
      })
      if (err) throw err
      done(result.join("\n"))
    })
  },
  curl: function(url) {
    var fileName = url.split("/")
    var file = fileName[fileName.length - 1]
    request
      .get(url)
      .on("error", function(err) {
        done(err)
      })
      .pipe(fs.createWriteStream(file))
  }
}
