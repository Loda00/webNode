const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'application/json'})

    let info = {
        nombre : 'Jhon Alex',
        edad : 23,
        url : req.url
    }
    res.write(JSON.stringify(info));
    console.log('1');
    res.end();

}).listen(3000);
