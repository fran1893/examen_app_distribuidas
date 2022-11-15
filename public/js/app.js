const divFrases = document.getElementById('frases');
const URL = 'http://localhost:4000/scraper';

fetch(URL)
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(frase => {
            const names = '<h2>' + frase.nombreAutor + '</h2>';
            const frases = '<p style="color:blue">'+frase.fraseAutor +'</p>'
            const links = '<a href="'+ frase.linkAutor +'">Para saber mas sobre el autor Click aquí</a>'

            divFrases.insertAdjacentHTML('beforeend', names)
            divFrases.insertAdjacentHTML('beforeend', frases)
            divFrases.insertAdjacentHTML('beforeend', links)

        });
    })
    .catch(err => console.log(err));