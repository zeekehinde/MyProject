const express = require("express")
const router = express()
const {registration} = require("../controller/usercontroller")

router.post('/register', registration)

module.exports = router