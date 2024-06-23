const
    express = require('express'),
    router = express.Router()

// Voice Chat Landing Page
router.get('/', async (req, res) => {
    res.render('voice/home', { pageTitle: 'SpreadChat Voice - Home', pageIcon: ''})
})

module.exports = router;