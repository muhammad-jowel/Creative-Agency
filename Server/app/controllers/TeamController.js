import { CreateTeamService, ReadTeamService, RemoveTeamService, UpdateTeamService } from "../service/TeamService.js";

// Create Team
export const CreateTeam = async (req, res) => {
    try {
        let result = await CreateTeamService(req, res);
        return res.json(result);
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
};


// Read Team
export const ReadTeam = async (req, res) => {
    try {
        let result = await ReadTeamService(req, res);
        return res.json(result);
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
}


// Update Team
export const UpdateTeam = async (req, res) => {
    try {
        let result = await UpdateTeamService(req, res);
        return res.json(result);
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
};


// Delete Team
export const RemoveTeam = async (req, res) => {
    try {
        let result = await RemoveTeamService(req, res);
        return res.json(result);
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
}