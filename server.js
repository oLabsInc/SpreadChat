// Dependencies
const
    express = require('express'),
    ejs = require('ejs'),
    expressLayouts = require('express-ejs-layouts'),
    methodOverride = require('method-override'),
    path = require('path')


// App
const
    app = express(),
    PORT = 6986


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static("public"))
app.use(methodOverride('_method'))
app.use(expressLayouts)

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('landing')
})


// Routes
app.use('/video', require('./routes/video'))
app.use('/video-360', require('./routes/video-360'))
app.use('/voice', require('./routes/voice'))
app.use('/text', require('./routes/text'))



// APP LIVES AT: https://spreadchat.onrender.com

app.listen(PORT, () => { console.log(`SpreadChat running on http://localhost:${PORT}`) })