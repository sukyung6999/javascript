// 💡 https://github.com/erumcoding/js-101-part-1
// 👉 이 아래 코드를 작성하세요.

import { API_KEY,ACCESS_TOKEN } from "./env.js"
const form = document.querySelector('form');

const removeAll = () => {
    const movies = document.querySelectorAll('.movie');

    movies.forEach((movie) => {
        movie.remove();
    })
}

const searchMovie = (event) => {
    event.preventDefault();

    const input = document.querySelector('input');
    const {value : keyword} = input;
    const searchURL = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}`

    if (keyword) {
        removeAll();
    
        fetch(searchURL)
            .then((response) => response.json())
            .then(({results}) => results.forEach((movie) => {
                createBlock(movie);
            }));
    }
}

const movieDetail = (event) => {
    const {id} = event.target.parentElement;
    const detailURL = `https://www.themoviedb.org/movie/${id}`;
    window.open(detailURL, '_blank');
}

const createBlock = ({
    id, 
    poster_path,
    original_title, 
    title, 
    vote_average, 
    release_date
}) => {
    const parent = document.querySelector('.contents');
    const movie = document.createElement('div');
    const poster = document.createElement('img');
    const detail = document.createElement('div');
    const info = document.createElement('div');
    const date = document.createElement('div');
    const rate = document.createElement('div');
    const h3 = document.createElement('h3');

    movie.className = 'movie';
    detail.className = 'detail';
    info.className = 'info';
    date.className = 'date';
    rate.className = 'rate';

    movie.id = id;
    poster.src = `https://image.tmdb.org/t/p/original/${poster_path}`;
    h3.innerText = `${original_title} (${title})`;
    date.innerText = release_date;
    rate.innerText = `🏆${vote_average}`;

    poster.addEventListener('click', movieDetail);

    info.append(date, rate);
    detail.append(info, h3);
    movie.append(poster, detail);
    parent.append(movie);
}

const getPopularMovies = () => {
    /**
     * 
     * api_key 바로 권한이 생기지 않음....
     * 한시간 기다려야함...
     * 안되는동안 토큰으로 연결하니 됐음...
     * const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
        .then((response) => response.json())
        .then(({results}) => {
            results.forEach((movie) => {
                createBlock(movie);
            })
        });
     */
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
      
    fetch(URL)
    .then((response) => response.json())
    .then(({results}) => {
        results.forEach((movie) => {
            createBlock(movie);
            console.log(movie);
        })
    });
}
getPopularMovies();
form.addEventListener('submit', searchMovie);