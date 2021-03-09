const account = {
  name: "Alex",
  balance: 2000 ,
  credit: 0, 
  describe: function(){
    return `${this.name} has ${this.balance} in their account with ${this.credit} credit `
  },
};
console.log(account.describe());