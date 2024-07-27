
const express = require('express');
const userRouter = require('./user.js')

const router = express.Router();
router.use(express.json())

router.use("/user",userRouter);

module.exports = router;