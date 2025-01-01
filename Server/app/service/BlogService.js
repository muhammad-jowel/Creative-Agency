import mongoose from "mongoose";
import BlogModel from "../model/BlogModel.js";
const ObjectID = mongoose.Types.ObjectId;


// Create blog service
export const CreateBlogService = async (req, res) => {
    try {
        let user_id = req.headers['user_id'];
        let reqBody = req.body;
        reqBody.userID = user_id;
        let data = await BlogModel.create(reqBody);
        return {status : 'success', message : 'Blog created successfully', data : data };
    } catch (e) {
        return {status: "Fail", message: error.toString()};
    }
};



// Read blog service
export const ReadBlogService = async (req, res) => {
    try {
        let data = await BlogModel.find();
        return {status : 'success', data : data};
    } catch (e) {
        return {status: "Fail", message: error.toString()};
    }
};




// Update blog service
export const UpdateBlogService = async (req, res) => {
    try {
        let user_id = new ObjectID(req.headers.user_id);
        let BlogID  = new ObjectID(req.body.id);
        let reqBody = req.body;
        reqBody.userID = user_id;

        const data = await BlogModel.updateOne(
            { userID: user_id, _id : BlogID},
            { $set: reqBody }
        );
        return { status: "Success", data : data };
    } catch (e) {
        return { status: "Fail", message: e.toString() };
    }
};



// Delete blog service
export const RemoveBlogService = async (req) => {
    try {
        let user_id = new ObjectID(req.headers['user_id']);
        let BlogID  = new ObjectID(req.body.id);
        
        await BlogModel.deleteOne({_id : BlogID, userID : user_id})
        return {status:"success",message:"Remove Successfully"};
    }catch(error) {
        return {status:"fail",data:error.toString()}
    }
};

export const BlogListDetailsService = async (req) => {
    try{
        let blogID = new ObjectID(req.params.blogID);
        let matchStage = {
            $match: {
                _id: blogID
            }
        }
        let data = await BlogModel.aggregate([matchStage])
        return {status:"success",data:data}
    }
    catch(error){
        return {status:"fail",data:error.toString()}
    }
}