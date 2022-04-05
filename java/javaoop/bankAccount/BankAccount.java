public class BankAccount {
    private Double checkingBalance;
    private Double savingsBalance;
    private static Integer created_accounts = 0;
    private static Integer total_money = 0;

    public BankAccount(){
        checkingBalance=0.0D;
        savingsBalance=0.0D;
    }


    public Double Withdraw(Double amountToRemove, Boolean isChecking) {
        if (isChecking) {
            if (checkingBalance > amountToRemove) {
                checkingBalance -= amountToRemove;
                System.out.println("this is your checking balance after withdraw" + checkingBalance);

                return amountToRemove;
            }
            return 0D;
        } else {
            if (savingsBalance > amountToRemove) {
                savingsBalance -= amountToRemove;
                System.out.println("this is your savings balance after withdraw" + savingsBalance);

                return amountToRemove;
            }
            return 0D;
        }
    }


    public void Deposit(Double amountToAdd, Boolean isChecking) {
        if (isChecking) {
            checkingBalance += amountToAdd;
            System.out.println("this is your checking balance" + checkingBalance);
        } else {
            savingsBalance += amountToAdd;
            System.out.println("this is your savings balance" + savingsBalance);

        }
    }
    

    public Double GetCheckingBalance() {
        return checkingBalance;
    }

    public Double GetSavingsBalance() {
        return savingsBalance;
    }

    public static Integer TotalAccounts() {
        return created_accounts;
    }

    public Double TotalMoney() {
        System.out.println("this is your total" + checkingBalance + savingsBalance);
        return checkingBalance + savingsBalance;
        

    }
};
