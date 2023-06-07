const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema({
    eventid: {
        type: String,
        required: true,
    },
    name : {
        type: String,
        required: true,
    },
    information: {
        type: String,
        required: true,
    },
    date : {
        type: Date,
        required: true,
    },

});

const Events = mongoose.model('Events', EventsSchema);

module.exports = Events;