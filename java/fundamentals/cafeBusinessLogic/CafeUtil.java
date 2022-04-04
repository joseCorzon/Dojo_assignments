import java.util.ArrayList;

public class CafeUtil {
    public Integer getStreakGoal(int numWeeks) {
    int j = 0;
    for (int i = 0; i <= numWeeks; i++){
        j+=i;
    }

    System.out.println(j);
    return j;
    
    }

    public double getOrderTotal(double[] prices){
        double sum = 0;
        for (double price:prices){
            sum = sum + price;
        }
        return sum;
    }

    public void addCustomer(ArrayList<String> customers){
        System.out.println("Please enter your Name:");
        String userName = System.console().readLine();
        System.out.println("Hello, " + userName);
        System.out.println("There are" + customers.size() + "people in front of you");
        customers.add(userName);
        System.out.println(customers);



    }



}