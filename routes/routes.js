const express = require('express')
const router = express.Router()

router.ger('/users', (req, res)=>{
     res.send('All users')
})

module.exports = router