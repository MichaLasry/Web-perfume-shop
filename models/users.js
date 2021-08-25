const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        // minlength: 6,
        // maxlength: 10,
    }
    ,
    phone: {
        type: String,
        validator: {
            validate: (v) => {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            }
            , message: props => `${props.value} is not valid phone number`
        }
    },
    purchaseDetails:[{type:mongoose.Schema.Types.ObjectId,ref:'purchaseDetails'}]
})
module.exports = mongoose.model('user',userSchema)
