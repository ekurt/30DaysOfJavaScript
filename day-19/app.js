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

console.log(hi())