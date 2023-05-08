var http = require("http");
var biodata = require("./biodata");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text / html" });
    res.write(" Nama : " + biodata.getNama());
    res.write(" Tempat Lahir : " + biodata.getTempatLahir());

    res.end();
  })
  .listen(8500);
