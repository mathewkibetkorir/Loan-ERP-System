// repaymentController.js

class RepaymentController {
    constructor() {
        // Initialize properties for tracking repayments
        this.repayments = [];
    }

    // Method to process a new repayment
    processRepayment(loanId, amount) {
        const repayment = {
            loanId, 
            amount, 
            date: new Date().toISOString()
        };
        this.repayments.push(repayment);
        return repayment;
    }

    // Method to get repayment tracking
    getRepayments() {
        return this.repayments;
    }
}

// Export the RepaymentController for use in other parts of the application
module.exports = new RepaymentController();