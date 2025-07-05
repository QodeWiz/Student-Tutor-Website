npx http-server .const express  = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello from Node.js server!');
});

const port = 3000;
app.listen(port, () =>  {
    console.log('Server Listening on port $(port)');

});