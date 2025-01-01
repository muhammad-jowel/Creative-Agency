import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
    {
        userID : {type : mongoose.Schema.Types.ObjectId, required : true},
        img : { type: String, required: true },
        title : { type: String, required: true },
        description : { type: String, required: true }
    },
    {
        timestamps : true,
        versionKey : false,
    }
);

const ServiceModel = mongoose.model('services', DataSchema);

export default ServiceModel;