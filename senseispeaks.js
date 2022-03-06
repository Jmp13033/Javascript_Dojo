class Sensei 
{
    constructor(name, age, abilty) 
    {
        this.name = name
        this.age = age
        this.abilty = abilty
        

    }
    speaksWisdom() 
    {
        console.log("What you lean in one month i learn in 2 ")


    }
    

}

class Ninja extends Sensei  
{
    constructor(name,age, ability) 
    {
        super(name, age, ability)
        this.widsom = 10 
        


    }
    showstats() 
    {
        return `${this.name}, ${this.abilty}, ${this.age}, ${this.widsom},`

    }
    



}

const ninja1 = new Ninja("jared", 88, "being great")

ninja1.speaksWisdom()

console.log(ninja1.showstats())
