const fs = require("fs");
const readline = require('readline');

const readData = (filepath) => {
    try{
    let fd = fs.openSync(filepath, "r");
    let data = fs.readFileSync(fd).toString().split('\n');  
    fs.closeSync(fd); 
    return data;
    }
    catch(err){console.log(err);}
};

let filepath = './input.txt';
let data = readData(filepath);

for (let i=0; i<data.length;i++)
    console.log(i + ' ' + data[i]);

