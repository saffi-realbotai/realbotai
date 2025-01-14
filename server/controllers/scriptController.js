const Script = require('../models/scriptModel');

// CREATE Script
exports.createScript = async (req, res) => {
    try {
        const script = new Script(req.body);
        await script.save();
        res.status(201).json(script);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// READ all Scripts
exports.getAllScripts = async (req, res) => {
    try {
        const scripts = await Script.find();
        res.status(200).json(scripts);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// READ Script by ID
exports.getScriptById = async (req, res) => {
    try {
        const script = await Script.findById(req.params.id);
        if (!script) return res.status(404).json({ message: 'Script not found' });
        res.status(200).json(script);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// UPDATE Script
exports.updateScript = async (req, res) => {
    try {
        const script = await Script.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!script) return res.status(404).json({ message: 'Script not found' });
        res.status(200).json(script);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE Script
exports.deleteScript = async (req, res) => {
    try {
        const script = await Script.findByIdAndDelete(req.params.id);
        if (!script) return res.status(404).json({ message: 'Script not found' });
        res.status(200).json({ message: 'Script deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
