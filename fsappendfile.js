var fs1=require('fs');
var data='learn js';
fs1.appendFile('mydata.txt',data,(error)=>{
   if(error) 
       throw error;
       console.log("data added");
   
});

