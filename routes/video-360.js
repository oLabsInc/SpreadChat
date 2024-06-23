const
    express = require('express'),
    router = express.Router()

// Video 360 Chat Landing Page
router.get('/', async (req, res) => {
    res.render('video-360/home', { pageTitle: 'SpreadChat Video 360 - Home', pageIcon: ''})
})

module.exports = router;