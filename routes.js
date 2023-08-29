const fs=require('fs');

const requestHandler=(req,res)=>{

const url=req.url;
const method=req.method;
if(url=='/'){
res.setHeader('Content-type','text/html');
res.write('<h1> hlo pakin</h1>')
// res.end("hlo world welcome to frst page ")
res.write('<body> <form action="/message" method="POST"> <input type="text" name="name"><input type="submit" value="send" ></form></body>');
return res.end();    
}
if(url=='/message' && method=='POST'){

    const body=[];
    req.on('data',(chunck)=>{
        console.log("chuck : ")
        console.log(chunck);
        body.push(chunck);
    });
   return  req.on('end',()=>{
        const parse=Buffer.concat(body).toString();
        const message=parse.split("=");
        fs.writeFile('hello.txt',message[1],(err)=>{
            res.setHeader('location','/');
            res.statusCode=302;
            console.log(parse);
            return res.end();
        });
       // fs.writeFileSync('hello.txt','dummy')
       
        
    })
    
}

res.end();   };

//module.exports=requestHandler;


module.exports={
    handler:requestHandler,
    someText:'print some text'
};

//or 

exports.handler=requestHandler;

//or 

module.exports.handler=requestHandler;
