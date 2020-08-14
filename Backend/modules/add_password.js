const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

mongoose.connect('mongodb://localhost:27017/mernpms', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })


    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

var conn = mongoose.Collection;
var passSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    password_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'password_categories',
        required: true,
    },
    project_name: {
        type: String,
        required: true,
    },
    password_detail: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});
passSchema.plugin(mongoosePaginate);
var passModel = mongoose.model('password_details', passSchema);
module.exports = passModel;