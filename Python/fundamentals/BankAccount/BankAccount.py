class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance):
        # your code here! (remember, instance attributes go here)
        self.balance = balance
        self.int_rate = int_rate
        # don't worry about user info here; we'll involve the User class soon

    def deposit(self, amount):
        if type(amount) == int:
            self.balance += amount
        else:
            print("can not deposit")
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        return self

    def display_account_info(self):
        print(self.balance, self.int_rate)
        return self

    def yield_interest(self):
        self.balance += (self.balance * 12 * self.int_rate)/100
        return self


account1 = BankAccount(.03, 400)
account2 = BankAccount(.04, 9000)

account1.deposit("word").deposit(300).deposit(
    900).withdraw(200).display_account_info()
account2.deposit(1000).deposit(300).withdraw(200).withdraw(
    700).withdraw(200).withdraw(600).display_account_info()
