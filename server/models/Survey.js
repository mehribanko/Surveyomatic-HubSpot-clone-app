const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.set('strictQuery', false);

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [String],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0 }
});

// name of the collection - name of the schema
mongoose.model('surveys', surveySchema);
