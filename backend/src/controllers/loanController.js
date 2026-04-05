'use strict';

class LoanController {
    async createLoan(req, res) {
        // Logic to create a loan
        res.send('Loan created successfully');
    }

    async approveLoan(req, res) {
        // Logic to approve a loan
        res.send('Loan approved successfully');
    }

    async disburseLoan(req, res) {
        // Logic to disburse a loan
        res.send('Loan disbursed successfully');
    }
}

module.exports = new LoanController();
