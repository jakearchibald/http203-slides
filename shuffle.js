const fs = require('fs');

const src = fs.readFileSync(__dirname + '/src.js');
const middle = /\/\/ START([\w\W]*)\/\/ END/.exec(src)[1];
const [jake, surma] = middle.split('// SURMATIME').map(code => code.split('// =========='));

const output = [];

while (jake.length) {
  for (const sections of [jake, surma]) {
    const num = Math.floor(Math.random() * sections.length);
    output.push(sections.splice(num, 1));
  }
}

console.log(output.join(''));
