const API_KEY = "22a93686981c96083dfddfa2b3a707fd";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const BASE_ORIGINAL_IMAGE_URL = "https://image.tmdb.org/t/p/original/";

const cheat = document.getElementById("cheat");
let cheatText = ''

let carousel =  document.getElementById("carousel");
let theatreMovies = [];

let comingSoonSection = document.querySelector("#upcoming-carousel");
let upcomingMovies = [];


const createTheatreSlide = (movie)=>{
  let slide = document.createElement("a");
  slide.dataset.id = movie.id
  slide.classList.add("movie");
  slide.classList.add("white-text");
  slide.classList.add("slide");
  slide.href =`./details.html#${movie.id}`
  slide.style.backgroundImage = `linear-gradient(120deg, #0a0a0dcf, #0a0a0dcf), url(${BASE_ORIGINAL_IMAGE_URL+movie.backdrop_path})`
  
  slide.innerHTML = ` 
    <div class="details">
      <p class="title">${movie.title}</p>
      <p class="overview">${movie.overview}</p>
      <button href="./book.html" class="cta red-bg borderless white-text">Book Now</button>
    </div>
    `;

  return slide;
}

const createUpcomingSlide = (movie) =>{
  let slide = document.createElement("a");

  slide.classList.add("movie");
  slide.classList.add("coming-soon");
  slide.dataset.id = movie.id
  slide.href = `./details.html#${slide.dataset.id}`

  slide.innerHTML =
  `<div class="img">
    <img src="${BASE_IMAGE_URL+movie.poster_path}" alt="">
   </div>
   <div class="details">
    <p class="name white-text">${movie.title}</p>
    <a href="./details.html" class=" red-bg white-text">Movie Details</a>
   </div>`

  return slide
}

// New Movies
fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=22a93686981c96083dfddfa2b3a707fd&language=en-US&page=1")
.then((result) =>{ 
  return result.json()
  // cheatText = result.text();
})
.then((data)=>{
  theatreMovies = data.results
}).then(()=>{
  for (const theatreMovie of theatreMovies) {
   carousel.append(createTheatreSlide(theatreMovie)); 
  }
}).then(()=>{
  $("#carousel").owlCarousel({
    items:1,
    dotsEach:false,
    dots:false,
    autoplay:true,
    autoplaySpeed: 2000,
    dragEndSpeed: 500,
    autoplayHoverPause:false
  });
})

// Upcoming Movies
fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=22a93686981c96083dfddfa2b3a707fd&language=en-US&page=1")
.then((result => result.json()))
.then((data)=>{
  upcomingMovies = [...data.results]
}).then(()=>{
  for (const movie of upcomingMovies) {
    comingSoonSection.append(createUpcomingSlide(movie))
   } 
}).then(()=>{
  $("#upcoming-carousel").owlCarousel({
    items:4,
    dotsEach:false,
    dots:false,
    autoplay:true,
    autoplaySpeed: 2000,
    dragEndSpeed: 500,
    autoplayHoverPause:false,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:2,
      },
      765:{
        items:3,
      },
      900:{
        items:4,
      },
      1000:{
        items:5
      }
      
    }
  });
})


const getCredit = new Promise(()=>{

})





