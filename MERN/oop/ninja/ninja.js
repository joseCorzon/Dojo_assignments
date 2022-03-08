class Ninja{
    constructor(nameInput, healthInput){
        this.name = nameInput;
        this.health = healthInput;
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


const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
