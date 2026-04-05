// savingsController.js

class SavingsAccount {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive.');
        }
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive.');
        }
        if (amount > this.balance) {
            throw new Error('Insufficient funds.');
        }
        this.balance -= amount;
        return this.balance;
    }

    getBalance() {
        return this.balance;
    }
}

class Transaction {
    constructor(type, amount, date) {
        this.type = type; // 'deposit' or 'withdraw'
        this.amount = amount;
        this.date = date;
    }
}

class SavingsAccountManager {
    constructor() {
        this.accounts = {};
        this.transactions = [];
    }

    createAccount(accountNumber) {
        if (this.accounts[accountNumber]) {
            throw new Error('Account already exists.');
        }
        this.accounts[accountNumber] = new SavingsAccount(accountNumber);
    }

    deposit(accountNumber, amount) {
        const account = this.accounts[accountNumber];
        if (!account) {
            throw new Error('Account does not exist.');
        }
        const newBalance = account.deposit(amount);
        this.transactions.push(new Transaction('deposit', amount, new Date()));
        return newBalance;
    }

    withdraw(accountNumber, amount) {
        const account = this.accounts[accountNumber];
        if (!account) {
            throw new Error('Account does not exist.');
        }
        const newBalance = account.withdraw(amount);
        this.transactions.push(new Transaction('withdraw', amount, new Date()));
        return newBalance;
    }

    getAccountBalance(accountNumber) {
        const account = this.accounts[accountNumber];
        if (!account) {
            throw new Error('Account does not exist.');
        }
        return account.getBalance();
    }
}

module.exports = { SavingsAccountManager, SavingsAccount, Transaction };