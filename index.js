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
  {
    type: 'confirm',
    name: 'installation',
    message: 'Do you want an installation section?',
    default: false
  },
  {
    type: 'confirm',
    name: 'usage',
    message: 'Do you want a usage section?',
    default: false
  },
  {
    type: 'confirm',
    name: 'license',
    message: 'Do you want a license section?',
    default: false
  },
  {
    type: 'confirm',
    name: 'contributing',
    message: 'Do you want a contributing section?',
    default: false
  },
  {
    type: 'confirm',
    name: 'tests',
    message: 'Do you want a tests section?',
    default: false
  },
  {
    type: 'confirm',
    name: 'tableOfContents',
    message: 'Do you want a table of contents?'
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your github username'
  },
  {
    type: 'input',
    name: 'repository',
    message: 'Please enter the name of your Github repository'
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
