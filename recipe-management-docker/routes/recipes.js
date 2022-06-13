const express = require('express');
const router = express.Router();

const shoppingController = require('../controller/recipes')


router.get(`/recipes/shopping-list`, shoppingController.getShopingList)
router.get(`/app/feedback`, shoppingController.getFeedbackList);


module.exports = router;