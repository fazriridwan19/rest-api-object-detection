const mongoose = require('mongoose');

const objSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Object must have name"]
    },
    date: {
        type: String,
        require: [true, "Object must have date"]
    }
});

const ObjectModel = mongoose.model("Objects", objSchema);

module.exports = ObjectModel;
