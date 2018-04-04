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
const writeData = (filepath, data) => {

    let fd = fs.openSync(filepath, "w");
    fs.writeFile(fd, data, ()=>{
        fs.closeSync(fd);
    });
};

let filepath1 = './input.txt';
let filepath2 = './output.txt';

let data = readData(filepath1);

for (let i=0; i<data.length;i++)
    console.log(i + ' ' + data[i]);

writeData(filepath2,data[1]);