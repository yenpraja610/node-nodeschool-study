let fs = require('fs');
let path = require('path');

let folder = process.argv[2];
let ext = '.' + process.argv[3];

fs.readdir(folder, function (err, list) {
  if (err) {
  return console.log(err);
} list.forEach(function(file) {
      if (path.extname(file) === ext) {
          console.log(file);
      }
  });
});
