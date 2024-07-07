// Dependencies
const
    express = require('express'),
    app = express(),
    PORT = 6986,
    fs = require('fs'),
    https = require('https'),
    server = https.createServer(app),
    io = require('socket.io-client')(server),
    {ExpressPeerServer} = require('peer'),
    peerServer = ExpressPeerServer(server, {debug: true})
    ejs = require('ejs'),
    expressLayouts = require('express-ejs-layouts'),
    methodOverride = require('method-override'),
    path = require('path')




app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static("public"))
app.use(methodOverride('_method'))
app.use(expressLayouts)
app.use('/peerjs', peerServer)


app.set('view engine', 'ejs')



io.on('connection', socket => {
    console.log('A User Connected..')
    console.log(socket)
    socket.on("connect", () => {
        console.log(socket)
    });
    socket.on('disconnect', () => {
        console.log('User Disconnected')
    })

    socket.on('call-user', (data) => {
        console.log(`call-user event from ${data.callerID} to ${data.userID}`)
        socket.to(data.userID).emit('call-made', {
            offer: data.offer,
            callerID: data.callerID
        })
    })

    socket.on('make-answer', data => {
        console.log(`make-answer event from ${data.calleeID} to ${data.callerID}`)
        socket.to(data.callerID).emit('answer-made', {
            answer: data.answer,
            calleeID: data.calleeID
        })
    })

    socket.on('reject-call', data => {
        console.log(`reject-call event from ${data.calleeID} to ${data.callerID}`)
        socket.to(data.callerID).emit('call-rejected', {
            calleeID: data.calleeID
        })
    })

    socket.on('user-connected', (userID) => {
        console.log(`user-connected event for ${userID}`)
    })


})



app.get('/', (req, res) => {
    res.render('landing')
})


// Routes
app.use('/video', require('./routes/video'))
app.use('/video-360', require('./routes/video-360'))
app.use('/voice', require('./routes/voice'))
app.use('/text', require('./routes/text'))



// APP LIVES AT: https://spreadchat.onrender.com
// Call me now at: https://spreadchat.onrender.com/video/user/jonnyomg

app.listen(PORT, () => { console.log(`SpreadChat running on http://localhost:${PORT}`)})