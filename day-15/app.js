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

cgc("L1 Q2", 
    cat, 
    cat.getInfo(), 
    cat.getSound, 
    dog, 
    dog.getInfo(), 
    dog.getSound
)

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

/*** L3 ***/

// Q1
class Statistics {
    constructor(data) {
        this.data = data
    }
    count() {
        return this.data.length
    }
    sum() {
        return this.data.reduce((acc, cur) => acc += cur)
    }
    min() {
        return Math.min(...this.data)
    }
    max() {
        return Math.max(...this.data)
    }
    range() {
        return this.max() - this.min()
    }
    mean() {
        return Math.round(this.sum() / this.count())
    }
    median() {
        let val = Math.round((this.count() - 1) / 2)
        return this.data.sort((a, b) => a - b)[val]
    }
    mode() {
        this.data.sort((a, b) => a - b)
        let count = 1, repeat = 1, dump = "", records = []

        for (let i = 0; i < this.count(); i++) {

            dump = this.data[i]

            if (dump == this.data[i + 1]) {
                repeat += 1
            } else {
                records.push({
                    mode: dump,
                    count: repeat
                })
                repeat = 1
            }

        }

        return records.sort((a, b) => b.count - a.count).slice(0, 1)[0]
    }
    var() {
        let mean = this.mean()

        return Math.ceil((this.data.reduce((acc, cur) => acc += (cur - mean) ** 2) / this.count()) * 2) / 2
    }
    std() {
        return Math.sqrt(this.var()).toFixed(1)
    }
    freqDist() {
        // I dont know how to calculate frequency distribution
    }         
    describe() {
        return `Count: ${this.count()}
Sum: ${this.sum()}
Min: ${this.min()}
Max: ${this.max()}
Range: ${this.range()}
Mean: ${this.mean()}
Median: ${this.median()}
Mode: ${this.mode()}
Variance: ${this.var()}
Standard Deviation: ${this.std()}
Frequency Distribution: ${this.freqDist()}`
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = new Statistics(ages)

cgc("L3 Q1",
    'Count: ' + statistics.count(),
    'Sum: ' + statistics.sum(),
    'Min: ' + statistics.min(),
    'Max: ' + statistics.max(),
    'Range: ' + statistics.range(),
    'Mean: ' + statistics.mean(),
    'Median: ' + statistics.median(),
    'Mode: ' + statistics.mode(),
    'Variance: ' + statistics.var(),
    'Standard Deviation: ' + statistics.std(),
    'Variance: ' + statistics.var(),
    'Frequency Distribution: ' + statistics.freqDist(),
    statistics.describe()
)

// Q2
class PersonAccount {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = [0]
        this.expenses = [0]
    }
    totalIncome() {
        let totalIncome = 0

        for (let income of this.incomes) {
            totalIncome += income
        }

        return totalIncome
    }
    totalExpense() {
        let totalExpense = 0

        for (let expense of this.expenses) {
            totalExpense += expense
        }

        return totalExpense
    }
    accountInfo() {
        return `First Name: ${this.firstName} \nLast Name: ${this.lastName} \nTotal Income: ${this.totalIncome()} \nTotal Expense: ${this.totalExpense()} \nAccount Balance: ${this.accountBalance()}`
    }
    addIncome(amount) {
        this.incomes.push(amount)
        return `$${amount} added to incomes`
    }
    addExpense(amount) {
        this.expenses.push(amount)
        return `$${amount} added to expenses`
    }
    accountBalance() {
        let incomes = this.totalIncome(),
            expenses = this.totalExpense(),
            balance = incomes - expenses

        return balance                
    }
}

const personAccount = new PersonAccount("Emre", "Kurt")

cgc("L3 Q2",
    personAccount,
    personAccount.addIncome(50),
    personAccount.addIncome(500),
    personAccount.addIncome(230),
    personAccount.addExpense(100),
    personAccount.addExpense(115),
    personAccount.addExpense(15),
    personAccount.accountInfo()
)