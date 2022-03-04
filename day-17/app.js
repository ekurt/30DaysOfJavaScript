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
localStorage.setItem("firstName", "Emre")
localStorage.setItem("lastName", "Kurt")
localStorage.setItem("age", 26)
localStorage.setItem("country", "Turkey")
localStorage.setItem("city", "Antalya")

cgc("L1 Q1", localStorage)

/*** L2 ***/

// Q1
const student = {
    firstName: 'Emre',
    lastName: 'Kurt',
    age: 26,
    isMarried: false,
    skills: ['HTML', 'CSS', 'JS', 'React','Node', 'PHP',]
}

const studentJSON = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', studentJSON)

cgc("L2 Q1", localStorage)

/*** L3 ***/

// Q1
const personAccount = {
    firstName: "Emre",
    lastName: "Kurt",
    incomes: [0],
    expenses: [0],
    totalIncome: function() {
        let totalIncome = 0

        for (let income of this.incomes) {
            totalIncome += income
        }

        return totalIncome
    },
    totalExpense: function() {
        let totalExpense = 0

        for (let expense of this.expenses) {
            totalExpense += expense
        }

        return totalExpense
    },
    accountInfo: function() {
        return `First Name: ${this.firstName} \nLast Name: ${this.lastName} \nTotal Income: ${this.totalIncome()} \nTotal Expense: ${this.totalExpense()} \nAccount Balance: ${this.accountBalance()}`
    },
    addIncome: function(amount) {
        this.incomes.push(amount)
        return `$${amount} added to incomes`
    },
    addExpense: function(amount) {
        this.expenses.push(amount)
        return `$${amount} added to expenses`
    },
    accountBalance: function() {
        let incomes = this.totalIncome(),
            expenses = this.totalExpense(),
            balance = incomes - expenses

        return balance                
    }
}

personAccount.addIncome(50)
personAccount.addIncome(500)
personAccount.addIncome(230)
personAccount.addExpense(100)
personAccount.addExpense(115)
personAccount.addExpense(15)

const personAccountJSON = JSON.stringify(personAccount, undefined, 4)
localStorage.setItem('personAccount', personAccountJSON)

cgc("L3 Q1", localStorage)