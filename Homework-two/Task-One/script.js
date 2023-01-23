let firstButton = document.getElementById('btn')
let tableBody = document.getElementById('tbody')
let pageNumber = 1;
firstButton.addEventListener('click', () => {
    fetch(`https://swapi.dev/api/planets/?page=${pageNumber}`)
        .then(response => response.json())
        .then(parsedData => {
            creator(parsedData)
            let next = document.createElement('button')
            next.innerText = 'next 10';
            firstButton.after(next);

            next.addEventListener('click', () => {
                pageNumber++;
                fetch(`https://swapi.dev/api/planets/?page=${pageNumber}`)
                    .then(response => response.json())
                    .then(parsedData => {
                        tableBody.innerHTML = '';
                        creator(parsedData)

                        let previous = document.createElement('button');
                        previous.innerText = 'previous 10';
                        next.after(previous);
                        next.style.visibility = "hidden";

                        previous.addEventListener('click', () => {
                            pageNumber--;
                            fetch(`https://swapi.dev/api/planets/?page=${pageNumber}`)
                                .then(response => response.json())
                                .then(parsedData => {
                                    tableBody.innerHTML = '';
                                    next.style.visibility = "";
                                    previous.style.visibility = 'hidden'
                                    creator(parsedData)
                                })
                        })

                    })
            })
        })

}, { once: true });

function creator(parsedData) {
    for (let planets of parsedData.results) {
        let row = document.createElement('tr');
        row.innerHTML = `
<td>${planets.name}</td>
<td>${planets.population}</td>
<td>${planets.climate}</td>
<td>${planets.gravity}</td>
`
        tableBody.appendChild(row);
    }
}