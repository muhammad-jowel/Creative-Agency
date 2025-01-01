import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
    {
        userID : {type : mongoose.Schema.Types.ObjectId, required : true},
        img : { type: String, required : true},
        title : { type: String, required: true },
        sortContent : { type: String, required: true },
        fullContent : { type: String, required: true },
        author : { type: String, required: true}
    },
    {
        timestamps : true,
        versionKey : false,
    }
);

const BlogModel = mongoose.model('blogs', DataSchema);

export default BlogModel;