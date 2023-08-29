
var http=require('http');
var fs=require('fs');
var formidable=require('formidable');


http.createServer(function(req,res){
    if(req.url=='/'){
        res.writeHead(200,{'content-Type':'text/html'});
        res.write('<form actin="biodata" method="post" >');
        res.write('<h1> Fill the form</h1>');
        res.write('Name <input type="text" name="username"><br>');
        res.write('dob <input type="date" name="dob"><br>');
        res.write('mail id  <input type="text" name="mail"><br>');
        res.write('phone number <input type="text" name="ph num"><br>');
        res.write('resume <input type="file" name="resume"><br>');
        res.write('<input type="submit" >');
        res.end();

    }
    else if(req.url=='/biodata'){
        var form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.write('<h1> Name:'+fields.username+'</h1><br>')
            res.write('<h1> dob:'+fields.dob+'</h1><br>')
            res.write('<h1> mail id:'+fields.mail+'</h1><br>')
        })
         
    }else{
        res.end("404 error");
    }
 
    //res.end('heloo worl');
} ).listen(8080);
//onsole.error("error");.