public class Gorilla extends Mammals {

    public Integer throwSomething() {
        System.out.println("throws something");
        energyLevel -= 5;
        return energyLevel;

    }

    public Integer eatBanana() {
        System.out.println("eats a banana");
        energyLevel += 10;
        return energyLevel;
    }

    public Integer climbTree() {
        System.out.println("climbs a tree");
        energyLevel -= 10;
        return energyLevel;

    }
}
