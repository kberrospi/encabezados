const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    let hd = req.header('User-Agent')
    res.send(`<p>${hd}</p>`)
});

app.listen(3000, ()=> console.log('Listening on port 3000!'));