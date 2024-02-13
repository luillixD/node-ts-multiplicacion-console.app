import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

const {b: base, l: limit, s: showTable, d: directory, n: name} = yarg;

const headerMessage = `
==========================\n
Tabla de multiplicar del ${base}\n
==========================\n
`;
let outputMessage = '';
const outputPath = 'output/';

fs.mkdirSync(outputPath, { recursive: true });


for(let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

 outputMessage = headerMessage + outputMessage;
if(showTable) console.log(outputMessage);
fs.writeFileSync(`${directory}/${name}.txt`, outputMessage);
