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