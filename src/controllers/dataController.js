const DataModel = require('../models/dataModel');
const dataModel = new DataModel();

class DataController {
    constructor() {
        this.dataStore = [];
    }

    getData(req, res) {
        res.status(200).json({ storedData: dataModel.getData() });
    }

    postData(req, res) {
        const { text } = req.body;
        if (text) {
            dataModel.addData(text);
            res.status(200).send('Data received and stored.');
        } else {
            res.status(400).send('No text provided.');
        }
    }
}

module.exports = DataController;