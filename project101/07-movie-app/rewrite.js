import { API_KEY } from "./env.js"

const form = document.querySelector('form');

const removeAll = () => {
    const movies = document.querySelectorAll('.movie');

    movies.forEach((movie) => {
        movie.remove();
    })
}

const searchMovies = (event) => {
    event.preventDefault(); 

    const input = document.querySelector('input');
    const {value: keyword} = input;
    const searchURL = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}`;

    fetch(searchURL)
        .then((response) => response.json())
        .then(({results}) => {
            removeAll();
            results.forEach((movie) => {
                createMovie(movie);
            })
        })
}

const moveToDetail = (event) => {
    const {id} = event.target.parentElement;
    const URL = `https://www.themoviedb.org/movie/${id}`;
    window.open(URL, '_blank');
}

const createMovie = ({
    poster_path,
    release_date,
    vote_average,
    original_title,
    title,
    id
}) => {
    const contentBox = document.querySelector('.contents');

    const movie = document.createElement('div');
    const img = document.createElement('img');
    const detail = document.createElement('div');
    const info = document.createElement('div');
    const date = document.createElement('div');
    const rate = document.createElement('div');
    const h3 = document.createElement('h3');

    movie.id = id;
    movie.className = 'movie';
    detail.className = 'detail';
    info.className = 'info';
    date.className = 'date';
    rate.className = 'rate'

    img.src = `https://image.tmdb.org/t/p/original/${poster_path}`;
    date.innerText = release_date;
    rate.innerText = `🏆${vote_average}`;
    h3.innerText = `${original_title} (${title})`;

    info.append(date, rate);
    detail.append(info, h3);
    movie.append(img, detail);
    contentBox.append(movie);

    movie.addEventListener('click', moveToDetail);
}

const getPopularMovies = () => {
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;

    fetch(URL)
        .then((response) => response.json())
        .then(({results}) => {
            results.forEach((movie) => {
                createMovie(movie);
            })
        })
}
getPopularMovies();

form.addEventListener('submit', searchMovies);