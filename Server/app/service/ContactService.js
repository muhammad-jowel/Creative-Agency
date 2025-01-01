import ContactModel from "../model/ContactModel.js";
import mongoose from "mongoose";
const ObjectID = mongoose.Types.ObjectId;


// Send Message Service
export const SendMessageService = async (req, res) => {
    try {
        let reqBody = req.body;
        await ContactModel.create(reqBody);
        return { status : 'success', message: "Your message has been sent successfully"}
    } catch (e) {
        return {status:"fail",data:e.toString()}
    }
};


// Read Message Service

export const ReadMessageService = async (req, res) => {
    try {
        let data = await ContactModel.find({});
        return { status : 'success', data: data}
    } catch (e) {
        return {status:"fail",data:e.toString()}
    }
};


// Delete Message Service
export const DeleteMessageService = async (req, res) => {
    try {
        let messageID = new ObjectID(req.body.id);
        await ContactModel.deleteOne({_id: messageID})
        return { status : 'success', message: "Message deleted successfully"}
    } catch (e) {
        return {status:"fail",data:e.toString()}
    }
};