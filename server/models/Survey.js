const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.set('strictQuery', false);

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [String]
});

// name of the collection - name of the schema
mongoose.model('surveys', surveySchema);
