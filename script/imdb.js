const BASE_URL = "https://imdb-api.com/en/API/Search/";
const API_KEY = "k_bn94pqmj"

//  fetch pattern base url+api_key+ expression

let theathreMovies = [];

// get in theathre movies

fetch("https://imdb-api.com/en/API/InTheaters/k_bn94pqmj").then((response)=>{
  console.log(response.json())
  // return response.json()
})


const createComingMovie = (movieObj)=>{
  let movie  = document.createElement("div");
  let movie_name = document.createElement("p");
  let movie_img_container = document.createElement("div");
  let movie_img = document.createElement("img")

  // add classes to the div
  movie.classList.add("movie");
  movie_name.classList.add("movie_name");
  movie_img_container.classList.add("movie_img_container");
  movie_img.classList.add("movie_img");

  // place in image in the image tag
  movie_img.src = movieObj.src;
  // place in movie name in the name tag(The tag that holds the movie name)
  movie_name.innerHTML = movieObj.title;

  // append image to image container
  movie_img_container.append(movie_img);

  // append movie image to parent
  movie.append(movie_img_container);

  // append movie name to parent
  movie.append(movie_name);


}

const comingSection = ()=>{

}
