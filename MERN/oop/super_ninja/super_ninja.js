class Ninja{
    constructor(nameInput){
        this.name = nameInput;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
}

    sayName(){
        console.log(`Name: ${this.name}`)
    }

    showStats(){
        console.log(`Ninja info: \n Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n strength: ${this.strength}`)
    }

    drinkSake(){
        this.health +=10
    }
}


// const ninja1 = new Ninja("Hyabusa", 100);
// ninja1.sayName();
// ninja1.showStats();



class Sensei extends Ninja{
    constructor(nameInput, wisdom){
        super(nameInput)
        this.wisdom = 10
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
