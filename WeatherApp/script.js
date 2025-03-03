console.log("hello world");
const fs=require(`fs`);
fs.readFile(`./hello.txt`,`utf-8`,(err,data)=>{
    if(err){
        console.log(`error`);
    }
    console.log(data);
    console.log(`async`);

});