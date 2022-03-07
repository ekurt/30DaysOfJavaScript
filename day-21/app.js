/*** L1 ***/

// Q1
const p1 = document.querySelector('p')

// Q2
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const p4 = document.querySelector('#p4')

// Q3
const allParagraphs = document.querySelectorAll('p')

// Q4
const array = []

for (let paragraph of allParagraphs) {
    array.push([paragraph.id, paragraph.innerText])
}

const map = new Map(array)

// Q5
p4.innerText = "Lorem ipsum dolar sit amed"

// Q6
p1.setAttribute('class', 'new-class')
allParagraphs[1].setAttribute('class', 'new-class')
p3.classList.add('title', 'new-class')

/*** L2 ***/

// Q1
p1.style.color = 'red'
p2.style.backgroundColor = 'blue'
p3.style.fontSize = '24px'
p4.style.border = '1px solid #ccc'

// Q2
allParagraphs.forEach((title, i) => {
    if (i % 2 === 0) {
      title.style.color = 'green'
    } else {
      title.style.color = 'red'
    }
})

// Q3
p1.innerHTML = '<h4>whats up</h4>'
p2.className = 'no-way'
p3.id = 'good-job'

/*** L3 ***/

// Q1
function rgbColorGenerator() {
    const array = []
    for (let i = 0; i < 3; i++) {
        array.push(Math.round(Math.random() * 255))
    }
    return `rgb(${array.join(',')})`
}

function showDateTime() {
            
    const date = new Date
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let day = date.getDate().toString()
    day = day.length == 1 ? `0${date.getDate()}` : date.getDate()
    let month = date.getMonth()
    month = months[month]
    let year = date.getFullYear()
    let hour = date.getHours().toString()
    hour = hour.length == 1 ? `0${date.getHours()}` : date.getHours()
    let minute = date.getMinutes().toString()
    minute = minute.length == 1 ? `0${date.getMinutes()}` : date.getMinutes()
    let second = date.getSeconds().toString()
    second = second.length == 1 ? `0${date.getSeconds()}` : date.getSeconds()

    return `${month} ${day}, ${year} ${hour}:${minute}:${second}`
}
 
let div = document.querySelector('div')
div.style.margin = "50px auto"
div.style.width = "600px"
div.style.textAlign = "center"

let h1 = document.querySelector('h1')
let sp = h1.innerText.split(' ')
sp[sp.length -1] = `<i style='font-size:70px; color: ${rgbColorGenerator()}'>2020</i>`
h1.innerHTML = sp.join(' ')

setInterval(() => {
    sp[sp.length -1] = `<i style='font-size:70px; color: ${rgbColorGenerator()}'>2020</i>`
    h1.innerHTML = sp.join(' ')
    return h1
}, 1000);

let h2 = document.querySelector('h2')
h2.style.fontSize = '20px'
h2.style.textDecoration = 'underline'
h2.style.color = 'gray'
h2.style.marginBottom = '25px'

let ul = document.querySelector('ul')
ul.style.textAlign = 'left'
ul.style.listStyleType = 'none'
ul.style.marginTop = '25px'

let allLi = document.querySelectorAll('li')

for (let li of allLi) {
    li.style.padding = '15px'
    li.style.marginBottom = '2px'
    li.style.backgroundColor = 'red'
}

allLi[0].style.background = 'green'
allLi[1].style.background = 'yellow'

let h3 = document.querySelector('span')
h3.style.background = rgbColorGenerator()
h3.innerText = showDateTime()
h3.style.padding = '15px'

setInterval(() => {
    h3.style.background = rgbColorGenerator()
    h3.innerText = showDateTime()
    return h3
}, 1000);