const numberOfFilms = +prompt("Сколько фильмов вы уже посомтрели", " ");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const   a = prompt("Сколько фильмов вы уже посомтрели", ""),
        b = prompt("На сколько его оцените?",""),
        c = prompt("Один из последних просмотренних фильмов?",""),
        d = prompt("на сколько оцените его", '');


personalMovieDB.movies[a] =  b;
personalMovieDB.movies[c] =  d;

console.log(personalMovieDB);