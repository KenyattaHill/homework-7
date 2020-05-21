const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFile = require('./utils/writeFile');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please enter a title.',
    default: 'Project'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description.',
    default: 'TODO add description'
  },
  
];

async function writeToFile(fileName, data) {
  const filePath = path.resolve(__dirname, 'dist', fileName);
  await writeFile(filePath, data)
}

async function init() {
  const answers = await inquirer.prompt(questions);
  await writeToFile('README.md', generateMarkdown(answers));
}

init();
