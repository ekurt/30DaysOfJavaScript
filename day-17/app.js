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