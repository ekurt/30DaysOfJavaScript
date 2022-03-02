/*** Helpers ***/

// consoleGroupCollapsed
const cgc = (title, ...prints) => {
    console.groupCollapsed(title)
    for (let print of prints) {
        console.log(print)
    }
    console.groupEnd()
}

/*** L1 ***/

// Q1
class Animal {
    constructor(name, age, color, legs, sound) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    getInfo() {
        return `Name: ${this.name} \nAge: ${this.age} \nColor: ${this.color} \nLegs: ${this.legs}`
    }

    get getSound() {
        return this.sound
    }

    set setSound(sound) {
        this.sound = sound
    }
}

const animal = new Animal("Nymp", 3, "Gold", 4)

cgc("L1 Q1", animal)

// Q2
const cat = new Animal("Dombili", 2, "White", 4)
cat.setSound = "Meoww"

const dog = new Animal("Nymp", 3, "Gold", 4)
dog.setSound = "Haow Haow!"

cgc("L1 Q2", cat, cat.getInfo(), cat.getSound, dog, dog.getInfo(), dog.getSound)

/*** L2 ***/

// Q1
class Cat extends Animal {
    constructor(name, age, color, legs, sound) {
        super(name, age, color, legs)
        this.sound = sound
    }
}

const dombili = new Cat("Dombili", 1, "Black & White", 4, "Meoww!")

cgc("L2 Q1", dombili)