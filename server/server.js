const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    //res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var server = require('http').Server(app);
var server = app.listen(port, () => console.log(`Server listening on port ${port}!`))
var io = require('socket.io')(server);


app.get('/', (req, res) => {
  res.send('Hello There!')
})

io.on('connection', function (client) {
    console.log("New client connected: ", client.id)

    client.on('sendMessage', async function (data) {
        console.log(data, client.id)
        io.emit("recieveMessage", "Hi!");
        io.to(client.id).emit("recieveMessage", "Hi " + client.id)
    })

    client.on('disconnect', function () {
        console.log('Client Disconnected: ', client.id)
        //handleDisconnect()
    })

});