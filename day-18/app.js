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
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

/*** L1 ***/

// Q1
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        cgc("L1 Q1", data.map(item => [item.name, item.capital, item.languages.map(i => i.name), item.population, item.area]))
    })
    .catch(error => console.error(error))

/*** L2 ***/

// Q1
const fetchData = async () => {
    try {
      const response = await fetch(catsAPI)
      const cats = await response.json()
      return cats.map(item => item.name)
    } catch (err) {
      console.error(err)
    }
}

cgc("L2 Q1", fetchData())

/*** L3 ***/

// Q1
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        cgc("L3 Q1", data.map(item => {
            return item.weight.metric.split('-').reduce((acc, cur) => acc + Number(cur), 0) / 2
        }))
    })
    .catch(error => console.error(error))

// Q2
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const arr =  data.map(item => [item.name, item.area]).sort((a, b) => b[1] - a[1])
        const array = []

        for (let i = 0; i < 10; i++) {
            array.push(arr[i])
        }

        cgc("L3 Q2", array)
    })
    .catch(error => console.error(error))

// Q3
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        
        const allLangs = data.map(item => item.languages.map(item => item.name)).join(',').split(',').sort((a, b) => a.localeCompare(b))

        const langs = new Set(allLangs)

        cgc("L3 Q3", langs, langs.size)

    })
    .catch(error => console.error(error))