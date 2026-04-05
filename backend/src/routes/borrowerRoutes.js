const express = require('express');
const router = express.Router();
const BorrowerController = require('../controllers/BorrowerController');

// Create a new borrower
router.post('/borrowers', BorrowerController.createBorrower);

// Get all borrowers
router.get('/borrowers', BorrowerController.getAllBorrowers);

// Get a specific borrower by ID
router.get('/borrowers/:id', BorrowerController.getBorrowerById);

// Update a borrower by ID
router.put('/borrowers/:id', BorrowerController.updateBorrower);

// Delete a borrower by ID
router.delete('/borrowers/:id', BorrowerController.deleteBorrower);

module.exports = router;