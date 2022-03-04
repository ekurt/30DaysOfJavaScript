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