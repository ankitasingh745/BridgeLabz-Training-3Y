class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Deposit amount must be a positive number");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Withdrawal amount must be a positive number");
    }
    if (amount > this.#balance) {
      throw new Error(`Insufficient balance. Available: ${this.#balance}, requested: ${amount}`);
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
console.log("Initial balance:", account.getBalance());

account.deposit(500);
account.deposit(250);
console.log("After deposits (500 + 250):", account.getBalance());

account.withdraw(300);
console.log("After withdrawing 300:", account.getBalance());

[5000, -100].forEach((amt) => {
  try {
    account.withdraw(amt);
  } catch (err) {
    console.log(`Withdraw ${amt} failed: ${err.message}`);
  }
});

console.log("Direct access account.balance:", account.balance);
console.log("Final balance:", account.getBalance());