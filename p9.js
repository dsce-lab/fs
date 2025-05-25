const fs=require('fs');
const { type } = require('os');
const path=require('path');
function listdir(dirpath){
    try{
    const items=fs.readdirSync(dirpath);
    const result=items.map(item=>{
     const fullpath=path.join(dirpath,item);
     const isdir=fs.statSync(fullpath).isDirectory();
     return{
        name:item,
        type:isdir ? 'directory' : 'file',
        path:fullpath
     };
    });
    console.log(JSON.stringify(result,null,2));
    }
    catch(err){
        console.log(err.message);
    }
}
let inputpath=process.argv[2] || '.';
listdir(inputpath);