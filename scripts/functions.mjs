const fs = require("fs");
const { execSync } = require("child_process");
const process = require("process");
const svelte = require('create-svelte');

module.exports = {
  createRootDirectory: async function (directory) {
    return new Promise((resolve, reject) => {
      if (fs.existsSync(directory)) {
        console.log("The directory already exists");
        reject();
      }
      fs.mkdirSync(directory);
      process.chdir(`${directory}`);
      console.log('Created root directory ✅');
      resolve();
    });
  },

  initializeSvelteProject: async function () {
    console.log('Initialising SvelteKit project...');
    await svelte.create(__dirname, {
      template: "default",
      types: "typescript",
      prettier: true,
      eslint: true,
      playwright: false,
    });
    console.log('SvelteKit project created ✅');
  },
};
