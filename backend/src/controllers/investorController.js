// investorController.js

class InvestorController {
    constructor(investorService) {
        this.investorService = investorService;
    }

    // Create a new investor
    async createInvestor(req, res) {
        try {
            const investorData = req.body;
            const newInvestor = await this.investorService.create(investorData);
            res.status(201).json(newInvestor);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while creating investor.' });
        }
    }

    // Read investor details
    async getInvestor(req, res) {
        try {
            const investorId = req.params.id;
            const investor = await this.investorService.getById(investorId);
            if (!investor) {
                return res.status(404).json({ error: 'Investor not found.' });
            }
            res.status(200).json(investor);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching investor.' });
        }
    }

    // Update an investor
    async updateInvestor(req, res) {
        try {
            const investorId = req.params.id;
            const investorData = req.body;
            const updatedInvestor = await this.investorService.update(investorId, investorData);
            if (!updatedInvestor) {
                return res.status(404).json({ error: 'Investor not found.' });
            }
            res.status(200).json(updatedInvestor);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating investor.' });
        }
    }

    // Delete an investor
    async deleteInvestor(req, res) {
        try {
            const investorId = req.params.id;
            const result = await this.investorService.delete(investorId);
            if (!result) {
                return res.status(404).json({ error: 'Investor not found.' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while deleting investor.' });
        }
    }

    // Track investments by investor
    async getInvestorInvestments(req, res) {
        try {
            const investorId = req.params.id;
            const investments = await this.investorService.getInvestments(investorId);
            if (!investments) {
                return res.status(404).json({ error: 'No investments found for this investor.' });
            }
            res.status(200).json(investments);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching investments.' });
        }
    }
}

module.exports = InvestorController;