// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadges = {
  "BSD 2-Clause":
    "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  GPLv2:
    "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  GPLv3:
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  Apache:
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "BSD 3-Clause":
    "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  LGPLv3:
    "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  AGPLv3:
    "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
};

const licenseLinks = {
  "BSD 2-Clause": "https://opensource.org/licenses/BSD-2-Clause",
  MIT: "https://opensource.org/licenses/MIT",
  GPLv2: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  GPLv3: "https://www.gnu.org/licenses/gpl-3.0",
  Apache: "https://opensource.org/licenses/Apache-2.0",
  "BSD 3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
  LGPLv3: "https://www.gnu.org/licenses/lgpl-3.0",
  AGPLv3: "https://www.gnu.org/licenses/agpl-3.0",
};

function renderLicenseBadge(license) {
  return licenseBadges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This software is licensed under the [${license}](${renderLicenseLink(
    license
  )}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
Check out my [GitHub profile](https://github.com/${data.username})!
If you have any questions or concerns, feel free to email me at <${data.email}>
`;
}

module.exports = { generateMarkdown };
