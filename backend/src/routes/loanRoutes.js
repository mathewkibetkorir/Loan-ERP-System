const express = require('express');
const router = express.Router();

// Mock database
let loans = [];

// GET all loans
router.get('/', (req, res) => {
    res.json(loans);
});

// GET loan by ID
router.get('/:id', (req, res) => {
    const loan = loans.find(l => l.id === parseInt(req.params.id));
    if (loan) {
        res.json(loan);
    } else {
        res.status(404).send('Loan not found');
    }
});

// POST create loan
router.post('/', (req, res) => {
    const newLoan = req.body;
    newLoan.id = loans.length + 1;
    loans.push(newLoan);
    res.status(201).json(newLoan);
});

// PUT update loan
router.put('/:id', (req, res) => {
    const loan = loans.find(l => l.id === parseInt(req.params.id));
    if (loan) {
        Object.assign(loan, req.body);
        res.json(loan);
    } else {
        res.status(404).send('Loan not found');
    }
});

// DELETE loan
router.delete('/:id', (req, res) => {
    loans = loans.filter(l => l.id !== parseInt(req.params.id));
    res.status(204).send();
});

// POST approve loan
router.post('/:id/approve', (req, res) => {
    const loan = loans.find(l => l.id === parseInt(req.params.id));
    if (loan) {
        loan.status = 'approved';
        res.json(loan);
    } else {
        res.status(404).send('Loan not found');
    }
});

// POST disburse loan
router.post('/:id/disburse', (req, res) => {
    const loan = loans.find(l => l.id === parseInt(req.params.id));
    if (loan) {
        loan.status = 'disbursed';
        res.json(loan);
    } else {
        res.status(404).send('Loan not found');
    }
});

module.exports = router;