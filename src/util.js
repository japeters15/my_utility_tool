var chalk = require('chalk');

exports.debug = (title, obj, status) => {
  const seperator = '\n==================================\n';
  const output = seperator + title + seperator;

var error = chalk.bold.red;
console.error ('Error!');
  if (!status){
    status = "";
  }
  if (process.env.DEBUG) {
    console.error (output), obj, status);
  }
};
