const http = require('http');
const fs = require("fs");
const filecont = fs.readFileSync("index.html");
const hostname = '127.0.0.1';
const port = 80;
const path = require('path');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if (req.method == 'GET') {
    var fileUrl;
    if (req.url == '/') fileUrl = '/index.html';
    else fileUrl = req.url;

    var filePath = path.resolve("./"+fileUrl);
    const fileExt = path.extname(filePath);
    if (fileExt == '.html') {
        fs.exists(filePath, (exists) => {
          if (!exists) {
            console.log("asdas");
        }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            fs.createReadStream(filePath).pipe(res);
        });
    }
    else if(fileExt == 'jpg'){
      res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream(filePath).pipe(res);
    }
    else if(fileExt == 'svg'){
      res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream(filePath).pipe(res);
    }
    else if (fileExt == '.css') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fs.createReadStream(filePath).pipe(res);
    }
    
    else if (fileExt == '.js') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/js');
      fs.createReadStream(filePath).pipe(res);
  }
  
}
else {
    filePath = path.resolve('./public/404.html');
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(filePath).pipe(res);
}
});






server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});