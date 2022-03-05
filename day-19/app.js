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
function helloWord() {
    let txt = "hello"

    function inner() {
        txt += " world"
        return txt
    }

    return inner
}

const hi = helloWord()

cgc("L1 Q1", hi())

/*** L2 ***/

// Q1
function total(coast) {
    let total = coast

    function kdv() {
        total = coast * 0.18

        return total
    }

    function otv() {
        total = coast * 0.90

        return total
    }

    return {
        kdv: kdv(),
        otv: otv()
    }
}

const account = total(100)

cgc("L2 Q1", account.kdv, account.otv)

/*** L3 ***/

// Q1
function personAccount(f, l) {
    let firstName = f,
        lastName = l,
        totalIncomes = 0,
        totalExpenses = 0,
        accountBalances = 0

    const incomes = [0]
    const expenses = [0]

    function totalIncome() {
        for (let income of incomes) {
            totalIncomes += income
        }
        return totalIncomes
    }

    function totalExpense() {
        for (let expense of expenses) {
            totalExpenses += expense
        }
        return totalExpenses
    }

    function accountBalance() {
        totalExpenses = totalExpense()
        totalIncomes = totalIncome()

        return accountBalances = totalIncomes - totalExpenses       
    }

    function addIncome(amount) {
        incomes.push(amount)
    }

    function addExpense(amount) {
        expenses.push(amount)
    }

    function accountInfo() {
        return `First name: ${firstName} \nLastname: ${lastName}`
    }

    return {
        totalIncome: totalIncome,
        totalExpense: totalExpense,
        accountBalance: accountBalance,
        addIncome: addIncome,
        addExpense: addExpense,
        accountInfo: accountInfo,
    }

}

const person = personAccount("Emre", "Kurt")

person.addExpense(100)
person.addExpense(10)
person.addExpense(30)
person.addIncome(300)
person.addIncome(10)
person.addIncome(85)

cgc("L3 Q1",
    "Total income: " + person.totalIncome(),
    "Total expense: " + person.totalExpense(),
    "Account balance: " + person.accountBalance(),
    person.accountInfo()
)