const fs = require("fs");
const readline = require('readline');

const readData = (filename) => {
    try{
    let fd = fs.openSync("./" + filename, "r");
    let data = fs.readFileSync(fd).toString().split('\n');  
    fs.closeSync(fd); 
    return data;
    }
    catch(err){console.log(err);}
};

let filename = 'input.txt';
let data = readData(filename);

for (let i=0; i<data.length;i++)
    console.log(i + ' ' + data[i]);

