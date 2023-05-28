const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.set('strictQuery', false);
const recipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [recipientSchema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    belongsTo: {type: Schema.Types.ObjectId, ref: 'User'},
    dateSent: Date,
    lastReplied: Date
});

// every survey belons to a particular user, here belongsTo establishes a relationship between 
// surveySchema and user.

// name of the collection - name of the schema
// surveys collection stores list of surveys, each survey instance has subdocument collection
mongoose.model('surveys', surveySchema);
