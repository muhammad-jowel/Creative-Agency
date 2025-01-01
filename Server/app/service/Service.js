import mongoose from "mongoose";
import ServiceModel from "../model/ServiceModel.js";
const ObjectID = mongoose.Types.ObjectId;


// Create service
export const CreateService = async (req, res) => {
    try {
        let user_id = req.headers['user_id'];
        let reqBody = req.body;
        reqBody.userID = user_id;
        let data = await ServiceModel.create(reqBody);
        return {status : 'success', message : 'Service created successfully', data : data };
    } catch (e) {
        return {status: "Fail", message: error.toString()};
    }
};



// Read service
export const ReadService = async (req, res) => {
    try {
        let data = await ServiceModel.find();
        return {status : 'success', data : data};
    } catch (e) {
        return {status: "Fail", message: error.toString()};
    }
};



// Update service
// Update service
export const UpdateService = async (req, res) => {
    try {
        let user_id = req.headers.user_id;
        let serviceID  = new ObjectID(req.body.id);
        let reqBody = req.body;
        reqBody.userID = user_id;

        const data = await ServiceModel.updateOne(
            { userID: user_id, _id : serviceID },
            { $set: reqBody }
        );
        return { status: "success", data : data };
    } catch (e) {
        return { status: "Fail", message: e.toString() };
    }
};



// Delete service
export const RemoveService = async (req) => {
    try {
        let user_id = new ObjectID(req.headers['user_id']);
        let serviceID  = new ObjectID(req.body.id);
        
        await ServiceModel.deleteOne({_id : serviceID, userID : user_id})
        return {status:"success",message:"Remove Successfully"};
    }catch(error) {
        return {status:"fail",data:error.toString()}
    }
};