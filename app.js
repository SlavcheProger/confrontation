const fs = require("fs");
const readline = require('readline');

/*Methods*/
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

/*App.Started()*/
let paths;

process.stdin.on('data', function (chunk) {
  console.log('get data: ', chunk.toString())
  paths = chunk.toString().split(' ');
  //////
let obj = {
    input: paths[0],
    output: paths[1],
    gameType:0,
    rescount:0,
    armyCount:0,
    points:0
    };

console.log('inp: ' + obj.input);


  /////
  process.exit();
});

process.stdin.on('exit', function () {

});

