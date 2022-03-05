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