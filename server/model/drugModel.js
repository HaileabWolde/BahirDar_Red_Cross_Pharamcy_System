import mongoose  from "mongoose";

const drugSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    subCategory : {
        type : String ,
        required : true
      },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    prescriptionRequired : {
        type : Boolean ,
        default : false ,
        required : true
      },
}, {timestamps: true})

const DrugSchema = mongoose.model('Drug', drugSchema)
export default DrugSchema
