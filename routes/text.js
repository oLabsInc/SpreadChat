const
    express = require('express'),
    router = express.Router()

// Text Chat Landing Page
router.get('/', async (req, res) => {
    res.render('text/home', { pageTitle: 'SpreadChat Text - Home', pageIcon: ''})
})

module.exports = router;