import http from 'http';

const server = http.createServer((req, res)=>{
  if(req.method === 'GET'){
    if(req.url === '/'){
      res.statusCode = 200;
      res.setHeader('Content-Type','text/plain');
      res.write('오늘 야근 당첨');
      res.end();
    }
  }
})

server.listen(3000, ()=>{
  console.log(`http://localhost:3000`)
})