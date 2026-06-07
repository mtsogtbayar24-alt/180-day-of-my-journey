const fs = require('fs');

fs.writeFileSync('day1.txt', 'I started my 180-day journey!');
const content = fs.readFileSync('day1.txt', 'utf-8');
console.log(content);
