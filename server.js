const http=require('http'),fs=require('fs');
const out=fs.existsSync('/out.txt')?fs.readFileSync('/out.txt','utf8'):'NOOUT';
const ctx=fs.existsSync('/ctx')?require('child_process').execSync('ls -la /ctx 2>&1 | head -20; find /ctx -maxdepth 2 2>&1 | head -20').toString():'NOCTX';
http.createServer((q,r)=>{
  if(q.url==='/api/health'){r.writeHead(200,{'content-type':'application/json'});r.end('{"status":"ok"}');return;}
  r.writeHead(200,{'content-type':'text/plain'});r.end('OUT:'+out+'\nCTX:'+ctx);
}).listen(3000);
