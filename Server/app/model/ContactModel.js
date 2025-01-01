import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema(
  {
    fullName : { type: String, required: true },
    email : { type: String, required: true },
    message : { type: String, required: true },
    sentAt : { type: Date, default: Date.now}
  },
  {
    timestamps: true, 
    versionKey: false
  }
);
  
const ContactModel = mongoose.model('contacts', DataSchema);

export default ContactModel;