const AIAgent = require('../models/aiAgentModel');

// CREATE AIAgent
exports.createAIAgent = async (req, res) => {
    try {
        const aiAgent = new AIAgent(req.body);
        await aiAgent.save();
        res.status(201).json(aiAgent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// READ all AIAgents
exports.getAllAIAgents = async (req, res) => {
    try {
        const aiAgents = await AIAgent.find();
        res.status(200).json(aiAgents);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// READ AIAgent by ID
exports.getAIAgentById = async (req, res) => {
    try {
        const aiAgent = await AIAgent.findById(req.params.id);
        if (!aiAgent) return res.status(404).json({ message: 'AIAgent not found' });
        res.status(200).json(aiAgent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// UPDATE AIAgent
exports.updateAIAgent = async (req, res) => {
    try {
        const aiAgent = await AIAgent.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!aiAgent) return res.status(404).json({ message: 'AIAgent not found' });
        res.status(200).json(aiAgent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE AIAgent
exports.deleteAIAgent = async (req, res) => {
    try {
        const aiAgent = await AIAgent.findByIdAndDelete(req.params.id);
        if (!aiAgent) return res.status(404).json({ message: 'AIAgent not found' });
        res.status(200).json({ message: 'AIAgent deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
