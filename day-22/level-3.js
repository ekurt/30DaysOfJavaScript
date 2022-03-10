// functions
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

// variables
const wrapper = document.querySelector('.wrapper')
const mainTitle = document.createElement('h1')

// styling
wrapper.style.margin = '10px auto'
wrapper.style.width = '1000px'
wrapper.style.textAlign = 'center'
wrapper.style.backgroundColor = 'red'

// functionality
mainTitle.innerHTML = `<h1>${data.challengeTitle} in <span class="date">${data.challengeYear}</span></h1>`

wrapper.appendChild(mainTitle)

const span = document.querySelector('.date')
span.style.color = rgbColorGenerator()
span.style.fontSize = '70px'

setInterval(() => {

}, 1000);