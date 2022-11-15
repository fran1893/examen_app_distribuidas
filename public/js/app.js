const divFrases = document.getElementById('frases');
const URL = 'http://localhost:4000/scraper';

fetch(URL)
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(frase => {
            const names = '<h2 style="color:white">' + frase.nombreAutor + '</h2>';
            const frases = '<p>' + frase.fraseAutor + '</p>'
            const links = '<a href="' + frase.linkAutor + '">Para saber mas sobre el autor Click aquí</a>'
            const divPorAutores = '<div class="containerFrases">' + names + frases + links + '</div>'

            divFrases.insertAdjacentHTML('beforeend', divPorAutores)

        });
    })
    .catch(err => console.log(err));