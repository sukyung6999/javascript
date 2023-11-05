import {API_KEY} from './env.js';

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
  const keyword = input.value;
  const searchURL = `https://api.themoviedb.org/3/search/movie?query=${keyword}&language=ko-KR&api_key=${API_KEY}`;

  if (keyword) {
    removeAll();
    
    fetch(searchURL)
      .then((response) => response.json())
      .then(({results}) => {
        console.log(results);
        results.forEach((movie) => createMovie(movie));
      })
  }
}

const moveToDetail = (event) => {
  const {id} = event.target.parentElement;
  console.log(id);
  const detailURL = `https://www.themoviedb.org/movie/${id}`;
  window.open(detailURL, '_blank');
}

const createMovie = (movieInfo) => {
  const contents = document.querySelector('.contents');

  const movie = document.createElement('div');
  const img = document.createElement('img');
  const detail = document.createElement('div');
  const info = document.createElement('div');
  const date = document.createElement('div');
  const rate = document.createElement('div');
  const h3 = document.createElement('div');

  movie.id = movieInfo.id;
  movie.className = 'movie';
  detail.className = 'detail';
  info.className = 'info';
  date.className = 'date';
  rate.className = 'rate';

  img.src =  `https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`;
  date.innerText = movieInfo.release_date;
  rate.innerText = `🏆 ${movieInfo.vote_average}`;
  h3.innerText = `${movieInfo.original_title} (${movieInfo.title})`;

  info.append(date, rate);
  detail.append(info, h3);
  movie.append(img, detail);
  contents.append(movie);

  movie.addEventListener('click', moveToDetail);
}

const getMovieList = () => {
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
  
  fetch(URL)
  .then((response) => response.json())
  .then(({results}) => {
    results.forEach((movie) => createMovie(movie));
    })
}
getMovieList();
form.addEventListener('submit', searchMovies);