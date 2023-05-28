const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.set('strictQuery', false);

const recipientSchema = new Schema({
    email: String,
    clicked: {Boolean, default: false}
});

// name of the collection - name of the schema
// surveys collection stores list of surveys, each survey instance has subdocument collection
module.exports = recipientSchema;
