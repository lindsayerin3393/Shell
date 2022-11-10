const fs = require('fs');

module.exports = function(data) {
  readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
