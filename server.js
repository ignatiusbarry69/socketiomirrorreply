const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
//const server=require('http').createServer(app);
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
const io = require('socket.io')(server);
app.get('/', (req, res) => {
    res.send('Server is running!');
});
io.on('connection', (data)=>{
    console.log(`client connected`);
    data.on('OZ', (msg) => {
        console.log(`oz message: ${msg}`);
	data.emit('OZ', `${msg}`);
    })
});



