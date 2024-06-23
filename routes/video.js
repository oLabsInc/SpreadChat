const
    express = require('express'),
    router = express.Router()

// Video Chat Landing Page
router.get('/', async (req, res) => {
    res.render('video/home', { pageTitle: 'SpreadChat Video - Home', pageIcon: ''})
})

module.exports = router;