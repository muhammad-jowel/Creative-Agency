import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
    {
        userID : {type : mongoose.Schema.Types.ObjectId, required : true},
        name : { type: String, required: true},
        designation : { type: String, required: true},
        img : { type: String, required: true},
        bio : { type: String, required: true},       
    },
    {
        timestamps : true,
        versionKey : false,
    }
);

const TeamModel = mongoose.model('teams', DataSchema);

export default TeamModel;