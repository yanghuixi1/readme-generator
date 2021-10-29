const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/markdown");

const questions = [
  {
    type: "input",
    message: "What's your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter your project description",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter the installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Please enter the usage information",
    name: "usage",
  },
  {
    type: "input",
    message: "Please enter the contribution guidelines",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please enter the test instructions",
    name: "tests",
  },
  {
    type: "list",
    message: "What license do you choose for your application?",
    choices: [
      "MIT",
      "GPLv2",
      "Apache",
      "GPLv3",
      "BSD 3-Clause",
      "BSD 2-Clause",
      "LGPLv3",
      "AGPLv3",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "What's your Github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What's your email?",
    name: "email",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Success!");
  });
}

inquirer.prompt(questions).then((data) => {
  let markdownOutput = markdown.generateMarkdown(data);
  console.log(markdownOutput);
  writeToFile("README.md", markdownOutput);
});
