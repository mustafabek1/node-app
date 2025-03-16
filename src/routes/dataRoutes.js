const express = require('express');
const DataController = require('../controllers/dataController');

const router = express.Router();
const dataController = new DataController();

router.get('/', dataController.getData.bind(dataController));
router.post('/', dataController.postData.bind(dataController));

module.exports = router;