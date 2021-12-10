const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.write('Welcome to PPs HomePage, OK')
//     res.end()
// })

// server.listen(4200);

// ---------------------------------------------------------------

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to requested');
    }
    if(req.url ==='/about'){
        res.end('This is about');
    }
    res.end(
        `<h1> This is mistake </h1>
        <p> this is new </p>`
    )
})

server.listen(4200);

