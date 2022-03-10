const header = document.querySelector('header')
const title = document.querySelector('h2')
const h3 = document.querySelectorAll('h3')
const total = document.querySelector('#total-countries')
const container = document.querySelector('.countries-container')
const wrapper = document.querySelector('.countries-wrapper')

header.style.textAlign = 'center'
header.style.fontFamily = 'Consolas'
title.style.fontSize = '90px'
title.style.fontWeight = 'bold'
title.style.margin = '0'
h3[0].style.margin = '0'
h3[0].style.fontWeight = 'normal'
h3[1].style.fontWeight = 'normal'
h3[1].style.fontSize = '16px'
h3[1].style.margin = '0'
total.style.margin = '0'
total.style.fontSize = '28px'
wrapper.style.width = '1000px'
wrapper.style.margin = '30px auto'
wrapper.style.display = 'flex'
wrapper.style.justifyContent = 'start'
wrapper.style.alignItems = 'center'
wrapper.style.flexWrap = 'wrap'
wrapper.style.color = 'black'
wrapper.style.fontSize = '18px'
wrapper.style.fontWeight = 'bold'

total.innerText = `Total Number of Countries: ${countries.length}`

let div

for (i = 0; i < countries.length; i++) {
    div = document.createElement('div')
    div.innerText = countries[i].toUpperCase()
    div.className = 'item'

    wrapper.appendChild(div)
}

const items = document.querySelectorAll('.item')

for (let item of items) {
    item.style.width = '150px'
    item.style.height = '150px'
    item.style.margin = '2px'
    item.style.display = 'flex'
    item.style.justifyContent = 'center'
    item.style.alignItems = 'center'
    item.style.textAlign = 'center'
    item.style.border = '2px solid lightgray'
}