let API_Key = '34a049d3fb8f5b726b30b0eaca49c7db';
let API_URL = 'https://api.themoviedb.org/3/tv/popular?api_key=34a049d3fb8f5b726b30b0eaca49c7db&language=en-US&page=1'

let IMG_URL = 'https://image.tmdb.org/t/p/w500';
let search_URL = 'https://api.themoviedb.org/3/search/movie?api_key=34a049d3fb8f5b726b30b0eaca49c7db&query=Jack+Reacher';
let main = document.getElementById('main');
let form = document.getElementById('form');
let search = document.getElementById('search');

getMovies(API_URL);
function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        // console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML = '';

    data.forEach(movie => {
    let {name, poster_path, vote_average, overview} = movie
    let movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
    <img src="${IMG_URL+poster_path}" alt="${name}">

    <div class="movie-info">
        <h3>${name}</h3>
        <span class="${getColor(vote_average)}">${vote_average}</span>
    </div>

    <div class="overview">
    <h3>Overview</h3>
    ${overview}
    </div>
    `
    main.appendChild(movieEl);
});
}

function getColor(vote){
    if(vote>=8){
        return 'green'
    }else if(vote>=5){
        return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let searchTerm = search.value;
    if(searchTerm){
        getMovies(search_URL+'&query='+searchTerm);
    }else{
        getMovies(API_URL)
    }
})