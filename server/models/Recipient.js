const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.set('strictQuery', false);

const recipientSchema = new Schema({
    email: String,
    clicked: {type: Boolean, default: false}
});

// mongoose arqali mongo dbda skima reg qilip, kollektsiya jaratip atirgan joqpiz
// recipientSchema tek eksport qilip atirmiz
module.exports = recipientSchema;
