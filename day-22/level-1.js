function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false; 
        if (num > 1) return true;
}

const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
const wrapper = document.querySelector('.wrapper')

document.body.style.textAlign = 'center'
h1.style.margin = '0'
h2.style.margin = '0'
h3.style.margin = '0'
h2.style.textDecoration = 'underline'
h3.style.textDecoration = 'underline'
h2.style.fontWeight = '400'
h3.style.fontWeight = '100'
wrapper.style.width = '650px'
wrapper.style.margin = '10px auto'
wrapper.style.display = 'flex'
wrapper.style.justifyContent = 'center'
wrapper.style.alignItems = 'center'
wrapper.style.flexWrap = 'wrap'
wrapper.style.color = 'white'
wrapper.style.fontSize = '30px'
wrapper.style.fontWeight = 'bold'

let div

for (i = 1; i <= 100; i++) {
    div = document.createElement('div')
    div.innerText = i
    div.className = 'item'

    if (i % 2 == 0) {
        div.style.background = '#21BF73'
    } else {
        div.style.background = '#FDDB3A'
    }

    if (isPrime(i)){
        div.style.background = '#FD5E53'
    }

    wrapper.appendChild(div)
}

const items = document.querySelectorAll('.item')

for (let item of items) {
    item.style.width = '120px'
    item.style.height = '50px'
    item.style.margin = '2px'
    item.style.display = 'flex'
    item.style.justifyContent = 'center'
    item.style.alignItems = 'center'
}