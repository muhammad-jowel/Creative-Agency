import mongoose from "mongoose";
import TeamModel from "../model/TeamModel.js";
const ObjectID = mongoose.Types.ObjectId;


// Create Team service
export const CreateTeamService = async (req, res) => {
    try {
        let user_id = req.headers['user_id'];
        let reqBody = req.body;
        reqBody.userID = user_id;
        let data = await TeamModel.create(reqBody);
        return {status : 'success', message : 'Team created successfully', data : data };
    } catch (e) {
        return {status: "Fail", message: error.toString()};
    }
};



// Read Team service
export const ReadTeamService = async (req, res) => {
    try {
        let data = await TeamModel.find();
        return {status : 'success', data : data};
    } catch (e) {
        return {status: "Fail", message: error.toString()};
    }
};




// Update Team service
export const UpdateTeamService = async (req, res) => {
    try {
        let user_id = new ObjectID(req.headers.user_id);
        let BlogID  = new ObjectID(req.body.id);
        let reqBody = req.body;
        reqBody.userID = user_id;

        const data = await TeamModel.updateOne(
            { userID: user_id, _id : BlogID},
            { $set: reqBody }
        );
        return { status: "Success", data : data };
    } catch (e) {
        return { status: "Fail", message: e.toString() };
    }
};



// Delete Team service
export const RemoveTeamService = async (req) => {
    try {
        let user_id = new ObjectID(req.headers['user_id']);
        let BlogID  = new ObjectID(req.body.id);
        
        await TeamModel.deleteOne({_id : BlogID, userID : user_id})
        return {status:"success",message:"Remove Successfully"};
    }catch(error) {
        return {status:"fail",data:error.toString()}
    }
};

