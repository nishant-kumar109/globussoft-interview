const express = require('express');
const router = express.Router();

const userManagementController = require('../controller/user-management')


router.post(`/create`, userManagementController.userSignUp)



module.exports = router;