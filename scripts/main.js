const yargs =  require('yargs');

//Include all subscripts
const functions = require('./functions.mjs');

//Parse CLI parameters
const argv = yargs
  .option('location', {
    alias: 'l',
    description: 'Directory where the project will be created in',
    type: 'string',
    demandOption: true,
  })
  .option('name', {
    alias: 'n',
    description: 'Name of your project',
    type: 'string',
    demandOption: true,
  })
  .help()
  .alias('help', 'h').argv

//Indicate to user that the processing will start
console.log(`Setting up project with the following parameters: \n${JSON.stringify(argv)}\n`);

async function main() {
  try {
    await functions.createRootDirectory(argv.location);
    await functions.initializeSvelteProject();
  } catch (err) {
    console.log(err);
  }
}

main();