import { CreateService, ReadService, UpdateService, RemoveService } from "../service/Service.js";


// Create Service
export const Create = async (req, res) => {
    try {
        let result = await CreateService(req, res);
        return res.json(result);
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
};


// Read Service
export const Read = async (req, res) => {
    try {
        let result = await ReadService(req, res);
        return res.json(result);
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
}


// Update Service
export const Update = async (req, res) => {
    try {
        let result = await UpdateService(req, res);
        return res.json(result);
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
};


// Delete Service
export const Remove = async (req, res) => {
    try {
        let result = await RemoveService(req, res);
        return res.json(result);
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
}