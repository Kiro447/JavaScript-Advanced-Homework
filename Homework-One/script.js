let btn = document.getElementById('btn');
let select = document.getElementById('select');
let h1 = document.getElementById('name');
let table = document.getElementById('data');

btn.addEventListener('click', () => {
    fetch("https://swapi.dev/api/people/")
        .then((data) => {
            data.json()
                .then((parsedData) => {
                    console.log(parsedData.results);
                    for (let i = 0; i < parsedData.results.length; i++) {
                        let option = document.createElement('option');
                        option.value = parsedData.results[i].name;
                        option.innerText = parsedData.results[i].name;
                        select.appendChild(option);

                    }
                    select.addEventListener('change', event => {
                        const optionSelect = event.target.value;
                        let optionData;
                        for (let i = 0; i < parsedData.results.length; i++) {
                            if (parsedData.results[i].name === optionSelect) {
                                optionData = parsedData.results[i];
                                if (!h1) {
                                    h1 = document.createElement('h1');
                                    h1.id = 'name';
                                    btn.before(h1);

                                }
                                h1.innerText = optionData.name;
                                if (!table) {
                                    table = document.createElement('table');
                                    table.id = 'data';
                                    select.after(table);
                                    let firstRow = document.createElement('th')
                                    firstRow.innerHTML = `
            <td>Height</td>
            <td>Weight</td>
            <td>Eye Color</td>
            <td>Hair Color</td>
            `
                                    table.appendChild(firstRow)
                                    let secondRow = document.createElement('tr');
                                    firstRow.appendChild(secondRow)
                                }
                                else {
                                    table.innerHTML = ""
                                    let firstRow = document.createElement('th')
                                    firstRow.innerHTML = `
            <td>Height</td>
            <td>Weight</td>
            <td>Eye Color</td>
            <td>Hair Color</td>
            `
                                    table.appendChild(firstRow)
                                    let secondRow = document.createElement('tr');
                                    firstRow.appendChild(secondRow)
                                    secondRow.innerHTML = `
            <td>${optionData.mass}</td>
            <td>${optionData.height}</td>
            <td style="color: ${optionData.eye_color}">${optionData.eye_color}</td>
            <td>${optionData.hair_color}</td>
        `
                                }

                            }
                        }
                    })

                })
        })
})



