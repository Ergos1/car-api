import mongoose from 'mongoose'

var carSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength:200,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    description: {
        type: String,
        maxLength: 1000,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    images_link: {
        type: [{
            type: String
        }],
        validate: [arrayLimit, '{PATH} exceedes the limit of 3'],
        required: true
    }
},
{
    versionKey: false,
});


function arrayLimit(val) {
    return val.length <= 3 && val.length >= 1;
}

export default mongoose.model('car', carSchema);
