function makeBankAccount() {
  // this one is private
  let balance = 0;
  // a "getter", made public via the returned object below
  function getBalance() {
    // getBalance a accès à balance par le mécanisme des closures
    return balance;
  }
  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    // setBalance a accès à balance par le mécanisme des closures
    balance = amount;
  }
  return {
    getBalance: getBalance,
    setBalance: setBalance
  };
}

const account = makeBankAccount();
account.setBalance(100);