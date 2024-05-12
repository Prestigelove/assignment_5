
//
alert("Welcome to Simple ATM Money Transfer App");

// Define the bank accounts
let accountDetail1 = {
    name: "Isah Aishat, 7064671422",
    acccountNumber :7064671422,
    balance: 10000,
    bank :"opay",
    PIN : 4444
  };
  
  let accountDetail2 = {
    name: "Ozavize Onimisi, 3112788187",
    accountNumber: 3112788187,
    balance: 5000
  };
  
  // Define the transfer function
  function transferMoney() {
    
    // Prompt for the amount and account number for the transfer
    
    let recipientAccount = prompt("Enter the recipient's account number:");
            let transferAmount = parseFloat(prompt("Enter the amount to transfer:"));
            
    let amount = prompt("Enter the amount to transfer:");
    amount = parseFloat(amount);
  
    // Check if the amount is valid
    if (isNaN(amount) || amount <= 0) {
      alert("Invalid amount. Please try again.");
      return;
    }
  
    
    // Check if the sender has sufficient balance
    if (accountDetail1.balance < amount) {
      alert("Insufficient balance in " + accountDetail1.name);
      return;
    }
  
    // Confirm the transfer
    if (!confirm("Transfer " + amount + " from " + accountDetail1.name + " to " + accountDetail2.name + "?")) {
      return;
    }
  
    // Update the balances
    accountDetail1.balance -= amount;
    accountDetail2.balance += amount;
  
    // Display the updated balances
    alert("Transfer successful!\n" + accountDetail1.name + ": " + accountDetail1.balance + "\n" + accountDetail2.name + ": " + accountDetail2.balance);
  }
  
  
  transferMoney();


