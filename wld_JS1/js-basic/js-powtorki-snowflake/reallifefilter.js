var people = [
    {name: "Mateusz", gender: "male", team: null},
    {name: "Waldek", gender: "male", team: 'FitCode'},
    {name: "Tomek", gender: "male", team: 'FitCode'},
    {name: "Natalia", gender: "female", team: 'FitCode'},
    {name: "Wojtek", gender: "male", team: 'FitCode'},
    {name: "Ola", gender: "female", team: 'WeBees'},
    {name: "Kasia", gender: "female", team: 'WeBees'},
    {name: "Paweł", gender: "male", team: 'WeBees'},
    {name: "Grzesiek", gender: "male", team: 'WeBees'}
]

// renders passed array of object containing minimum one property name
function renderPeople(people){
    var container = document.querySelector('div#container')
    container.innerHTML = ''
    people.forEach(function (person) {
        var personDiv = document.createElement('div')
        personDiv.innerHTML = person.name
        container.appendChild(personDiv)
    })
    document.body.appendChild(container)
}

// finds input
// add evend listener that
// listens every input change
// and re-renders array
document.querySelector('input')
    .addEventListener('input', function(event){
        var query = event.target.value
        var filteredArray = people.filter(function (person) {
            return person.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })

        renderPeople(filteredArray)
    })

renderPeople(people)