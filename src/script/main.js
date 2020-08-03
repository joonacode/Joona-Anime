import './../components/upcoming-list.js';
import '../components/season-list.js';
import './../components/season-archive.js';
import './../components/detail-item.js';
import './../components/character-list.js';
import '../components/anime-list.js';
import '../components/search-result.js';
import '../components/genre-result.js';

const main = () => {
    const baseurl = 'https://api.jikan.moe/v3/';
    const upcomingList = document.querySelector('upcoming-list');
    const seasonList = document.querySelector('season-list');
    const seasonArchive = document.querySelector('season-archive');
    const detailItem = document.querySelector('detail-item');
    const characterList = document.querySelector('character-list');
    const animeList = document.querySelector('anime-list');
    const searchResult = document.querySelector('search-result');
    const genreResult = document.querySelector('genre-result');
    const spinner = document.getElementById("spinner");

    const getUpcoming = async () => {
        try {
            spinner.removeAttribute('hidden');
            const response = await fetch(`${baseurl}top/anime/1/upcoming`);
            const responseJson = await response.json();
            upcomingList.upcoming = responseJson.top;
            spinner.setAttribute('hidden', '');
        } catch (error) {
            alert(error);
            spinner.setAttribute('hidden', '');
        }
    }
    const getSeasonList = async () => {
        try {
            spinner.removeAttribute('hidden');
            const response = await fetch(`${baseurl}season`);
            const responseJson = await response.json();
            const title = document.querySelector('#season-list');
            title.innerHTML = `<span class="season-name">${responseJson.season_name}</span> <span class="season-year">${responseJson.season_year}</span>`;
            seasonList.season = responseJson.anime.slice(0, 50);
            spinner.setAttribute('hidden', '');
        } catch (error) {
            alert(error);
            spinner.setAttribute('hidden', '');
        }
    }
    const getSeasonArchive = async () => {
        try {
            spinner.removeAttribute('hidden');
            const response = await fetch(`${baseurl}season/archive`);
            const responseJson = await response.json();
            const results = responseJson.archive;
            const resulte = results.slice(0, 5);
            seasonArchive.sesarcv = results;
            spinner.setAttribute('hidden', '');
        } catch (error) {
            alert(error);
            spinner.setAttribute('hidden', '');
        }
    }

    document.addEventListener('click', async function (e) {
        if (e.target.classList.contains('anime-detail')) {
            const id = e.target.dataset.id;
            try {
                spinner.removeAttribute('hidden');
                const response = await fetch(`${baseurl}anime/${id}`);
                const responseChar = await fetch(`${baseurl}anime/${id}/characters_staff`);
                const responseJson = await response.json();
                const responseCharJson = await responseChar.json();
                if (responseJson.status == "403") {
                    document.querySelector('detail-item').innerHTML = "";
                    document.querySelector('character-list').innerHTML = "";
                    document.querySelector('#detailModalLabel').innerHTML = "";
                    alert(responseJson.message);
                } else {
                    detailItem.detail = responseJson;
                }
                if (responseCharJson.status == "403") {
                    characterList.character = [];
                } else {
                    characterList.character = responseCharJson.characters.slice(0, 20);
                }
                spinner.setAttribute('hidden', '');
            } catch (error) {
                alert(error);
                spinner.setAttribute('hidden', '');
            }
        }
    })

    const getAnimeList = async () => {
        try {
            spinner.removeAttribute('hidden');
            const response = await fetch(`${baseurl}top/anime/1/movie`);
            const responseJson = await response.json();
            animeList.anime = responseJson.top;
            spinner.setAttribute('hidden', '');
        } catch (error) {
            alert(error);
            spinner.setAttribute('hidden', '');
        }
    }

    const filterTop = document.querySelector('.filter-top');
    filterTop.addEventListener('change', async function () {
        try {
            spinner.removeAttribute('hidden');
            const v = filterTop.value;
            const response = await fetch(`${baseurl}top/anime/1/${v}`);
            const responseJson = await response.json();
            animeList.anime = responseJson.top;
            const titleAnime = document.querySelector('.title-anime');
            titleAnime.innerHTML = v;
            titleAnime.style.textTransform = "capitalize";
            spinner.setAttribute('hidden', '');
        } catch (err) {
            alert(err);
            spinner.setAttribute('hidden', '');
        }
    })

    document.addEventListener('click', async function (e) {
        if (e.target.classList.contains('season-archive')) {
            const listGroupItem = document.querySelectorAll('.list-group-item button');
            listGroupItem.forEach(e => {
                e.classList.remove('active');
            })
            const year = e.target.dataset.year;
            const season = e.target.dataset.season;
            try {
                spinner.removeAttribute('hidden');
                const response = await fetch(`${baseurl}season/${year}/${season}`);
                const responseJson = await response.json();
                if (responseJson.status == "403") {
                    alert(responseJson.message);
                } else {
                    e.target.classList.add('active');
                    const title = document.querySelector('#season-list');
                    title.innerHTML = `${responseJson.season_name} ${responseJson.season_year}`;
                    seasonList.season = responseJson.anime.slice(0, 50);
                }
                spinner.setAttribute('hidden', '');
            } catch (error) {
                alert(error);
                spinner.setAttribute('hidden', '');
            }
        }
    })

    const btnSearch = document.querySelector('.btn-search');
    btnSearch.addEventListener('click', async function () {
        let query = document.querySelector('.search-input').value;
        try {
            spinner.removeAttribute('hidden');
            const response = await fetch(`${baseurl}search/anime?q=${query}&page=1`);
            const responseJson = await response.json();
            searchResult.srchresult = responseJson.results;
            document.querySelector('#search-title').innerHTML = `Results : ${query}(${responseJson.results.length}) <br><button class="btn btn-danger shadow mt-2 btn-sm btn-delete"><i class="fas fa-trash"></i> Delete</button>`;
            spinner.setAttribute('hidden', '');
        } catch (error) {
            alert(error);
            spinner.setAttribute('hidden', '');
        }
    })

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('btn-delete')) {
            document.querySelector('search-result').innerHTML = "";
            document.querySelector('#search-title').innerHTML = "";
            document.querySelector('.search-input').value = "";
        }
    })

    const genre = [{
            id: 1,
            name: 'Action'
        },
        {
            id: 2,
            name: 'Adventure'
        },
        {
            id: 3,
            name: 'Cars'
        },
        {
            id: 4,
            name: 'Comedy'
        },
        {
            id: 5,
            name: 'Dementia'
        },
        {
            id: 6,
            name: 'Demons'
        },
        {
            id: 7,
            name: 'Mystery'
        },
        {
            id: 8,
            name: 'Drama'
        },
        {
            id: 10,
            name: 'Fantasy'
        },
        {
            id: 11,
            name: 'Game'
        },
        {
            id: 13,
            name: 'Historical'
        },
        {
            id: 14,
            name: 'Horror'
        },
        {
            id: 15,
            name: 'Kids'
        },
        {
            id: 16,
            name: 'Magic'
        },
        {
            id: 17,
            name: 'Martial Arts'
        },
        {
            id: 18,
            name: 'Mecha'
        },
        {
            id: 19,
            name: 'Music'
        },
        {
            id: 20,
            name: 'Parody'
        },
        {
            id: 21,
            name: 'Samurai'
        },
        {
            id: 22,
            name: 'Romance'
        },
        {
            id: 23,
            name: 'School'
        },
        {
            id: 24,
            name: 'Sci Fi'
        },
        {
            id: 25,
            name: 'Shoujo'
        },
        {
            id: 26,
            name: 'Shoujo Ai'
        },
        {
            id: 27,
            name: 'Shounen'
        },
        {
            id: 28,
            name: 'Shounen Ai'
        },
        {
            id: 29,
            name: 'Space'
        },
        {
            id: 30,
            name: 'Sports'
        },
        {
            id: 31,
            name: 'Super Power'
        },
        {
            id: 32,
            name: 'Vampire'
        },
        {
            id: 36,
            name: 'Slice Of Life'
        },
        {
            id: 37,
            name: 'Supernatural'
        },
        {
            id: 38,
            name: 'Military'
        },
        {
            id: 39,
            name: 'Police'
        },
        {
            id: 40,
            name: 'Psychological'
        },
        {
            id: 41,
            name: 'Thriller'
        },
        {
            id: 42,
            name: 'Seinen'
        },
        {
            id: 43,
            name: 'Josei'
        },

    ];

    let genreList = '';
    const genreDiv = document.querySelector('.genre-list');
    genre.forEach(e => {
        genreList += `<button class="btn btn-secondary genre-anime shadow-sm btn-sm mb-1 mr-1" data-id="${e.id}" data-name="${e.name}">${e.name}</button>`;
        genreDiv.innerHTML = genreList;
    })

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('btn-delete-genre')) {
            document.querySelector('genre-result').innerHTML = "";
            document.querySelector('#genre-anime').innerHTML = "";
        }
    })

    document.addEventListener('click', async function (e) {
        if (e.target.classList.contains('genre-anime')) {
            const id = e.target.dataset.id;
            const name = e.target.dataset.name;
            try {
                spinner.removeAttribute('hidden');
                const response = await fetch(`${baseurl}genre/anime/${id}/1`);
                const responseJson = await response.json();
                if (responseJson.status == "403") {
                    alert(responseJson.message);
                } else {
                    const title = document.querySelector('#genre-anime');
                    title.innerHTML = `${name} (${responseJson.anime.slice(0, 100).length})  <button class="btn btn-danger btn-sm shadow ml-2 btn-delete-genre">Delete</button>`;
                    genreResult.genreres = responseJson.anime.slice(0, 100);
                }
                spinner.setAttribute('hidden', '');
            } catch (error) {
                alert(error);
                spinner.setAttribute('hidden', '');
            }
        }
    })

    getAnimeList();
    getSeasonArchive();
    getUpcoming();
    getSeasonList();
}
export default main;