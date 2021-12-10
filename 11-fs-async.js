const {readFile, writeFile} = require('fs');

readFile('./contents/first.txt',(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
})