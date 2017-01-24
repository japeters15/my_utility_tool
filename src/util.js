var chalk = require('chalk');

function _bump(currentSemVersion, typeofIncrement){

  //Major [0]
  //Minor [1]
  //Patch [2]
  const aryVersions = currentSemVersion.split('.');

  for(let versionIndex in aryVersions){
    aryVersions[versionIndex] = parseInt(aryVersions[versionIndex]);
  }

  if(typesofIncrement === 'patch'){
    aryVersions[2] += 1; //patch
  } else if(typesofIncrement === 'minor'){
    aryVersions[2] = 0; //patch
    aryVersions[1] += 1; //minor
  } else if(typesofIncrement === 'major'){
    aryVersions[2] = 0; //patch
    aryVersions[1] = 0; //minor
    aryVersions[0] += 1; //minor
  }

  return aryVersions.join('.');
}

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
