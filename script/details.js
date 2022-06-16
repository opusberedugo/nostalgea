let id = window.location.href.split("#")[1]
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const BASE_ORIGINAL_IMAGE_URL = "https://image.tmdb.org/t/p/original/";
let cast = "";
let overview = "";
let movieTitle = "";
let imgUrl= "";
let castList = document.querySelector(".casts");

const createCastSlide = (c) =>{
  let castSlide = document.createElement("div");
  castSlide.classList.add("cast");
  castSlide.classList.add("white-text");

  castSlide.innerHTML =
  `
  <div class="img">
    <img src="${BASE_IMAGE_URL+c.profile_path}" alt="" srcset="">
  </div>
  <p class="actor-name">${c.original_name}</p>
  <p class="role">(${c.character})</p>
  `
  return castSlide
}

//#region 
fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=22a93686981c96083dfddfa2b3a707fd&language=en-US`)
.then((res => res.json()))
.then((data)=>{
  // console.log(data)
  cast = data.cast;
}).then(()=>{
  for (const c of cast) {
   castList.appendChild(createCastSlide(c)); 
  }
}).then(()=>{
  $("#carousel").owlCarousel({
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
//#endregion


//#region 
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=22a93686981c96083dfddfa2b3a707fd&language=en-US`).then((res => res.json()))
.then((data)=>{
  overview = data.overview
  movieTitle = data.title
  imgUrl = data.backdrop_path
}).then(()=>{
  // document.querySelector("p.overview-details").innerHTML = overview
  $(".backdrop img").attr("src", `${BASE_ORIGINAL_IMAGE_URL+imgUrl}`);
  $("p.overview-details").text(overview)
  $(".title").text($(".title").text().replace("#",movieTitle))
})
//#endregion




