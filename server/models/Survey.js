const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.set('strictQuery', false);
const recipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [recipientSchema],
    yesClicked: {type: Number, default: 0},
    noClicked: {type: Number, default: 0},
    belongsTo: {type: Schema.Types.ObjectId, ref: 'User'},
    sentDate: Date,
    lastReplied: Date
});

// every survey belongs to a particular user, here belongsTo establishes a relationship between 
// surveySchema and user.

// name of the collection - name of the schema
// surveys collection stores list of surveys, each survey instance has subdocument collection
mongoose.model('surveys', surveySchema);
