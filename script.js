
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => {
            console.log('Resposta da requisição:', response);
            return response.json();
        })
        .then((result) => {
            console.log('Resultado da busca:', result);
            displayResults(result);
        })
        .catch(error => {
            console.error('Erro ao realizar a requisição', error);
        });
    }


function displayResults(result) {
    resultPlaylist.classList.add('hidden')
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name_exibition;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    } else {
        requestApi(searchTerm);
    }
})