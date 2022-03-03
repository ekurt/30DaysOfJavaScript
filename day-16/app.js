/*** Helpers ***/

// consoleGroupCollapsed
const cgc = (title, ...prints) => {
    console.groupCollapsed(title)
    for (let print of prints) {
        console.log(print)
    }
    console.groupEnd()
}

/*** Requirements ***/

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

/*** L1 ***/

// Q1
let _skills = JSON.stringify(skills, undefined, 2)

cgc("L1 Q1", _skills)

// Q2
let _age = JSON.stringify(age, undefined, 2)

cgc("L1 Q2", _age)

// Q3
let _isMarried = JSON.stringify(isMarried, undefined, 2)

cgc("L1 Q3", _isMarried)

// Q4
let _student = JSON.stringify(student, undefined, 2)

cgc("L1 Q4", _student)

/*** L2 ***/

// Q1
_student = JSON.stringify(student, ["firstName", "lastName", "skills"], 2)

cgc("L2 Q1", _student)

/*** L3 ***/

// Q1
let _txt = JSON.parse(txt)

cgc("L3 Q1", _txt)

// Q2
const getHasMaxSkills = (obj) => {
    let count = 0,
        user = ""

    for (let [key, val] of Object.entries(obj)) {
        if (count < val.skills.length) {
            count = val.skills.length
            user = key
        }
    }
    return user
}

cgc("L3 Q2", getHasMaxSkills(_txt))