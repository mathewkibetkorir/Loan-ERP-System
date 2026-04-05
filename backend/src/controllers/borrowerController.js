'use strict';

const Borrower = require('../models/borrower');

// Create a new borrower
exports.createBorrower = async (req, res) => {
    try {
        const borrower = new Borrower(req.body);
        await borrower.save();
        res.status(201).json(borrower);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all borrowers
exports.getAllBorrowers = async (req, res) => {
    try {
        const borrowers = await Borrower.find();
        res.status(200).json(borrowers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a borrower by ID
exports.getBorrowerById = async (req, res) => {
    try {
        const borrower = await Borrower.findById(req.params.id);
        if (!borrower) return res.status(404).json({ message: 'Borrower not found' });
        res.status(200).json(borrower);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a borrower by ID
exports.updateBorrower = async (req, res) => {
    try {
        const borrower = await Borrower.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!borrower) return res.status(404).json({ message: 'Borrower not found' });
        res.status(200).json(borrower);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a borrower by ID
exports.deleteBorrower = async (req, res) => {
    try {
        const borrower = await Borrower.findByIdAndDelete(req.params.id);
        if (!borrower) return res.status(404).json({ message: 'Borrower not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
