class Ninja {
    constructor(name, health, strength) 
    {
        this.name = name
        this.health = health
        this.speed = 10
        this.height= 6
        this.strength = strength
        

    }
    sayName() 
    {
        console.log(`my name is ${this.name}`)


    }
    showstats() 
    {
        console.log(`stats are name: ${this.name}, strength: ${this.strength}, speed: ${this.speed}, health: ${this.health},`)

    }
    drinksaki() 
    {
        this.health += 10
        console.log("ninja drank saki ")


    }

}
const ninja1 = new Ninja("Ryu", 99, 5,8);
ninja1.sayName()

ninja1.showstats()
ninja1.drinksaki()