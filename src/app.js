"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var server = http_1.default.createServer(function (req, res) {
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write('오늘 야근 당첨');
            res.end();
        }
    }
});
server.listen(3000, function () {
    console.log("http://localhost:3000");
});
