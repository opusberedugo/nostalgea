const navTrigger = document.querySelector("nav .brand .menu");
const navOptions = document.querySelector("nav .options");

navTrigger.addEventListener("click", (e)=>{
  $(navOptions).slideToggle();
})

