const
    express = require('express'),
    router = express.Router(),
    users = [
        {
            user_id: 'jonnyomg',
            name: 'Jonny O',
            location: 'Wildwood, FL'
        },
        {
            user_id: 'philipboy',
            name: 'Philip',
            location: 'Plainville, CT'
        }
    ]

// Video Chat Landing Page
router.get('/', async (req, res) => {
    res.render('video/home', { pageTitle: 'SpreadChat Video - Home', pageIcon: ''})
})

// Video Chat Single User by ID
router.get('/user/:id', async (req, res) => {

    const
        id = req.params.id,
        jonName = users[0].name,
        jonId = users[0].user_id,
        jonLoc = users[0].location,
        philName = users[1].name,
        philId = users[1].user_id,
        philLoc = users[1].location

    res.render('video/chat', { layout: 'spread-chat-layout', pageTitle: 'SpreadChat Video - Chat Room', pageIcon: '', id, jonName, jonId, jonLoc, philName, philId, philLoc})

})

module.exports = router;