public class Bat extends Mammals {
    public Integer energyLevel = 300;

    public Integer eatHuman() {
        energyLevel = energyLevel += 25;
        System.out.println("the bat eats the human");
        return energyLevel;
    }

    public Integer attackTown() {
        energyLevel = energyLevel -= 100;
        System.out.println("the bat attacks the town");
        return energyLevel;
    }

    public Integer fly() {
        energyLevel -= 50;
        System.out.println("the bat flaps its wings");
        return energyLevel;
    }
}