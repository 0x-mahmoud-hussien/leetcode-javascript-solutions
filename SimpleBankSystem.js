
// https://leetcode.com/problems/simple-bank-system?envType=daily-question&envId=2025-10-26
var Bank = function(balance) {

    this.balance = balance;
};


Bank.prototype.transfer = function(account1, account2, money) {
 
    if (account1 < 1 || account1 > this.balance.length ||
        account2 < 1 || account2 > this.balance.length)
        return false;

    if (this.balance[account1 - 1] < money)
        return false;

    this.balance[account1 - 1] -= money;
    this.balance[account2 - 1] += money;

    return true;
};

Bank.prototype.deposit = function(account, money) {

    if (account < 1 || account > this.balance.length)
        return false;

    this.balance[account - 1] += money;

    return true;
};

Bank.prototype.withdraw = function(account, money) {
   
    if (account < 1 || account > this.balance.length)
        return false;

    if (this.balance[account - 1] < money)
        return false;

    this.balance[account - 1] -= money;

    return true;
};


let bank = new Bank([10, 100, 20, 50, 30]);

console.log(bank.withdraw(3, 10));    
console.log(bank.transfer(5, 1, 20)); 
console.log(bank.deposit(5, 20));     
console.log(bank.transfer(3, 4, 15)); 
console.log(bank.withdraw(10, 50));   

console.log(bank.balance); 