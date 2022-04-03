public class Cafe {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly ";
        String readyMessage = ", your order is ready ";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffee = 4.5;
        double latte = 5;
        double cappuccino = 3.5;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy ";
        String customer4 = "Noah ";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        System.out.println(pendingMessage + customer1);
        System.out.println(pendingMessage + customer4);
        if(isReadyOrder2){
            System.out.println(readyMessage + customer4 + displayTotalMessage + cappuccino);
        }
        System.out.println(displayTotalMessage + cappuccino*2);
        if(isReadyOrder2) {
            System.out.println(readyMessage + customer2);
        }
        System.out.println(customer3 + displayTotalMessage + -latte);

    }
}
