#!/usr/bin/env node
const { execSync } = require('child_process');
var fs = require('fs');

const txtStyle = {
  strong: "\u001b[1m"
}

const bgColors = {
  reset: "\u001b[0m",
  black: "\u001b[48;5;0m",
  orange: "\u001b[48;5;208m",
  green: "\u001b[48;5;82m",
  blue: "\u001b[48;5;51m",
  pink: "\u001b[48;5;13m",
  yellow: "\u001b[48;5;11m",
  red: "\u001b[48;5;9m",
  lightblue: "\u001b[48;5;48m"
}

const txtColors = {
  reset: "\u001b[0m",
  orange: "\u001b[38;5;208m",
  green: "\u001b[38;5;82m",
  blue: "\u001b[38;5;51m",
  pink: "\u001b[38;5;13m",
  yellow: "\u001b[38;5;11m",
  red: "\u001b[38;5;9m",
  lightblue: "\u001b[38;5;48m"
}

console.log(`${bgColors.black}`);
console.log(`---------------------------------------------`);
console.log('                                             ');
console.log(`             ${txtStyle.strong}${txtColors.orange}@ ${txtColors.green}U ${txtColors.blue}i ${txtColors.pink}R ${txtColors.yellow}e ${txtColors.green}a ${txtColors.red}c ${txtColors.lightblue}t                 `);
console.log('                                             ');
console.log(`                 (ɔ ͡° ͜ʖ ͡°)ɔ                     `);
console.log('                                             ');
console.log(`---------------------------------------------`);

console.log(`Clonning a NextJS with @UiReact base project ${txtColors.reset} 👻`);
console.log('\n');
console.log(`${txtColors.blue}Next JS configs: ${txtColors.reset}`);
console.log('\n');
console.log(`${txtStyle.strong}${txtColors.orange}Router: ${txtColors.blue}App Router`);
console.log(`${txtStyle.strong}${txtColors.orange}Typescript: ${txtColors.blue}YES!`);
console.log(`${txtStyle.strong}${txtColors.orange}ESLint: ${txtColors.blue}Yes`);
console.log(`${txtColors.orange}Styling: ${txtColors.blue}Styled-Components`);
console.log(`${txtColors.orange}Library: ${txtColors.blue}@UiReact`);
console.log('\n');

try {
  execSync('git clone https://github.com/inavac182/next-js-w-uireact.git');
} catch (e) {
  console.log(`${txtColors.red}Error while clonning the base example... 🤧`);
  console.error(e.message);
  process.exit();
}

console.log(`Copying project files... 😁`);

try {
  fs.rmSync('./next-js-w-uireact/.git/', {recursive: true});
  fs.cpSync('./next-js-w-uireact/', './', {recursive: true});
  fs.rmSync('./next-js-w-uireact/', {recursive: true});
} catch (e) {
  console.log(`${txtColors.red}Error while copying files... 🤧`);
  console.error(e.message);
  process.exit();
}

console.log(`Installing packages... 😈`);

try {
  execSync('npm ci');
} catch (e) {
  console.log(`${txtColors.red}Error while installing packaages... 🤧`);
  console.error(e.message);
  process.exit();
}

console.log(`All Done! 🥵`);
console.log('\n');
console.log(`${txtColors.orange} To get it started run:`);
console.log(`${txtColors.blue} npm run dev `);
console.log(`${txtColors.orange} Then, go to:`);
console.log(`${txtColors.blue} https://localhost:3000`);
console.log('\n');
console.log(`${txtColors.blue} Remember, this is just a base working project, you can start customizing it now.`);
console.log('\n');
console.log(`${txtColors.pink}Questions!? 👀`);
console.log(`${txtColors.blue}Feel free to join our discussions board: https://github.com/inavac182/uireact/discussions`);
