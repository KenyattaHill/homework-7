#!/usr/bin/env node
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFile = require('./utils/writeFile');

inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))

const questions = [
  {
    type: 'fuzzypath',
    name: 'path',
    excludePath: nodePath => nodePath.includes('node_modules'),
    excludeFilter: nodePath => nodePath.includes('.git'),
    itemType: 'directory',
    rootPath: process.cwd(),
    message: 'Choose a directory for your README:',
    depthLimit: 5
  },
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
    message: 'Do you want a table of contents?',
    default: false
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your github username',
    default: 'KenyattaHill'
  },
  {
    type: 'input',
    name: 'repository',
    message: 'Please enter the name of your Github repository',
    default: 'musicdiscovery'
  },
  
];

async function init() {
  const answers = await inquirer.prompt(questions);
  const filepath = path.resolve(answers.path, 'README.md')
  await writeFile(filepath, generateMarkdown(answers));
  console.log('\n\nREADME was generated at: ', filepath);
}

init();
