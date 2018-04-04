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
    input: paths[0], //путь к input файлу
    output: paths[1], //путь к output файлу
    gameType:0, //тип игры
    resCount:0, //кол-во ресурсов
    armyCount:0, //кол-во армий
    points:0, //кол-во очков за выйгрыш
    strokeNum: 0, //номер хода
    enemyRes: 0 //распределение ресурсов противника
    };

console.log('inp: ' + obj.input);

let data = readData(obj.input);
console.log(data[0]);
let spdata = data[0].split(' ');
obj.gameType = spdata [0];
obj.resCount = spdata [1];
obj.armyCount = spdata [2];
obj.points = spdata [3];
obj.strokeNum = data [1];
obj.enemyRes = data [2];
  /////
  process.exit();
});

process.stdin.on('exit', function () {

});

