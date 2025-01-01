import { SendMessageService, ReadMessageService, DeleteMessageService } from "../service/ContactService.js";


// Send Message
export const SendMessage = async (req, res) => {
    try {
        let result = await SendMessageService(req);
        res.json(result);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};



// Read Message
export const ReadMessage = async (req, res) => {
    try {
        let result = await ReadMessageService(req);
        res.json(result);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};


// Delete Message
export const DeleteMessage = async (req, res) => {
    try {
        let result = await DeleteMessageService(req);
        res.json(result);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};