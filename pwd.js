const fs = require('fs');

module.exports = function () {
  const myVar = process.cwd();
    process.stdout.write(myVar);
};

