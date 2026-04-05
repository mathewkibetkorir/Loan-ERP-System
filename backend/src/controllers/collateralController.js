// collateralController.js

class CollateralController {
    constructor() {
        this.collaterals = [];
    }

    registerCollateral(collateral) {
        this.collaterals.push(collateral);
        return collateral;
    }

    getAllCollaterals() {
        return this.collaterals;
    }

    getCollateralById(id) {
        return this.collaterals.find(c => c.id === id);
    }

    updateCollateral(id, updatedCollateral) {
        const index = this.collaterals.findIndex(c => c.id === id);
        if (index !== -1) {
            this.collaterals[index] = { ...this.collaterals[index], ...updatedCollateral };
            return this.collaterals[index];
        }
        return null;
    }

    deleteCollateral(id) {
        const index = this.collaterals.findIndex(c => c.id === id);
        if (index !== -1) {
            return this.collaterals.splice(index, 1);
        }
        return null;
    }
}

module.exports = new CollateralController();