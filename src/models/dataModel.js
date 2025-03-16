class DataModel {
    constructor() {
        this.data = [];
    }

    addData(item) {
        this.data.push(item);
    }

    getData() {
        return this.data;
    }
}

module.exports = DataModel;