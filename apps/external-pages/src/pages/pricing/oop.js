class Account {
  AccountName = `Kingsley`;
  AccountBalance = 0.0;
  typeOfAccount = `Current`;

  // Methods (Action)
  checkAccountBalance() {
    return this.AccountBalance;
  }

  creditAccount(amount) {
    return this.AccountBalance + amount;
  }

  debitAccount(amount) {
    return this.AccountBalance - amount;
  }
}

// Not actual JavaScript syntax
class User extends Account {
  name = `Kingsley Solomon`;
  age = `50 years`;

  login(providedPassword) {
    // Login User
  }

  checkMessage() {
    // Check any new message
  }
}

class ATM {
  account = new Account();
  user = new User();


}


let acc = new Account()
