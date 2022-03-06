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