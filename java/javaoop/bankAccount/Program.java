public class Program {
    public static void main(String[] args) {
        BankAccount rob=new BankAccount();
        BankAccount chris=new BankAccount();
        BankAccount kelvin=new BankAccount();

        rob.Deposit(300.0, true);
        rob.Withdraw(400.0, true);
        rob.TotalMoney();
    }

}
